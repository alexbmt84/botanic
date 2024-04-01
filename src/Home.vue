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
            aria-label="informations"
            class="bg-[#475F45] hover:bg-[#475F45]/80 duration-300 transition-colors border-2 border-[#475F45] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white mb-5"
        >
          En savoir plus
        </a>

      </div>

    </div>

    <video class="mt-8 mx-auto rounded-xl border-2 border-emerald-900" width="450" autoplay loop muted playsinline>
      <source src="/Jardinage.mp4" type="video/mp4"/>
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
              aria-label="contact"
              alt="home1"
              rel="preload"
          >
            Contact
          </a>

        </div>

      </div>

      <img
          class="order-1 object-cover lg:order-2 w-ful h-72 lg:h-96 lg:mt-12"
          src="/img/image2.webp"
          alt="home2"
          rel="preload"
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

      <form @submit.prevent="sendMail" id="contactForm" class="mx-auto mt-5 w-2/3">

        <div class="mb-3 pt-0">
          <input type="text" placeholder="Nom" name="name"
                class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                v-model="name"
                required/>
        </div>

        <div class="mb-3 pt-0">
          <input type="email" placeholder="Email" name="email"
                class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                v-model="email"
                required/>
        </div>

        <div class="mb-3 pt-0">
          <input type="text" placeholder="Objet" name="object"
                class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                v-model="object"
                required
          />
        </div>

        <div class="mb-3 pt-0">
          <textarea placeholder="Rédigez votre message ici..." name="message"
                    class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    v-model="message"
                    required/>
        </div>

        <div class="form-result text-center mb-3">

          <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert" v-if="success && !error">
            <strong class="font-bold">Merci ! </strong>
            <span class="block sm:inline">Votre demande a été envoyée avec succès.</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg @click="closeAlert" class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
          </div>

          <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert" v-if="!success && error">
            <strong class="font-bold">Oups. </strong>
            <span class="block sm:inline">Une erreur s'est produite lors de l'envoi de votre demande.</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg @click="closeAlert" class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
          </div>

        </div>

        <div class="mb-3 pt-0 mx-auto">

          <input class="btn w-1/3 cursor-pointer mx-auto bg-[#475F45] hover:bg-[#475F45]/80 duration-300 transition-colors border-2 border-[#475F45] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white mb-5"
                type="submit" 
                value="Envoyer">


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
          rel="preconnect"
          src="//umap.openstreetmap.fr/en/map/untitled-map_1043927?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true">
  </iframe>

  <p>
    <a rel="preconnect"
       href="//umap.openstreetmap.fr/en/map/untitled-map_1043927?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true"
       aria-label="map">
    </a>
  </p>

  <!-- <iframe width="100%" 
          height="550px" 
          style="border:2px grey solid"
          Loading="lazy" 
          allowfullscreen
          allow="geolocation"
          rel="preload"
          allow-scripts
                 allow-same-origin
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBANWf-s_4eQxeLoHfJHBCNgWyaVb_0TFs&zoom=16&center=44.1242746,5.18&q=Bédoin,France&maptype=satellite">
  </iframe> -->

</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'Home',
  data: function () {
    return {
      name: '',
      email: '',
      object: '',
      message: '',
      success: false,
      error: false,
    }
  },
  methods: {
    sendMail(e) {

      emailjs.sendForm('service_9z4y82v', 'contact_form', e.target, '2hM49oHwWjixWTOGu')

      .then((result) => {
        
        console.log(result.text);
        this.success = true;
        this.error = false;

      }, (error) => {

        console.log(error.text);
        this.success = false;
        this.error = true;

      })

      .finally(() => {
        this.name = '';
        this.email = '';
        this.object = '';
        this.message = '';
      });
    },
    closeAlert() {
      this.success = false;
      this.error = false;
    }
  }
}
</script>

<style>

.alert {
  padding: 0 10px;
}

.alert-success {
  color: #3be249;
}

.alert-error {
  color: #ff2121;
}

</style>