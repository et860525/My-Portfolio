<script setup lang="ts">
	/* Get my server post data */

	import { ref, onMounted } from 'vue';
	

	/* Test data */
	interface Posts {
		userId: number,
		id: number,
		title: string,
		body: string
	}

	const posts = ref<Posts>();

	onMounted( async() => {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		posts.value = await res.json();
	});

	

</script>

<template>
  <div class="container mx-auto py-20">
		<h1 class="text-3xl font-bold italic">
			Blog
		</h1>
		<div>
			<!-- ERROR: IDE display error, but code still working -->
			<div v-for="post in posts">
				<p>{{ post.id }}</p>
				<p>{{ post.title }}</p>
				<p>{{ post.body }}</p>
			</div>
			<!-- {{ posts }} -->
		</div>
	</div>
</template>