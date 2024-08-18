<script>
	import name_animation from '$lib/images/name-animation.gif';
	import name_animation_fallback from '$lib/images/name.png';
	import profile_picture from '$lib/images/self-portrait.png';

	import About from './About.svelte';
	import Skills from './Skills.svelte';
	import Projects from './Projects.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section id="intro">
	<div class="image-container">
		<div class="animation name">
			<h1>Hi! My name is</h1>
			<span>
				<picture>
					<source srcset={name_animation} type="image/gif" />
					<img src={name_animation_fallback} alt="Name" />
				</picture>
			</span>
		</div>

		<span class="animation picture">
			<picture>
				<img src={profile_picture} alt="Name" />
			</picture>
		</span>
	</div>
</section>

<section id="about">
	<About />
</section>
<section id="skills">
	<Skills />
</section>
<section id="projects">
	<Projects />
</section>

<style>

	#about {
		background: lightblue;
	}

	#skills {
		background: lightcoral;
	}

	#projects {
		background: lightgoldenrodyellow;
	}

	#intro {
		background: lightseagreen;
	}

	section {
		border: 1px green solid;
	}

	.image-container {
		display: flex;
		flex-direction: row;
		border: 1px red solid;
		align-items: center;
		justify-content: center;
	}

	.animation {
		border: 1px blue solid;
	}

	img, source {
		max-width: 100%;
	}

	.picture {
		padding-right: 30px; /* to account for 15px border's height name, to center name with picture */
	}

	.picture img {
		border-radius: 50%;
		border: 15px #2d709a solid;
	}

	.name {
		padding-bottom: 108px; /* to account for h1's height, to center name with picture */
	}

	.animation img {
		flex-basis: auto;
		flex-shrink: 1;
	}
	
	section {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		flex: 0.6;
		min-height: 100vh;
	}

	@media (max-width: 720px) {
		.image-container {
			flex-direction: column;
		}

		.name {
			padding-bottom: 0; /* with image below name, name doesn't need space below anymore */
		}
	}

	h1 {
		width: 100%;
	}
</style>
