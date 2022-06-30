<script setup lang="ts">
  import Card from "../components/Card.vue";

  const cards = [
    {
      title: "JavaScript",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sequi, minima maiores temporibus repellat ullam suscipit. Veniam excepturi iusto optio voluptates? Doloremque fugiat dignissimos explicabo corporis quas itaque deserunt ipsa."
    },
    {
      title: "Vue 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sequi, minima maiores temporibus repellat ullam suscipit. Veniam excepturi iusto optio voluptates? Doloremque fugiat dignissimos explicabo corporis quas itaque deserunt ipsa."
    },
    {
      title: "Express",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sequi, minima maiores temporibus repellat ullam suscipit. Veniam excepturi iusto optio voluptates? Doloremque fugiat dignissimos explicabo corporis quas itaque deserunt ipsa."
    }
  ]
</script>

<template>
  <div class="container mx-auto py-20">
    <div id="hero">
      <h1 class="text-8xl font-bold">
        Hello!
      </h1>
      <h1 class="text-4xl font-bold my-5">
        I'm Yu Fan
      </h1>
      <img src="../assets/images/Mango.png" alt="Mango.png" class="mx-auto w-64">
      <p class="px-10 sm:px-32 mb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odit, aspernatur quos rem vel modi rerum dolorem at quod delectus illum nisi dolor qui inventore et dolores accusantium numquam doloribus.</p>
    </div>    
    <hr>
    <div id="cards" class="px-10 my-28">
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-3 grid-rows-3">
        <!-- <Card :title="'JavaScript'" :text="cardText"></Card>  -->
        <Card v-for="card in cards" :title="card.title" :text="card.text"></Card>
      </div>
    </div>
  </div>
</template>