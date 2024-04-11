<template>

  <section class="container px-6 py-12 mx-auto lg:py-16">

    <h1 class="text-center font-serif text-3xl text-[#343D33] capitalize md:text-4xl lg:text-5xl">
      Contact
    </h1>

    <div class="app-advanced p-10">

      <form @submit.prevent="sendMail" id="contactForm" class="mx-auto mt-5 w-full lg:w-2/3">

        <div class="mb-3 pt-0">
          <input type="text" placeholder="Nom" name="name"
                 class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-lg border-0 shadow outline-none focus:outline-none focus:ring w-full"
                 v-model="name"
                 required/>
        </div>

        <div class="mb-3 pt-0">
          <input type="email" placeholder="Email" name="email"
                 class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-lg border-0 shadow outline-none focus:outline-none focus:ring w-full"
                 v-model="email"
                 required/>
        </div>

        <div class="mb-3 pt-0">
          <input type="text" placeholder="Objet" name="object"
                 class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-lg border-0 shadow outline-none focus:outline-none focus:ring w-full"
                 v-model="object"
                 required
          />
        </div>

        <div class="mb-3 pt-0">
          <textarea placeholder="Rédigez votre message ici..." name="message"
                    class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-lg border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    v-model="message"
                    required/>
        </div>

        <div class="form-result text-center mb-3">

          <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert"
               v-if="success && !error">
            <strong class="font-bold">Merci ! </strong>
            <span class="block sm:inline">Votre demande a été envoyée avec succès.</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg @click="closeAlert" class="fill-current h-6 w-6 text-green-500" role="button"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path
                  d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
          </div>

          <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"
               v-if="!success && error">
            <strong class="font-bold">Oups. </strong>
            <span class="block sm:inline">Une erreur s'est produite lors de l'envoi de votre demande.</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg @click="closeAlert" class="fill-current h-6 w-6 text-red-500" role="button"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path
                  d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
          </div>

        </div>

        <div class="mb-3 pt-0 mx-auto">

          <input
              class="btn lg:w-1/3 cursor-pointer mx-auto bg-[#475F45] hover:bg-[#475F45]/80 duration-300 transition-colors border-2 border-[#475F45] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white mb-5"
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
       aria-label="map"
       href="//umap.openstreetmap.fr/en/map/untitled-map_1043927?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true"></a>
  </p>

  <!-- <iframe width="100%" 
          height="550px" 
          style="border:2px grey solid"
          Loading="lazy" 
          allowfullscreen
          allow="geolocation"
          rel="preload"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBANWf-s_4eQxeLoHfJHBCNgWyaVb_0TFs&zoom=16&center=44.1242746,5.18&q=Bédoin,France&maptype=satellite">
  </iframe> -->

</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'Contact',
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
