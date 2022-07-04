<script setup lang="ts">
	const attrSkillHeader: string = 'font-bold underline';
	const attrSkill: string = 'block pl-8';
</script>

<template>
  <div class="container mx-auto py-20">
		<h1 class="text-3xl font-bold underline">
				<!-- About me -->
		</h1>
		<div class="my-5 mx-10 md:mx-20">
			<figure class="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
				<img class="w-40 h-40 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="../assets/images/Mango.png">
				<div class="py-3 md:pb-8 px-0 md:px-12 text-center md:text-left space-y-4">
					<blockquote>
						<p class="text-base sm:text-lg font-bold">
							哈囉，我的名字是宇釩，也可以叫我芒果，現在我正在學習當一個後端開發者，這個網站會記錄一些筆記 <span class="italic text-sm">(不限於後端)</span>，
							如果你有任何問題想要詢問我的話，請Email或是透過其他管道讓我知道，謝謝你的來訪。
						</p>
					</blockquote>
					<figcaption class="font-medium text-center">
						<!-- <div class="text-sky-500 dark:text-sky-400">
							Yu Fan, Chen
						</div> -->
						<div class="text-slate-600 dark:text-slate-500 mt-8">
							<a href="https://www.instagram.com/mango70225/" class="text-2xl inline-block mr-5">
								<i class="fa-brands fa-instagram"></i>
							</a>
							<a href="mailto:et860525@gmail.com?subject=Hello" class="text-2xl inline-block">
								<i class="fa-solid fa-envelope"></i>
							</a>
						</div>
					</figcaption>
				</div>
			</figure>
			<div class="my-10 p-3 md:p-10 text-left border border-dotted rounded border-slate-600">
				<h1 class="text-2xl">Skills：</h1>
				<ul class="px-10 md:px-12 pt-5 list-disc">
					<li><span :class="attrSkillHeader">Programming languages: </span><span :class="attrSkill">Python, JavaScript</span></li>
					<li><span :class="attrSkillHeader">Web development: </span><span :class="attrSkill">Django, Flask, Express, RESTful API</span></li>
					<li><span :class="attrSkillHeader">Data visualization: </span><span :class="attrSkill">Matplotlib, Seaborn</span></li>
					<li><span :class="attrSkillHeader">Web scraping: </span><span :class="attrSkill">Requests, Selenium, Beautiful Soup</span></li>
					<li><span :class="attrSkillHeader">Operating system: </span><span :class="attrSkill">Ubuntu</span></li>
					<li><span :class="attrSkillHeader">Database: </span><span :class="attrSkill">PostgreSQL, MySQL</span></li>
					<li><span :class="attrSkillHeader">DevOps: </span><span :class="attrSkill">git, Nginx, Docker</span></li>
					<li><span :class="attrSkillHeader">Game Engine: </span><span :class="attrSkill">Unity</span></li>
				</ul>
			</div>
		</div>
	</div>

</template>