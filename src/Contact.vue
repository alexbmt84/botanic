<template>

  <section class="container px-6 py-12 mx-auto lg:py-16">

    <h1 class="text-center font-serif text-3xl text-[#343D33] capitalize md:text-4xl lg:text-5xl">
      Contact
    </h1>

    <div class="app-advanced p-10">
      <form method="POST" class="mx-auto mt-5 w-2/3">
        <div class="mb-3 pt-0">
          <input type="text" placeholder="Nom" name="name"
            class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required />
        </div>

        <div class="mb-3 pt-0">
          <input type="email" placeholder="Email" name="email"
            class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required />
        </div>

        <div class="mb-3 pt-0">
          <input type="text" placeholder="Objet" name="object"
            class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required />
        </div>

        <div class="mb-3 pt-0">
          <textarea placeholder="Rédigez votre message ici..." name="message"
            class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required />
        </div>

        <div class="mb-3 pt-0">
          <a href="#"
            class="bg-[#475F45] hover:bg-[#475F45]/80 duration-300 transition-colors border-2 border-[#475F45] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white">
            Envoyer
          </a>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  // Vous pouvez ajouter ici la logique spécifique à la page
}
</script>