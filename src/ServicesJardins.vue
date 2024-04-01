<template>

  <div class="px-6 py-12">

    <section class="container flex flex-col lg:flex-row items-start px-6 mx-auto space-y-12 lg:space-y-0 lg:space-x-6">

      <div class="lg:w-1/2">

        <h1 class="text-4xl font-serif font-medium tracking-wide text-[#343D33] md:text-6xl">
          Contrat d'entretien annuel ou prestations ponctuelles
        </h1>

        <p class="mt-5 text-gray-500 font-bold">
          Bédoin et ses environs
        </p>

        <p class="mt-4 text-gray-500">
          Reposez-vous, je m'occupe de tondre votre pelouse, débroussailler, entretenir vos massifs, désherber, ramasser
          les feuilles, bêcher et biner, apporter les bons engrais et amendements à vos végétaux, tailler vos haies et
          arbustes.
        </p>

        <div class="mt-6">

          <a href="/contactez-moi"
            target="_blank"
            aria-label="contact"
            class="block bg-[#475F45] hover:bg-[#475F45]/80 transition-colors border-2 border-[#475F45] text-center px-6 py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white mb-5">
            Contactez-moi
          </a>

        </div>

      </div>

      <div class="lg:w-1/2 flex justify-center lg:justify-end">
        <img class="object-cover h-auto max-w-full rounded-xl" src="/img/taille_arbustives.webp" alt="">
      </div>

    </section>

  </div>

  <section class="lg:px-16 px-12">

    <div class="container bg-[#343D33] mx-auto py-8 px-8">

      <div class="grid md:grid-cols-3 gap-8">

        <div class="flex flex-col items-center text-center">

          <img src="/img/tonte.webp" alt="Tonte" class="w-full shadow-lg">
          <h2 class="mt-4 font-bold text-xl text-white">Tonte</h2>
          <p class="mt-2 text-white">Le souci du détail pour un gazon plus dense et résistant</p>

        </div>

        <div class="flex flex-col items-center text-center">

          <img src="/img/taille_haies.webp" alt="Tailles des haies" class="w-full shadow-lg">
          <h2 class="mt-4 font-bold text-xl text-white">Tailles des haies</h2>
          <p class="mt-2 text-white">Un service d'expert avec du matériel adapté pour la taille de haie ou rabattage en
            hauteur</p>

        </div>

        <div class="flex flex-col items-center text-center">

          <img src="/img/debroussaillage.webp" alt="Débroussaillage" class="w-full shadow-lg">
          <h2 class="mt-4 font-bold text-xl text-white">Débroussaillage</h2>
          <p class="mt-2 text-white">Risques incendies ....N'attendez pas le dernier moment pour protéger votre
            patrimoine et vous mettre</p>

        </div>

      </div>

    </div>

  </section>

  <section class="lg:px-16 px-12 mt-20 mb-20">

    <div class="container bg-[#343D33] mx-auto py-8 px-8">

      <div class="grid md:grid-cols-3 gap-8">

        <div class="flex flex-col items-center text-center">

          <img src="/img/brf.webp" alt="BRF" class="w-full shadow-lg">
          <h2 class="mt-4 font-bold text-xl text-white">BRF</h2>
          <p class="mt-2 text-white">Afin de limiter l’évaporation du sol et la croissance des mauvaises herbes.</p>

        </div>

        <div class="flex flex-col items-center text-center">

          <img src="/img/plantation.webp" alt="Plantation" class="w-full shadow-lg">
          <h2 class="mt-4 font-bold text-xl text-white">Plantation</h2>
          <p class="mt-2 text-white">Un service d'expert</p>

        </div>

        <div class="flex flex-col items-center text-center">

          <img src="/img/desherbage.web.webp" alt="Désherbage de jardin" class="w-full shadow-lg">
          <h2 class="mt-4 font-bold text-xl text-white">Désherbage de jardin</h2>
          <p class="mt-2 text-white">Dans une démarche zéro phyto, j'utilise la technique de désherbage adaptée à votre
            jardin en privilégiant les solutions douces.</p>

        </div>

      </div>

    </div>

  </section>

</template>

<script>
export default {
  name: 'ServicesJardins',
}
</script>
  