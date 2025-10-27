<template>
  <div class="min-h-screen flex flex-col bg-gray">
    <div class="flex-grow flex flex-col justify-center items-center px-4">
      <HomeInfo
        title="Vamos começar!"
        subtitle="Crie sua conta e agende seus horários facilmente."
      />

      <form
        @submit.prevent="register"
        class="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg mt-6 space-y-6 animate-fadeIn"
      >
        <p class="text-center text-xl font-semibold">
          Faça seu <span class="text-gold font-bold">cadastro</span>
        </p>

        <fieldset>
          <label class="block mb-1 font-medium text-gray-700">Nome completo</label>
          <input
            v-model.trim="name"
            type="text"
            placeholder="Seu nome completo"
            :class="[
              'w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition',
              errors.name ? 'border-red-400' : 'border-gray-300'
            ]"
          />
          <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
        </fieldset>

        <fieldset>
          <label class="block mb-1 font-medium text-gray-700">Telefone</label>
          <input
            v-model.trim="phone"
            v-maska="'(##) #####-####'"
            type="text"
            placeholder="(19) 99999-9999"
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
            placeholder="Crie uma senha"
            :class="[
              'w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition',
              errors.pwd ? 'border-red-400' : 'border-gray-300'
            ]"
          />
          <p v-if="errors.pwd" class="text-red-500 text-sm mt-1">{{ errors.pwd }}</p>
        </fieldset>

        <PrimaryButton
          name="Cadastrar"
          :method="register"
          textColor="text-white"
          bgColor="bg-gold"
          hoverColor="bg-yellow-600"
          width="w-full"
          height="h-14"
        />

        <p class="text-center text-gray-600 mt-4">
          Já tem uma conta?
          <router-link
            to="/login"
            class="text-gold font-semibold hover:underline"
          >Entrar</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeInfo from "../components/HomeInfo.vue";
import PrimaryButton from "../components/PrimaryButton.vue";
import api from "../api";
import { useRouter } from "vue-router";

const router = useRouter();

let name = "";
let phone = "";
let pwd = "";
let errors = { name: "", phone: "", pwd: "" };

function validate() {
  errors.name = name ? "" : "Informe seu nome.";
  errors.phone = phone ? "" : "Informe seu número de telefone.";
  errors.pwd = pwd ? "" : "Crie uma senha.";
  return !errors.name && !errors.phone && !errors.pwd;
}

async function register() {
  if (!validate()) return;

  try {
    const res = await api.post("/clientes/registro", { name, phone, pwd });
    if (res.status !== 201) console.log("Erro no cadastro");

    router.push("/login");
  } catch (err: any) {
    console.error(err);
    alert(err.response?.data?.error || "Erro ao cadastrar");
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
