<template>
  <section class="bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-800 py-20 px-6">
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
      <div class="text-center md:text-left">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Olá, eu sou o Caio Saab</h1>
        <p class="text-xl text-gray-700 mb-6 max-w-xl">
          Estudante de Análise e Desenvolvimento de Sistemas apaixonado por tecnologia, programação e constante evolução.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <router-link to="/contato" class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded shadow transition">Entrar em contato</router-link>
          <router-link to="/sobre" class="border border-blue-600 text-blue-600 hover:bg-blue-100 py-2 px-6 rounded transition">Ver mais</router-link>
        </div>
      </div>
    </div>
  </section>
</template>
