<script setup lang="ts">

	interface IPost {
		id: Number,
		title: String,
		body: String,
		img?: String,
		date?: Date
	}

	const postProps = defineProps<IPost>()
</script>

<template>
	<div class="border border-dashed border-slate-700 rounded">
		<div class="p-6">
			<h1 class="font-bold">{{postProps.title}}</h1>
			<hr>
			<p class="pt-4 leading-loose">{{postProps.body}}</p>
		</div>
	</div>
</template>