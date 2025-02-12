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
		<span class="animation picture">
			<picture>
				<img src={profile_picture} alt="Name" />
			</picture>
		</span>

		<div class="animation name">
			<h1>Hello! My name is</h1>
			<div class="myName">
				<span>
					<picture>
						<source srcset={name_animation} type="image/gif" />
						<img src={name_animation_fallback} alt="Name" />
					</picture>
				</span>
			</div>
		</div>
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
		border-image-slice: 10 10 10 10 fill;
		border-image-width: 50px 50px 50px 50px;
		border-image-outset: 0px 0px 0px 0px; 
		border-image-repeat: round round; 
		border-image-source: url(/src/lib/images/magicWaistcoatStitch.svg);
	}

	#skills {
		background: lightcoral;
		border-image-slice: 10 10 10 10 fill;
		border-image-width: 50px 50px 50px 50px;
		border-image-outset: 0px 0px 0px 0px; 
		border-image-repeat: round round; 
		border-image-source: url(/src/lib/images/magicWaistcoatStitch.svg);
	}

	#projects {
		background: lightgoldenrodyellow;
		border-image-slice: 10 10 10 10 fill;
		border-image-width: 50px 50px 50px 50px;
		border-image-outset: 0px 0px 0px 0px; 
		border-image-repeat: round round; 
		border-image-source: url(/src/lib/images/magicWaistcoatStitch.svg);
	}

	#intro {
		background-color: #5d6bd6;
		background: url(/src/lib/images/shirtButton.svg) repeat-y;
		background-position-x: 30%;
		background-size: 200px;
	}

	#intro h1 {
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		background: rgb(183, 57, 22);
		border-bottom: rgb(186, 181, 180) 35px solid;
		transform: translate(0px, 1px);
		margin-bottom: 0px;
	}

	.myName {
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		background: rgb(186, 181, 180);
		margin-top: 0px;
		border-bottom: rgb(183, 57, 22) 30px solid;
	}

	section {
		/* border: 1px green solid; */
		padding-top: 50px;
	}

	.image-container {
		display: flex;
		flex-direction: row;
		/* border: 1px red solid; */
		align-items: center;
		justify-content: center;
	}

	.animation {
		/* border: 1px blue solid; */
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
		rotate: 3deg;
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
		#intro {
			background: url(/src/lib/images/shirtButton.svg) repeat-y;
			background-position-x: center;
			background-size: 100px;
			padding-top: 0px;
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
