<script>
	import "$styles/styles.css"
	import index_img from "../lib/assets/index_img.avif"
	import { fly } from 'svelte/transition';
	import "$styles/layers.css"
</script>

<svelte:head>
	<title>Cervejaria Externus</title>
</svelte:head>

<main>
	<img 
		src={index_img} 
		class="cropped_img" 
		alt="Velho oeste" 
		width="40%"
	>
		
	<h1 class="title" transition:fly="{{ y: 200, duration: 2000 }}">Cervejaria Externus</h1>
	<h2 class="subtitle">A verdadeira cerveja</h2>
	
	<div class="spacer s1"></div>

	<section id="reviews">
		<h1 class="title">O que nossos clientes pensam</h1>
		<ul>
			<li class="option"><i>Robertão</i> -> Depois que conheci a <strong>Externus</strong> consegui parar de beber</li>
			<li class="option"><i>Jerónimo</i> -> Quando a  <strong>Externus</strong> lançar sua primeira cerveja comercial, será chocante e disruptiva</li>
			<li class="option"><i>Tamara</i> -> As pessoas da <strong>Externus</strong> são extremamente gentis, e tenho certeza que sua cerveja será uma delícia!</li>
			<li class="option"><i>Gran</i> -> A  <strong>Externus</strong> é uma cervejaria extremamente promissora, e definitivamente uma das melhores na Rua Caropá!</li>
			
		</ul>
	</section>

	<div class="spacer s2"></div>
</main>
<style>
	:global(*) {
		text-align: center;
		color: #c59269;
		text-overflow: ellipsis;
		word-break: normal;
		background-color: #001220;
	}

	section {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 40vh;
		justify-content: flex-start;
    }

	.s1 {
		background-image: url("../lib/assets/sep-1.svg");
	}

	.s2 {
		background-image: url("../lib/assets/sep-2.svg");
	}

	#reviews {
		background: #c99a4a !important;
		color:#001220 !important;
		background-color: #c99a4a !important;
	}

	.option {
		font-family: 'PT Mono', monospace;
		font-size: 20px;
		color: #b4b4b4 !important;
		position: inherit;
		font-weight: normal !important;
		text-align: left;
		padding-left: 20px;
	}
</style>