<script>
	import "$styles/styles.css"
	import { fly } from 'svelte/transition';

	let img_src = "https://i.pinimg.com/736x/d8/a5/9f/d8a59f9b10f8ef5732561c1030855c3a--devian-art-western-comics.jpg"

</script>

<svelte:head>
	<title>Cervejaria Externus</title>
</svelte:head>

<img src={img_src} class="cropped_img" alt="Velho oeste">
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