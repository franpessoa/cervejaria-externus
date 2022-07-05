<script>
	import '$styles/styles.css';
	import '$styles/layers.css';
	import index_img from '../lib/assets/index_img.avif';
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.style.background = '#001220';
	});
</script>

<svelte:head>
	<title>Cervejaria Externus</title>
</svelte:head>

<main>
	<img src={index_img} class="cropped_img" alt="Velho oeste" width="45%" />

	<h1 class="title">Cervejaria Externus</h1>
	<h2 class="subtitle">A verdadeira cerveja</h2>
	<h2 class="subtitle">↧ ↧ ↧</h2>

	<div class="spacer s1" />

	<section id="reviews">
		<h1 class="section-title">
			O que <span style="text-decoration:underline;">nossos clientes</span> pensam
		</h1>
		<ul>
			<li class="option">
				<i>Robertão</i> -> Depois que conheci a <strong>Externus</strong> consegui parar de beber
			</li>
			<li class="option">
				<i>Jerónimo</i> -> Quando a <strong>Externus</strong> lançar sua primeira cerveja comercial,
				será chocante e disruptiva
			</li>
			<li class="option">
				<i>Tamara</i> -> As pessoas da <strong>Externus</strong> são extremamente gentis, e tenho certeza
				que sua cerveja será uma delícia!
			</li>
			<li class="option">
				<i>Nona</i> -> A <strong>Externus</strong> é uma cervejaria extremamente promissora, e definitivamente
				uma das melhores na Rua Caropá!
			</li>
		</ul>
		<h2 class="subtitle blck">↧ ↧ ↧</h2>
	</section>

	<div class="spacer s2" />

	<section id="professional-reviews">
		<h1 class="section-title-white">
			O que <span style="text-decoration:underline;">a crítica</span> diz
		</h1>
		<ul>
			<li class="option-w">
				<i><strong>Jornal Alemão das Cervejas</strong></i> ->
				<i>Dieses Bier schmeckt wie Wasser aus der Waschmaschine</i>
			</li>
			<br />
			<li class="option-w">
				<i><strong>Polônia Beer</strong></i> ->
				<i>Piwo to doskonale naśladuje smak starego papieru.</i>
			</li>
			<li class="option-w">
				<i><strong>Alcoólicos Holandeses</strong></i> ->
				<i><strong>Externus</strong> brouwt een bier om eeuwenlang te vergeten</i>
			</li>
		</ul>
		<h2 class="subtitle">↧ ↧ ↧</h2>
	</section>

	<div class="spacer s3" />

	<footer class="footer blck">
		<h1>Contato: <i>alguém manda um email pra eu colocar aqui</i></h1>
		<h1>Criado por Francisco Pessoa</h1>
	</footer>
</main>

<style>
	:global(main) {
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
		min-height: fit-content;
		justify-content: flex-start;
	}

	li {
		text-align: center;
		display: inline-block;
	}

	/*#73132D*/
	#reviews {
		background: #c99a4a !important;
	}

	#professional-reviews {
		background: #67032b !important;
	}

	footer {
		background-color: #f18a03;
		min-height: 10em;
	}

	.option {
		font-family: 'PT Mono', monospace;
		font-size: 30px;
		color: #292929 !important;
		font-weight: normal !important;
		text-align: center;
		max-width: 90%;
		justify-content: center;
	}

	.option-w {
		font-family: 'PT Mono', monospace;
		font-size: 30px;
		color: whitesmoke !important;
		font-weight: normal !important;
		text-align: center;
		max-width: 75%;
		justify-content: center;
	}

	.blck {
		color: #001220 !important;
	}

	.s1 {
		background-image: url('../lib/assets/sep-1.svg');
	}

	.s2 {
		background-image: url('../lib/assets/sep-2.svg');
	}

	.s3 {
		background-image: url('../lib/assets/sep-3.svg');
	}
</style>
