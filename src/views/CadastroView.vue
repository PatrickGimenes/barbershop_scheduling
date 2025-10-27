<template>
  <div class="w-[80vw] mx-auto">
    <HomeInfo
      title="Vamos começar!"
      subtitle="Crie sua conta e agende seus horários facilmente."
    />

    <form
      @submit.prevent="register"
      class="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4"
    >
      <p class="font-semibold text-xl text-center py-4">
        Faça seu <span class="font-bold text-gold">cadastro</span>
      </p>

      <fieldset>
        <input
          v-model.trim="name"
          :class="[
            'w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent',
            errors.name ? 'border-red-400' : 'border-gray-300',
          ]"
          type="text"
          placeholder="Seu nome completo"
        />
        <p v-if="errors.name" class="text-red-500 text-sm mt-1">
          {{ errors.name }}
        </p>
      </fieldset>

      <fieldset>
        <input
          v-model.trim="phone"
          v-maska="'(##) #####-####'"
          :class="[
            'w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent',
            errors.phone ? 'border-red-400' : 'border-gray-300',
          ]"
          type="text"
          placeholder="(19) 99999-9999"
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
          placeholder="Crie uma senha"
        />
        <p v-if="errors.pwd" class="text-red-500 text-sm mt-1">
          {{ errors.pwd }}
        </p>
      </fieldset>

      <input
        type="submit"
        value="Cadastrar"
        class="bg-gold text-2xl my-6 font-bold rounded-sm h-14 w-full cursor-pointer hover:opacity-90 transition"
      />

      <p class="text-center text-gray-600">
        Já tem uma conta?
        <router-link to="/login" class="text-gold font-semibold hover:underline"
          >Entrar</router-link
        >
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import HomeInfo from "../components/HomeInfo.vue";
import api from "../api";
import { useRouter } from "vue-router";

const router = useRouter();

let name = "";
let phone = "";
let pwd = "";
let errors = {
  name: "",
  phone: "",
  pwd: "",
};

function validate() {
  errors.name = name ? "" : "Informe seu nome.";
  errors.phone = phone ? "" : "Informe seu número de telefone.";
  errors.pwd = pwd ? "" : "Crie uma senha.";
  return !errors.name && !errors.phone && !errors.pwd;
}

async function register() {
  if (!validate()) return;

  try {
    const res = await api.post("clientes/registro", { name, phone, pwd });
    if (res.status !== 201) {
      console.log("Erro no cadastro");
    }

    router.push("/login");
  } catch (err: any) {
    console.error(err);
    alert(err.response?.data?.error || "Erro ao cadastrar");
  }
}
</script>
