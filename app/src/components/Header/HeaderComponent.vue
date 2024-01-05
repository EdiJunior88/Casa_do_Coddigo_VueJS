<template>
  <section
    class="container mx-auto min-w-64 max-w-xl flex justify-center items-center font-['Helvetica Neue'] font-light text-sm text-slate-500 leading-snug mt-52 mb-10 relative focus:outline-none"
  >
    <header class="w-full absolute top-[-155px] text-center">
      <h1 class="text-8xl text-red-300 font-thin">Tarefas</h1>

      <div class="text-xl text-center my-10">
        <RouterLink to="/" v-if="$route.path !== '/'">Ver Tarefas</RouterLink>
        <RouterLink to="/cep" v-if="$route.path !== '/cep'">Verificar CEP</RouterLink>
      </div>
    </header>
  </section>
</template>
