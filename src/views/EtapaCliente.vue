<template>
  <div class="w-[80vw] mx-auto ">
    <HomeInfo 
      title="Quem vai ficar mais bonito hoje?"
      subtitle="Preencha seus dados pra confirmarmos seu agendamento."
    />

    <form
      action=""
      class="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4"
    >
      <p class="font-semibold text-xl text-center py-4">
        Etapa <span class="font-bold">1</span> de
        <span class="font-bold">4</span>
      </p>
      <fieldset>
        <input
          class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          type="text"
          name="name"
          id="name"
          placeholder="Qual o seu nome?"
          required
        />
      </fieldset>
      <fieldset>
        <input
          class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          type="text"
          name="phone"
          id="phone"
          placeholder="Qual o seu número?"
          required
        />
      </fieldset>

      <input
        
        @click="nextStep"
        type="submit"
        value="Próxima etapa"
        class="bg-gold text-2xl my-8 font-bold rounded-sm h-14 w-full"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import HomeInfo from "../components/HomeInfo.vue";

const router = useRouter();

function nextStep() {
  router.push("/servico");
}
</script>
