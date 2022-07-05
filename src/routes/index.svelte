<script>
	import "$styles/styles.css"
	import index_img from "../lib/assets/index_img.avif"
	import { fly } from 'svelte/transition';
	import "$styles/layers.css"
</script>

<svelte:head>
	<title>Cervejaria Externus</title>
</svelte:head>

<section id="intro">
	<img 
		src={index_img} 
		class="cropped_img" 
		alt="Velho oeste" 
		width="40%"
	>
	
	<h1 class="title" transition:fly="{{ y: 200, duration: 2000 }}">Cervejaria Externus</h1>
	<h2 class="subtitle">A verdadeira cerveja</h2>
</section>

<div class="spacer s1"></div>

<style>
	:global(*) {
		text-align: center;
		color: #c59269;
		text-overflow: ellipsis;
		word-break: normal;
		background-color: #001220;
	}

	.s1 {
		background-image: url("../lib/assets/sep-1.svg");
	}
</style>