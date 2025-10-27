<template>
  <div class="w-[80vw] mx-auto">
    <HomeInfo
      title="Bem-vindo de volta!"
      subtitle="Entre com seus dados para acessar seus agendamentos."
    />

    <form
      @submit.prevent="login"
      class="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4"
    >
      <p class="font-semibold text-xl text-center py-4">
        Faça seu <span class="font-bold text-gold">login</span>
      </p>

      <fieldset>
        <input
          v-model.trim="phone"
          v-maska="'(##) #####-####'"
          :class="[
            'w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent',
            errors.phone ? 'border-red-400' : 'border-gray-300',
          ]"
          type="text"
          placeholder="(99) 99999-9999"
        />
        <p v-if="errors.phone" class="text-red-500 text-sm mt-1">
          {{ errors.phone }}
        </p>
      </fieldset>

      <fieldset>
        <input
          v-model.trim="pwd"
          :class="[
            'w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent',
            errors.pwd ? 'border-red-400' : 'border-gray-300',
          ]"
          type="password"
          placeholder="Sua senha"
        />
        <p v-if="errors.pwd" class="text-red-500 text-sm mt-1">
          {{ errors.pwd }}
        </p>
      </fieldset>

      <input
        type="submit"
        value="Entrar"
        class="bg-gold text-2xl my-6 font-bold rounded-sm h-14 w-full cursor-pointer hover:opacity-90 transition"
      />

      <p class="text-center text-gray-600">
        Ainda não tem uma conta?
        <router-link
          to="/cadastro"
          class="text-gold font-semibold hover:underline"
          >Cadastre-se</router-link
        >
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import HomeInfo from "../components/HomeInfo.vue";
import api, { setAccessToken } from "../api";
import { useRouter } from "vue-router";

const router = useRouter();

let phone = "";
let pwd = "";
let errors = {
  phone: "",
  pwd: "",
};

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
