<template>

  <div class="px-6 py-12">

    <h1 class="text-center font-serif text-3xl text-[#343D33] md:text-4xl lg:text-5xl">
      Biocontrôle
    </h1>

  </div>

  <div class="mx-auto px-12">

    <p class="text-center">Le biocontrôle se définit comme un ensemble de méthodes de protection des cultures faisant
      appel à des organismes vivants ou à des substances naturelles.</p>
    <p class="text-center mt-3">Le principe est d’utiliser les interactions qui existent entre les espèces dans le
      milieu naturel pour réguler les populations d’agresseurs des cultures.</p>
    <p class="text-center mt-3">Le biocontrôle s’inscrit dans un mouvement général cherchant à limiter les intrants
      (engrais, produits phytos, etc.) et à diversifier les solutions de protection des plantes.</p>

  </div>

  <section class="lg:px-16 px-12 mt-16 mb-20">

    <div class="container bg-[#343D33] mx-auto py-8 px-8 rounded-2xl">

      <div class="grid md:grid-cols-3 gap-8">

        <div class="flex flex-col items-center text-center">

          <img src="/img/buis.webp" alt="Buis" class="w-full shadow-lg border-2 border-white rounded-lg">
          <h2 class="mt-4 font-bold text-xl text-white">Buis</h2>
          <p class="mt-2 text-white">Protection de vos buis contre de la pyrale du buis en installant des pièges à
            phéromones ou avec un traitement naturel.</p>

        </div>

        <div class="flex flex-col items-center text-center">

          <img src="/img/palmiers.webp" alt="Palmiers" class="w-full shadow-lg border-2 border-white rounded-lg">
          <h2 class="mt-4 font-bold text-xl text-white">Palmiers</h2>
          <p class="mt-2 text-white">Traitement naturel et efficace contre les ravageurs du palmier avec piégeage ou
            application de nématodes.</p>

        </div>

        <div class="flex flex-col items-center text-center">

          <img src="/img/pucerons.webp" alt="Pucerons" class="w-full shadow-lg border-2 border-white rounded-lg">
          <h2 class="mt-4 font-bold text-xl text-white">Pucerons</h2>
          <p class="mt-2 text-white">En situation de forte infestation, mise en place des colonies de coccinelles et
            chrysops qui permettront de contrôler les dommages.</p>

        </div>

      </div>

    </div>

  </section>

</template>

<script>
export default {
  name: 'Biocontrole',
}
</script>
  