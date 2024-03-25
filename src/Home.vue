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
        Pour vos petits travaux de jardinage et d’entretien vous pourrez
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

        <!-- <a
          href="#"
          class="border-2 text-sm duration-300 transition-colors hover:bg-[#475F45] hover:text-white font-bold leading-4 mt-4 sm:mt-0 tracking-widest text-[#475F45] sm:mx-4 border-[#475F45] px-6 block text-center py-3 uppercase"
        >
          Learn More
        </a> -->
      </div>
    </div>

    <video class="mt-8 mx-auto" width="550" autoplay loop muted playsinline>
  <source src="/Jardins.mp4" type="video/mp4" />

</video>
  </section>

  <section class="bg-[#343D33] lg:mt-12">
    <div class="container flex flex-col px-6 py-16 mx-auto lg:mt-12">
      <div
        class="order-2 mt-8 lg:order-1 lg:mt-0 lg:flex lg:items-center lg:-mx-6"
      >
        <img
          class="object-cover w-full lg:w-1/2 lg:mx-6 h-72 lg:h-96"
          src="https://static.wixstatic.com/media/8e96f6279946421b837130660092de27.jpg/v1/fill/w_1366,h_810,fp_0.51_0.35,q_85,usm_0.66_1.00_0.01,enc_auto/8e96f6279946421b837130660092de27.jpg"
          alt=""
        />

        <div class="mt-8 lg:w-1/2 lg:mx-6 lg:mt-0">
          <h3
            class="font-serif text-2xl text-white capitalize md:text-4xl lg:text-5xl"
          >
            Ma bio
          </h3>

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
        src="https://static.wixstatic.com/media/9a99163db20440d0b4a9fb2f42474481.jpg/v1/fill/w_1366,h_575,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/9a99163db20440d0b4a9fb2f42474481.jpg"
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

    <!-- <div class="mt-8 xl:-mx-6 xl:flex">
      <div class="xl:w-1/2 xl:mx-6">
        <img class="object-cover w-full h-96" src="https://images.unsplash.com/photo-1626838524909-7c584c2266f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="">

        <h2 class="mt-6 font-serif text-3xl font-medium text-gray-700">Plants Around Us</h2>

        <p class="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nuncLorem ipsum dolor sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

        <p class="mt-4 italic text-gray-600">December 23, 2021</p>
      </div>

      <div class="mt-8 space-y-8 xl:w-1/2 xl:mx-6 xl:mt-0">
        <div class="md:-mx-4 md:flex md:items-center">
          <img class="object-cover w-full h-56 md:h-48 md:mx-4 md:w-80 shrink-0" src="https://images.unsplash.com/photo-1556426356-0fdc8b663467?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80" alt="">

          <div class="mt-6 md:mx-4 md:mt-0">
            <h2 class="font-serif text-2xl font-medium text-gray-700 ">Lush Gardens</h2>
  
            <p class="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nuncLorem ipsum dolor sit...</p>
  
            <p class="mt-4 italic text-gray-600">December 16, 2021</p>
          </div>
        </div>

        <div class="md:-mx-4 md:flex md:items-center">
          <img class="object-cover w-full h-56 md:h-48 md:mx-4 md:w-80 shrink-0" src="https://images.unsplash.com/photo-1583470790878-4f4f3811a01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" alt="">

          <div class="mt-6 md:mx-4 md:mt-0">
            <h2 class="font-serif text-2xl font-medium text-gray-700 ">Exotic Nature</h2>
  
            <p class="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nuncLorem ipsum dolor sit...</p>
  
            <p class="mt-4 italic text-gray-600">November 11, 2021</p>
          </div>
        </div>

        <div class="md:-mx-4 md:flex md:items-center">
          <img class="object-cover w-full h-56 md:h-48 md:mx-4 md:w-80 shrink-0" src="https://images.unsplash.com/photo-1638790491374-a2affccd8c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="">

          <div class="mt-6 md:mx-4 md:mt-0">
            <h2 class="font-serif text-2xl font-medium text-gray-700 ">It Starts with Soil</h2>
  
            <p class="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nuncLorem ipsum dolor sit...</p>
  
            <p class="mt-4 italic text-gray-600">November 3, 2021</p>
          </div>
        </div>
      </div>
    </div> -->
  </section>

  <iframe width="100%" 
          height="550px" 
          frameborder="0" 
          allowfullscreen 
          allow="geolocation" 
          src="//umap.openstreetmap.fr/en/map/untitled-map_1043927?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true">
  </iframe>
  <p>
    <a href="//umap.openstreetmap.fr/en/map/untitled-map_1043927?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true"></a>
  </p>

</template>
<script>
export default {
  name: 'Home',
  // autres options du composant
}
</script>