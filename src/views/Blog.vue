<script setup lang="ts">
	/* Get my server post data */
	import { ref, onMounted, computed } from 'vue';
	import type { Ref } from 'vue';
	import { useRoute } from 'vue-router';
	import axios from 'axios';
	import Post from '../components/Post.vue';

	/* Test data */
	// Change to not required
	interface Posts {
		userId?: number,
		id?: number,
		title?: string,
		body?: string
	}

	// Resolve: IDE ERROR https://vuejs.org/guide/typescript/composition-api.html#typing-ref
	const posts: Ref<Posts> = ref({});

	onMounted( async() => {
		// Change get data function ( fetch -> axios )
		const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
		posts.value = await res.data;
	});

	// Test categories
	const categoryNames = [
		{
			name: "JavaScript",

		},
		{
			name: "Python"
		}
	]

	/* Pagination */
	
	// Init page number	
	const route = useRoute();
	let page: Ref<number> = ref(1);
	
	// Blog first page
	if (route.name === "blogHomePage") {
		page = ref(1);
	} else {
		page = ref(Number(route.params.pageNumber));
	}

	// Set number to control how many post in one page
	const perPage: number = 9;
	
	/*
	 使用 Object.entries(obj) 才能對 object做 array的相關的指令，如: slice, map...
	*/

	/*
	*	1. Avoid change original data, so use "map()" not "foreach()"
	* 2. Give every element name: ["0", {data}] to ["index": "0" "value": {data}]
	* 3. Slice the posts depending "perPage" number 
	*/
	const paginatedData = computed(() => 
			Object.entries(posts.value).map((item) => {
				return { index: item[0], value: item[1] }
			}).slice((page.value - 1) * perPage, page.value * perPage)
  );

	// Show next button when page not in last
	const nextPage = () => {
    if (page.value !== Math.ceil(Object.entries(posts.value).length / perPage)) {
      return true;
    } else {
			return false;
		}
  };

	// Show previous button when page not in first
  const backPage = () => {
    if (route.name === 'blogHomePage') {
			return false;
		} else {
			return true;
		}
  };

	const setPageArray = (_start: number, _end: number) => {
		let _pageArray: string[] = []
		for (let i = _start; i <= _end; i++) {
			_pageArray.push(String(i));
		}
		return _pageArray;
	}

	// Omit the page depending Current page
	const pageTest = () => {
		let start: number = 0;
		let end: number = 0;
		let pageLength: number = Math.ceil(Object.entries(posts.value).length / perPage);
		let pageArray: string[] = [];

		switch (page.value) {
			case 1:
				start = 1;
				end = 5;
				
				pageArray = setPageArray(start, end);

				pageArray.push('...');
				pageArray.push(String(pageLength));
				break;
			case 2:
				start = page.value - 1;
				end = page.value + 2;

				pageArray = setPageArray(start, end);
				pageArray.push('...');
				pageArray.push(String(pageLength));
				break;
			case 3:
				start = page.value - 2;
				end = page.value + 2;
				
				pageArray = setPageArray(start, end);
				pageArray.push('...');
				pageArray.push(String(pageLength));
				break;
			case 4:
				start = page.value - 2;
				end = page.value + 2;
				
				pageArray = setPageArray(start, end);
				pageArray.unshift('1');
				pageArray.push('...');
				pageArray.push(String(pageLength));
				break;
			case pageLength - 3:
				start = page.value - 2;
				end = page.value + 2;
				
				pageArray = setPageArray(start, end);
				pageArray.unshift('...');
				pageArray.unshift('1');
				pageArray.push(String(pageLength));
				break;
			case pageLength - 2:
				start = page.value - 2;
				end = page.value + 2;
				
				pageArray = setPageArray(start, end);
				pageArray.unshift('...');
				pageArray.unshift('1');
				break;
			case pageLength - 1:
				start = page.value - 2;
				end = page.value + 1;
				
				pageArray = setPageArray(start, end);
				pageArray.unshift('...');
				pageArray.unshift('1');
				break;
			case pageLength:
				start = page.value - 2;
				end = page.value;
				
				pageArray = setPageArray(start, end);
				pageArray.unshift('...');
				pageArray.unshift('1');
				break;
			default:
				start = page.value - 2;
				end = page.value + 2;
				
				pageArray = setPageArray(start, end);
				pageArray.unshift('...');
				pageArray.unshift('1');
				pageArray.push('...');
				pageArray.push(String(pageLength));
		}
		return pageArray;
	}

</script>

<template>
  <div class="container mx-auto py-20 px-10 sm:px-5">
		<h1 class="text-3xl font-bold italic">
			Blog 
		</h1>
		<div class="grid grid-cols-12 gap-0 sm:gap-8 py-10">
			<div class="col-span-12 md:col-span-9">
				<div class="grid grid-rows-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<Post v-for="post in paginatedData" :key="post.index" :id="post.value.id" :title="post.value.title" :body="post.value.body"></Post>
				</div>
			</div>
			<div class="col-span-12 mt-8 md:col-span-3 md:mt-0">
				<div class="sidebar__category h-96 rounded bg-stone-200">
					<div class="p-5 md:px-0 md: py-5">
						<h2 class="">文章分類</h2>
						<ul class="text-left p-8 list-disc">
							<li v-for="name in categoryNames"><a :href="'blog/'+name.name">{{ name.name }}</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		
		<div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
			<div class="flex-1 flex justify-between sm:hidden">
				<a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
				<a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
			</div>
			<div class="hidden flex-col sm:flex-1 sm:flex sm:items-center sm:justify-between">
				<div class="py-4">
					<p class="text-sm text-gray-700">
						Showing
						{{ ' ' }}
						<span v-if="page === 1" class="font-medium">{{ 1 }}</span>
						<span v-else class="font-medium">{{ (page * perPage)-9+1 }}</span>
						{{ ' ' }}
						to
						{{ ' ' }}
						<span class="font-medium">{{ page * perPage }}</span>
						{{ ' ' }}
						of
						{{ ' ' }}
						<span class="font-medium">{{ Object.entries(posts).length }}</span>
						{{ ' ' }}
						results
					</p>
				</div>
				<div>
					<div class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
						<a 
							v-if="backPage()"
							:href="'/blog/page/' + (page - 1)"
							class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
							<span class="sr-only">Previous</span>
							&lt; Previous
						</a>
						<!-- Current page: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
						<!-- General page: <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a> -->
						<div
							v-for="item in pageTest()"
							:key="item"
						>
							<a
								v-if="page === Number(item)"
								:href="'/blog/page/' + item" 
								class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
							>
							{{ item }}
							</a>
							<span 
								v-else-if="item === '...'"
								:href="'/blog/page/' + item" 
								class="bg-white border-gray-300 text-gray-500 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
							>
							{{ item }}
							</span>
							<a v-cloak
								v-else
								:href="'/blog/page/' + item" 
								class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
							>
							{{ item }}
							</a>
						</div>

						<!-- Stable Version -->
						<!-- <div
							v-for="item in Math.ceil(Object.entries(posts).length / perPage)"
							:key="item"
						>
							<a 
								v-if="page === item"
								:href="'/blog/page/' + item" 
								class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
							>
							{{ item }}
							</a>
							<a 
								v-else
								:href="'/blog/page/' + item" 
								class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
							>
							{{ item }}
							</a>
						</div> -->
						<a 
							v-if="nextPage()"
							:href="'/blog/page/' + (page + 1)"
							class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
							<span class="sr-only">Next</span>
							Next &gt;
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>