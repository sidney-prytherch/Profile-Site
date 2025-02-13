<script lang="ts">
	import name_animation from '$lib/images/name-animation.gif';
	import name_animation_fallback from '$lib/images/name.png';
	import profile_picture from '$lib/images/self-portrait.png';
	import hand_picture from '$lib/images/hand.png';

	import About from './About.svelte';
	import Skills from './Skills.svelte';
	import Projects from './Projects.svelte';
	import { elementIsMainInViewport } from './Helpers';
	import { onMount } from 'svelte';
	import { currentSectionString } from '$lib/stores/sectionStore';

	let currentSection = 'Home';
	let introSection: HTMLElement;
	let aboutSection: HTMLElement;
	let skillsSection: HTMLElement;
	let projectsSection: HTMLElement;

	let scrollY = $state(0);
	let innerHeight = $state(0);
	let innerWidth = $state(0);
	let percentScrolled = $derived((scrollY / innerHeight));
	let zTranslate = $derived(-(innerWidth) * percentScrolled);
	let xTranslate = $derived(-(innerWidth) * percentScrolled);

	let paperAngleDeg = $derived(Math.max(-90, Math.min(0, (-120 + 60 * percentScrolled))))
	let paperXTranslate = $derived(Math.max(0, Math.min(1000, (1333 - 666 * percentScrolled))))
	let paperZTranslate = $derived(-1 * Math.max(0, Math.min(1000, (1333 - 666 * percentScrolled))))
	let paperYTranslate = $derived(scrollY > 2 * innerHeight ? 0 : scrollY - 2 * innerHeight);
	
	let handTop = $derived(innerHeight / 2)


	// let xTranslate2 = $derived(-(innerWidth) * (percentScrolled < .6 ? ));

	let angle = $derived(Math.PI / 2 * scrollY / (innerHeight * 1.5));
	let angleDeg = $derived(90 * scrollY / (innerHeight * 1));
	let scrollCos = $derived(Math.cos(angle))
	let scrollSin = $derived(Math.sin(angle))

	onMount(() => {
		let sections = [introSection, aboutSection, skillsSection, projectsSection];
		let sectionTitleMap = new Map([
			[introSection, 'Home'],
			[aboutSection, 'About'],
			[skillsSection, 'Skills'],
			[projectsSection, 'Projects']
		]);
		window.addEventListener('scroll', (e) => {
			for (let section of sections) {
				if (elementIsMainInViewport(section)) {
					currentSection = sectionTitleMap.get(section) || 'Home';
					currentSectionString.set(currentSection);
					break;
				}
			}
		});
	});
</script>

<svelte:window bind:scrollY bind:innerHeight bind:innerWidth onclick={() => {console.log({paperAngleDeg, 
	paperXTranslate, 
	paperZTranslate, percentScrolled, innerHeight, scrollY, innerWidth, angleDeg, xTranslate, zTranslate})}}/>

<svelte:head>
	<title>{currentSection} • Sidney Prytherch</title>
	<meta name="description" content="Sidney's awesome profile website" />
</svelte:head>


<!-- <section id="intro" bind:this={introSection} style="translate: 10px {scrollY}px {innerHeight}px; rotate: y {(90) * (scrollY / innerHeight)}deg;"> -->
<!-- <section id="intro" bind:this={introSection} style="transform: matrix3d({scrollCos},0,{scrollSin},0,0.00,1,0.00,0,-{scrollSin},0,{scrollCos},0,0,{scrollY},-{scrollY},1)"> -->
<!-- <section id="intro" bind:this={introSection} style="transform: perspective(1000px) rotate3d(0, 1, 0, {3 * angleDeg}deg) translate3d(0px, {scrollY}px, -{2 * scrollY}px);"> -->
<section id="intro" bind:this={introSection} class:invisible={percentScrolled > .7} style="transform: perspective({innerWidth}px) rotate3d(0, 1, 0, {angleDeg}deg) translate3d({xTranslate}px, {scrollY}px, {zTranslate}px);">
	<div class="image-container">
		<span class="animation picture fancy-animation">
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

<svelte:document />

<div class="blank"></div>

<!-- style="transform: perspective({innerHeight * 2}px) rotate3d(0, 1, 0, {3 * angleDeg}deg) translate3d(0px, {scrollY}px, -{3 * scrollY}px);" -->
<!-- <section id="about" bind:this={aboutSection} style="{percentScrolled < 2 ? `transform: perspective(${innerWidth}px) rotate3d(0, 1, 0, ${paperAngleDeg}deg) translate3d(${paperXTranslate}px, ${scrollY - 2 * innerHeight}px, ${paperZTranslate}px)` : ''}" -->
<section id="about" bind:this={aboutSection} style="transform: perspective({innerWidth}px) rotate3d(0, 1, 0, {paperAngleDeg}deg) translate3d({paperXTranslate}px, {paperYTranslate}px, {paperZTranslate}px);"

>
	<About />
	<div class="hand" style="top: {handTop}px">
		<span>
			<picture>
				<img src={hand_picture} alt="Hand" />
			</picture>
		</span>
	</div>
</section>
<section id="skills" bind:this={skillsSection}>
	<Skills />
</section>
<section id="projects" bind:this={projectsSection}>
	<Projects />
</section>

<style>

	.hand {
		position: absolute;
		right: 0;
		transform: translateX(432px);

	}

	.blank {
		height: 200vh;
		min-height: 1000px;
	}

	#about {
		/* background: lightblue;
		border-image-slice: 10 10 10 10 fill;
		border-image-width: 50px 50px 50px 50px;
		border-image-outset: 0px 0px 0px 0px;
		border-image-repeat: round round;
		border-image-source: url(/src/lib/images/paperBackground.svg); */
		border-image-slice: 1 6 12 13 fill;
		border-image-width: 60px 0px 60px 60px;
		border-image-outset: 0px 0px 0px 0px;
		border-image-repeat: round round; 
		border-image-source: url(/src/lib/images/linedPaper.svg);
	}

	#skills {
		/* background: lightcoral;
		border-image-slice: 10 10 10 10 fill;
		border-image-width: 50px 50px 50px 50px;
		border-image-outset: 0px 0px 0px 0px;
		border-image-repeat: round round;
		border-image-source: url(/src/lib/images/paperBackground.svg); */
		border-image-slice: 1 6 12 13 fill;
		border-image-width: 60px 0px 60px 60px;
		border-image-outset: 0px 0px 0px 0px;
		border-image-repeat: round round; 
		border-image-source: url(/src/lib/images/linedPaper.svg);
	}

	#projects {
		/* background: lightgoldenrodyellow;
		border-image-slice: 10 10 10 10 fill;
		border-image-width: 50px 50px 50px 50px;
		border-image-outset: 0px 0px 0px 0px;
		border-image-repeat: round round; */
		border-image-slice: 1 6 12 13 fill;
		border-image-width: 60px 0px 60px 60px;
		border-image-outset: 0px 0px 0px 0px;
		border-image-repeat: round round; 
		border-image-source: url(/src/lib/images/linedPaper.svg);
	}

	#intro {
		background-color: #5d6bd6;
		background: url(/src/lib/images/shirtButton.svg) repeat-y;
		background-position-x: 30%;
		background-size: 200px;
		top: 0;
		position: absolute;
		z-index: -1;
	}

	.invisible {
		display: none;
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

	img,
	source {
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

	.name:hover {
		transform: rotate(-6deg);
	}

	.name {
		padding-bottom: 108px; /* to account for h1's height, to center name with picture */
		rotate: 3deg;
		transition: transform 0.4s ease-in-out;
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
