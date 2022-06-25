<script>
	import "$styles/styles.css"
	import index_img from "../lib/assets/index_img.avif"
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Cervejaria Externus</title>
</svelte:head>

<img 
	src={index_img} 
	class="cropped_img" 
	alt="Velho oeste" 
	height="90%"
	width="90%"
>
<h1 class="title" transition:fly="{{ y: 200, duration: 2000 }}">Cervejaria Externus</h1>
<h2 class="subtitle">A verdadeira cerveja</h2>

<style>
	:global(*) {
		text-align: center;
		color: rgba(197,146,105,1);
		text-overflow: ellipsis;
		word-break: normal;
		background-color: #121212;
	}

</style>