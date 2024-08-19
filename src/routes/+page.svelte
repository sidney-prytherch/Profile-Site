<script lang="ts">
	import name_animation from '$lib/images/name-animation.gif';
	import name_animation_fallback from '$lib/images/name.png';
	import profile_picture from '$lib/images/self-portrait.png';

	import About from './About.svelte';
	import Skills from './Skills.svelte';
	import Projects from './Projects.svelte';
	import { elementIsMainInViewport } from './Helpers';
	import { onMount } from 'svelte';
	import { currentSectionString } from '$lib/stores/sectionStore';

	let currentSection = "Home";
	let introSection: HTMLElement;
	let aboutSection: HTMLElement;
	let skillsSection: HTMLElement;
	let projectsSection: HTMLElement;

	onMount(() => {
		let sections = [introSection, aboutSection, skillsSection, projectsSection];
		let sectionTitleMap = new Map([
			[introSection, "Home"],
			[aboutSection, "About"],
			[skillsSection, "Skills"],
			[projectsSection, "Projects"],
		]);
		window.addEventListener('scroll', e => {
			for (let section of sections) {
				if (elementIsMainInViewport(section)) {
					currentSection = sectionTitleMap.get(section) || "Home";
					currentSectionString.set(currentSection);
					break;
				}
			}
		});
	});
</script>

<svelte:head>
	<title>{currentSection} • Sidney Prytherch</title>
	<meta name="description" content="Sidney's awesome profile website" />
</svelte:head>

<section id="intro" bind:this={introSection}>
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

<section id="about" bind:this={aboutSection}>
	<About />
</section>
<section id="skills" bind:this={skillsSection}>
	<Skills />
</section>
<section id="projects" bind:this={projectsSection}>
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
		padding-top: 50px;
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

	.picture img {
		min-height: 100%;
		width: max-content;
	}

	.picture {
		padding-right: 40px; /* to account for 15px border's height name, to center name with picture, plus space to side of name animation */
	}

	.picture img {
		border-radius: 50%;
		border: 15px #2d709a solid;
	}

	.name {
		padding-bottom: 108px; /* to account for h1's height, to center name with picture */
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

		.picture {
			padding: 0 10px; /* to match space to right (30+10) */
		}
	}

	@media (max-width: 615px) {
		.picture {
			padding-right: 40px; /* to match space to right (30+10) */
		}
	}

	h1 {
		width: 100%;
	}
</style>
