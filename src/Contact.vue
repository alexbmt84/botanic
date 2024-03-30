<template>

  <section class="container px-6 py-12 mx-auto lg:py-16">

    <h1 class="text-center font-serif text-3xl text-[#343D33] capitalize md:text-4xl lg:text-5xl">
      Contact
    </h1>

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

        <div class="form-result">
          <p class="alert alert-success" v-if="success && !error">Message sent successfully.</p>
          <p class="alert alert-error" v-if="!success && error">Message failed.</p>
        </div>

        <div class="mb-3 pt-0 mx-auto">

          <input class="btn w-1/3 mx-auto bg-[#475F45] hover:bg-[#475F45]/80 duration-300 transition-colors border-2 border-[#475F45] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white mb-5"
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
          rel="preload"
          src="//umap.openstreetmap.fr/en/map/untitled-map_1043927?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true">
  </iframe>

  <p>
    <a rel="preload"
       href="//umap.openstreetmap.fr/en/map/untitled-map_1043927?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true"></a>
  </p>

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
      try {
        emailjs.sendForm('service_9z4y82v', 'contact_form', e.target,
            '2hM49oHwWjixWTOGu', {
              name: this.name,
              email: this.email,
              object: this.object,
              message: this.message
            })

        this.success = true
        this.error = false

      } catch (error) {
        this.success = false
        this.error = false
        console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.object = ''
      this.message = ''
      this.success = false
      this.error = false
    },
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
