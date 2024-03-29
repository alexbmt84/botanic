<template>

  <section
      class="container flex flex-col items-center px-6 py-12 mx-auto lg:flex-row"
  >

    <div class="lg:w-1/2">

      <h1
          class="max-w-xl font-serif text-4xl font-medium tracking-wide text-[#343D33] capitalize md:text-6xl"
      >
        Rencontrez Stéphane Beaumont
      </h1>

      <p class="max-w-lg mt-4 text-gray-500">
        Pour vos travaux de jardinage et d’entretien vous pourrez
        bénéficier d’une déduction ou crédit d’impôts de 50% de votre facture
        TTC.
      </p>

      <p class="max-w-lg mt-4 text-gray-500">
        Cet avantage fiscal est cumulable avec ceux d’autres prestations de
        service à la personne.
      </p>

      <div class="mt-6 sm:flex sm:items-center">

        <a
            href="https://www.impots.gouv.fr/portail/particulier/emploi-domicile/"
            target="_blank"
            class="bg-[#475F45] hover:bg-[#475F45]/80 duration-300 transition-colors border-2 border-[#475F45] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white mb-5"
        >
          En savoir plus
        </a>

      </div>

    </div>

    <video class="mt-8 mx-auto lg:w-1/2" width="550" autoplay loop muted playsinline>
      <source src="/Jardins.mp4" type="video/mp4"/>
      <track src="" kind="captions" srclang="fr" label="french_captions">
    </video>

  </section>

  <section class="bg-[#343D33] lg:mt-12">

    <div class="container flex flex-col px-6 py-16 mx-auto lg:mt-12">

      <div
          class="order-2 mt-8 lg:order-1 lg:mt-0 lg:flex lg:items-center lg:-mx-6"
      >

        <img
            class="object-cover w-full lg:w-1/2 lg:mx-6 h-72 lg:h-96"
            src="/img/image1.webp"
            alt=""
        />

        <div class="mt-8 lg:w-1/2 lg:mx-6 lg:mt-0">

          <h2
              class="font-serif text-2xl text-white capitalize md:text-4xl lg:text-5xl"
          >
            Ma bio
          </h2>

          <p class="mt-4 text-gray-200">
            Stéphane Beaumont, 48 ans Jardinier à Bédoin et ses environs
          </p>

          <p class="mt-4 text-gray-200">
            Je travaille en tant que Jardinier de confiance à Bédoin et ses
            environs, et je ne vois rien d'autre qui pourrait me donner plus de
            satisfaction que mon activité.
          </p>

          <p class="mt-4 text-gray-200">
            En tant que professionnel, je m'engage à respecter deux grands
            principes : offrir le plus haut niveau de service possible et
            m'assurer que mes prix demeurent concurrentiels et abordables. La
            qualité de mes services dans le respect de l'environnement est la
            raison pour laquelle tant de mes clients me sont si fidèles et sont
            heureux de me recommander à d'autres.
          </p>

          <a
              class="inline-flex px-6 py-3 mt-6 text-white border-2 border-white hover:bg-[#475F45] duration-300 transition-colors"
              href="/contactez-moi"
          >
            Contact
          </a>

        </div>

      </div>

      <img
          class="order-1 object-cover lg:order-2 w-ful h-72 lg:h-96 lg:mt-12"
          src="/img/image2.webp"
          alt=""
      />

    </div>

  </section>

  <section class="container px-6 py-8 mx-auto lg:py-16">

    <h3
        class="text-center font-serif text-3xl text-[#343D33] capitalize md:text-4xl lg:text-5xl"
    >
      Contact
    </h3>

    <div class="app-advanced p-10">

      <form
          method="POST"
          class="mx-auto mt-5 w-2/3"
      >

        <div class="mb-3 pt-0">

          <input
              type="text"
              placeholder="Nom"
              name="name"
              class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
          />

        </div>

        <div class="mb-3 pt-0">

          <input
              type="email"
              placeholder="Email"
              name="email"
              class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
          />

        </div>

        <div class="mb-3 pt-0">

          <input
              type="text"
              placeholder="Objet"
              name="object"
              class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
          />

        </div>

        <div class="mb-3 pt-0">

          <textarea
              placeholder="Rédigez votre message ici..."
              name="message"
              class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
          />

        </div>

        <div class="pt-0">

          <a
              href="#"
              class="bg-[#475F45] hover:bg-[#475F45]/80 duration-300 transition-colors border-2 border-[#475F45] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white"
          >
            Envoyer
          </a>

        </div>

      </form>

    </div>

  </section>

  <iframe title="map"
          width="100%"
          height="550px"
          frameborder="0"
          allowfullscreen
          allow="geolocation"
          rel="preload"
          src="//umap.openstreetmap.fr/en/map/untitled-map_1043927?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true">
  </iframe>

  <p>
    <a href="//umap.openstreetmap.fr/en/map/untitled-map_1043927?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true"
       aria-label="mapLink"
       rel="preload"
    >
    </a>
  </p>

</template>

<script>
export default {
  name: 'Home',
}
</script>