<script setup lang="ts">
  import Card from "../components/Card.vue";
  import axios from "axios";

  const cards = [
    {
      title: "JavaScript",
      text: "在學習 JavaScript 之前，我都是使用 Python，在看到前端框架的發展後，我也開始嘗試前後端都使用 JavaScript 來進行開發，而這個網站也就是我的第一個 Full Stack JavaScript Website。"
    },
    {
      title: "Blog",
      text: "記錄這些時間所學到的東西，並寫成筆記進行統整，不論是前端還是後端、網頁框架、資料庫的運用與 Docker 的使用等等...，也不一定只有網頁相關，可能也會有關於程式語言的部分。"
    },
    {
      title: "Study Journey",
      text: "最一開始我學習的語言是C/C++，後來使用Unity3D(C#)學習製作遊戲，有替朋友的畢業專題寫出一個手機遊戲，在大學時，我接觸到網頁的世界，對資料庫應用以及伺服器架設著迷。"
    }
  ]

  const contactLinks = [
    {
      name: "Github",
      link: "https://github.com/et860525"
    },
		{
			name: "Instagram", 
			link: "https://www.instagram.com/mango70225/"
		},
		{
			name: "Email",
			link: "mailto:et860525@gmail.com?subject=Hello"
		}
	]

  function getMsg() {
    axios.get('http://localhost:3000/blog/categories').then(function (res) {
      console.log('res=', res);
    })
  }
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
      <p class="px-10 sm:px-32 mb-20 text-xl font-bold">從前端學到後端，而這裡就是記錄所有的地方。</p>
    </div>    
    <div id="cards" class="px-10 my-16">
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-3 grid-rows-1">
        <!-- <Card :title="'JavaScript'" :text="cardText"></Card>  -->
        <Card v-for="card in cards" :title="card.title" :text="card.text"></Card>
      </div>
    </div>
    <hr>
    <div id="blog-posts" class="px-10 my-28">
      <h1 class="text-4xl font-bold">Blog posts</h1>
    </div>
    <hr>
    <button type="button" name="button" v-on:click="getMsg">get</button>
    <div id="contact" class="px-10 my-16">
      <h1 class="text-4xl font-bold">Contact</h1>
      <ul class="flex space-x-5 py-2 mt-5 sm:py-0 justify-center">
        <li v-for="link in contactLinks">
          <a :href="link.link">{{link.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>