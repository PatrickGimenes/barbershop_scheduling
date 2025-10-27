<template>
  <div class="w-full bg-gray-50 text-gray-900">
    <!-- Hero Section -->
    <section class="relative bg-black text-gold py-24 px-6 md:px-16">
      <img
        src="../assets/hero_image.jpg"
        alt="Barbearia Barrado Jr"
        class="absolute inset-0 w-full h-full object-cover opacity-30"
        loading="lazy"
      />
      <div class="relative z-10 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          Seu corte, no melhor horário pra você
        </h1>
        <p class="text-lg md:text-2xl mb-8">
          Agende online em poucos segundos — rápido, fácil e sem espera.
        </p>
        <PrimaryButton
          name="Agendar Agora"
          :method="iniciarAgendamento"
          text-color="text-gray-900"
        />
      </div>
    </section>

    <!-- Sobre a Barbearia -->
    <section class="py-16 px-6 md:px-16 bg-white">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-6">
        Sobre a Barbearia
      </h2>
      <p
        class="text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto"
      >
        Na Barbearia Barrado Jr, oferecemos cortes, barba e sobrancelha com
        estilo e praticidade. Nosso objetivo é que você se sinta confiante e
        elegante, sem perder tempo esperando. Com profissionais experientes e um
        ambiente acolhedor, garantimos uma experiência única para cada cliente.
      </p>
    </section>

    <!-- Serviços -->
    <section class="py-16 px-6 md:px-16 bg-gray-100">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-6">
        Nossos Serviços
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div data-aos="fade-right" class="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="../assets/corte.jpg"
            alt="Corte de cabelo"
            class="w-full h-48 object-cover rounded-t-lg mb-4"
            loading="lazy"
          />
          <h3 class="text-xl font-semibold mb-2">Corte de Cabelo</h3>
          <p class="text-lg">
            Cortes modernos e clássicos para todos os estilos.
          </p>
        </div>
        <div data-aos="fade-up" class="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="../assets/barba.jpg"
            alt="Barba"
            class="w-full h-48 object-cover rounded-t-lg mb-4"
            loading="lazy"
          />
          <h3 class="text-xl font-semibold mb-2">Barba</h3>
          <p class="text-lg">Aparos e modelagens para um visual impecável.</p>
        </div>
        <div data-aos="fade-left" class="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="../assets/sobrancelha.jpg"
            alt="Sobrancelha"
            class="w-full h-48 object-cover rounded-t-lg mb-4"
            loading="lazy"
          />
          <h3 class="text-xl font-semibold mb-2">Sobrancelha</h3>
          <p class="text-lg">
            Design de sobrancelhas para realçar sua expressão.
          </p>
        </div>
      </div>
    </section>

    <!-- Contato -->
    <section class="bg-black text-gold py-16 px-4">
      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <!-- Telefone -->
        <div class="flex items-start space-x-4">
          <i class="fas fa-phone-alt text-2xl mt-1"></i>
          <div>
            <h3 class="font-bold text-xl mb-1">Telefone</h3>
            <p class="text-white">+55 (19) 99939-7888</p>
          </div>
        </div>

        <!-- Endereço -->
        <div class="flex items-start space-x-4">
          <i class="fas fa-map-marker-alt text-2xl mt-1"></i>
          <div>
            <h3 class="font-bold text-xl mb-1">Endereço</h3>
            <p class="text-white">
              R. Cel. Ernesto de Oliveira, 467 - São João da Boa Vista, SP
            </p>
          </div>
        </div>

        <!-- Instagram -->
        <div class="flex items-start space-x-4">
          <i class="fab fa-instagram text-2xl mt-1"></i>
          <div>
            <h3 class="font-bold text-xl mb-1">Instagram</h3>
            <p class="text-white">@barbearia_jr</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Localização -->
    <section class="py-16 px-6 md:px-16 bg-white">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-6">
        Onde Estamos
      </h2>
      <div data-aos="zoom-in" class="relative w-full h-96">
        <iframe
          class="absolute inset-0 w-full h-full border-0 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924.9557045970662!2d-46.79611673053294!3d-21.97976225511635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9cb7290e9023f%3A0xca03359174a106a4!2sR.%20Cel.%20Ernesto%20de%20Oliveira%2C%20467%20-%20Centro%2C%20S%C3%A3o%20Jo%C3%A3o%20da%20Boa%20Vista%20-%20SP%2C%2013870-249!5e0!3m2!1spt-BR!2sbr!4v1761528098126!5m2!1spt-BR!2sbr"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 px-6 md:px-16 bg-black text-white text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Pronto para agendar?</h2>
      <p class="text-lg mb-8">
        Escolha seu horário e garanta seu atendimento sem filas.
      </p>
      <PrimaryButton
        data-aos="flip-left"
        name="Agendar Agora"
        :method="iniciarAgendamento"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "vue-router";
import PrimaryButton from "../components/PrimaryButton.vue";
import { onMounted } from "vue";

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
});

const router = useRouter();

function iniciarAgendamento() {
  router.push("/login");
}
</script>
