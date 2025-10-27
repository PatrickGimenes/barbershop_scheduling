<template>
  <div class="min-h-screen flex flex-col bg-gray">
    <div class="flex-grow flex flex-col justify-center items-center px-4">
      <HomeInfo
        title="Bem-vindo de volta!"
        subtitle="Entre com seus dados para acessar seus agendamentos rapidamente."
      />

      <form
        @submit.prevent="login"
        class="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg mt-6 space-y-6 animate-fadeIn"
      >
        <p class="text-center text-xl font-semibold">
          Faça seu <span class="text-gold font-bold">login</span>
        </p>

        <fieldset>
          <label class="block mb-1 font-medium text-gray-700">Telefone</label>
          <input
            v-model.trim="phone"
            v-maska="'(##) #####-####'"
            type="text"
            placeholder="(99) 99999-9999"
            :class="[
              'w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition',
              errors.phone ? 'border-red-400' : 'border-gray-300'
            ]"
          />
          <p v-if="errors.phone" class="text-red-500 text-sm mt-1">{{ errors.phone }}</p>
        </fieldset>

        <fieldset>
          <label class="block mb-1 font-medium text-gray-700">Senha</label>
          <input
            v-model.trim="pwd"
            type="password"
            placeholder="Sua senha"
            :class="[
              'w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition',
              errors.pwd ? 'border-red-400' : 'border-gray-300'
            ]"
          />
          <p v-if="errors.pwd" class="text-red-500 text-sm mt-1">{{ errors.pwd }}</p>
        </fieldset>

        <PrimaryButton
          name="Entrar"
          :method="login"
          textColor="text-white"
          bgColor="bg-gold"
          hoverColor="bg-yellow-600"
          width="w-full"
          height="h-14"
        />

        <p class="text-center text-gray-600 mt-4">
          Ainda não tem uma conta?
          <router-link
            to="/cadastro"
            class="text-gold font-semibold hover:underline"
          >Cadastre-se</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeInfo from "../components/HomeInfo.vue";
import PrimaryButton from "../components/PrimaryButton.vue";
import api, { setAccessToken } from "../api";
import { useRouter } from "vue-router";

const router = useRouter();
let phone = "";
let pwd = "";
let errors = { phone: "", pwd: "" };

function validate() {
  errors.phone = phone ? "" : "Informe seu número de telefone.";
  errors.pwd = pwd ? "" : "Informe sua senha.";
  return !errors.phone && !errors.pwd;
}

async function login() {
  if (!validate()) return;

  try {
    const res = await api.post("/clientes/login", { phone, pwd });
    setAccessToken(res.data.accessToken);
    router.push("/servico");
  } catch (err: any) {
    console.error(err);
    alert(err.response?.data?.error || "Erro ao fazer login");
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.5s ease-out;
}
</style>
