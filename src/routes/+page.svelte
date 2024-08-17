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

<section>
	<div class="image-container">
		<div class="animation">
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
	.image-container {
		display: flex;
		width: 100%;
		flex-direction: row;
		border: 1px black;
	}

	.animation {
		flex: 2;
		margin: 10px;
		border: 1px black;
	}

	.picture {
		flex: 1;
	}

	.animation img {
		width: 100%;
	}

	.picture img {
		border-radius: 50%;
		border: 15px #2d709a solid;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
