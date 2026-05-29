<script lang="ts">
	import name_animation from '$lib/images/name-animation.gif';
	import name_animation_fallback from '$lib/images/name.png';
	import profile_picture from '$lib/images/self-portrait-transparentShirt.png';
	import hand_picture from '$lib/images/hand.png';

	import About from './About.svelte';
	import Skills from './Skills.svelte';
	import Projects from './Projects.svelte';
	import { elementIsMainInViewport } from './Helpers';
	import { onMount } from 'svelte';
	import { currentSectionString } from '$lib/stores/sectionStore';

	let currentSection = $state('Home');
	let introSection: HTMLElement | undefined = $state();
	let aboutSection: HTMLElement | undefined = $state();
	let skillsSection: HTMLElement | undefined = $state();
	let projectsSection: HTMLElement | undefined = $state();

	let scrollAnimationIsActive = $state(false);
	let scrollPosition = $state(0);
	let previousScrollPosition = $state(-1);
	let isScrollingUp = $derived(previousScrollPosition > scrollPosition);
	let innerHeight = $state(0);
	let innerWidth = $state(0);
	const threshold = $derived(innerHeight);

	let aboutSectionTop = $state(2000);
	let skillsSectionTop = $state(2000);
	let projectsSectionTop = $state(2000);

	let transitionPeriod = $derived(Math.round(innerHeight));
	let translateZ = $derived(Math.round(innerWidth * -0.55));

	// intro rotates out from 0 to innerHeight aka threshold
	let introRotateAngle = $derived(Math.min(90, Math.round((scrollPosition / threshold) * 90)));
	let introSkewAngleOut = $derived(introRotateAngle / 10);
	// about rotates in from the top of blank canvas
	let introToAboutScrollThreshold = $derived(aboutSectionTop - threshold);
	// let aboutRotateAngleIn = $derived(Math.min(0, -90 + introRotateAngle));
	let aboutRotateAngleIn = $derived(
		scrollPosition < introToAboutScrollThreshold
			? 90
			: Math.min(
					0,
					Math.max(
						-90,
						Math.round(((scrollPosition - introToAboutScrollThreshold) / threshold) * 90) - 90
					)
				)
	);
	let aboutSkewAngleIn = $derived(aboutRotateAngleIn / 10);

	let aboutToSkillsScrollThreshold = $derived(skillsSectionTop - transitionPeriod);

	let aboutRotateAngleOut = $derived(
		scrollPosition < aboutToSkillsScrollThreshold
			? 0
			: Math.max(
					-90,
					Math.round(((scrollPosition - aboutToSkillsScrollThreshold) / transitionPeriod) * -90)
				)
	);
	let aboutSkewAngleOut = $derived(aboutRotateAngleOut / 10);

	let skillsRotateAngleIn = $derived(Math.max(0, 90 + aboutRotateAngleOut));
	let skillsSkewAngleIn = $derived(skillsRotateAngleIn / 10);

	let skillsToProjectsScrollThreshold = $derived(projectsSectionTop - transitionPeriod);

	let skillsRotateAngleOut = $derived(
		scrollPosition < skillsToProjectsScrollThreshold
			? 0
			: Math.min(
					90,
					Math.round(((scrollPosition - skillsToProjectsScrollThreshold) / transitionPeriod) * 90)
				)
	);
	let skillsSkewAngleOut = $derived(skillsRotateAngleOut / 10);

	let projectsRotateAngleIn = $derived(Math.min(0, -90 + skillsRotateAngleOut));
	let projectsSkewAngleIn = $derived(projectsRotateAngleIn / 10);

	let viewportHeight = $state(0);
	let viewportWidth = $state(0);

	onMount(() => {
		viewportHeight = window.innerHeight;
		viewportWidth = window.innerWidth;
		window.addEventListener('resize', () => {
			viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
			viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
		});
	});

	let aboutToSkillsTranslateY = $derived(viewportHeight + (scrollPosition - skillsSectionTop));
	let aboutToSkillsTranslateX = $derived(
		(viewportWidth * (scrollPosition - aboutToSkillsScrollThreshold)) / transitionPeriod
	);
	let skillsToProjectTranslateY = $derived(viewportHeight + (scrollPosition - projectsSectionTop));
	let skillsToProjectTranslateX = $derived(
		(-viewportWidth * (scrollPosition - skillsToProjectsScrollThreshold)) / transitionPeriod
	);
	let aboutToSkillsScrollCondition = $derived(skillsSectionTop - viewportHeight);
	let skillsToProjectScrollCondition = $derived(projectsSectionTop - viewportHeight);

	const debugPrint = () => {
		console.log({
			aboutSectionTop,
			skillsSectionTop,
			projectsSectionTop,
			scrollPosition,
			aboutToSkillsScrollThreshold,
			aboutRotateAngleOut,
			skillsRotateAngleIn
		});
	};

	let handTop = $derived(innerHeight / 2);

	let sections: (HTMLElement | undefined)[] = $derived([
		introSection,
		aboutSection,
		skillsSection,
		projectsSection
	]);
	/*
		folder open is 160deg, closed is 0deg, and then back to open is 160deg
			angle: Math.abs(x) from x = 160 to -160
		folder skew could be from ~20 down to 0 and back to 20, and can be calculated based on the angle above:
			skew:  18 - Math.abs(-x / 5 + 18) from angle=160 to 0 to 160
			need 2 of these for the top and bottom of the folder - one will be negative, the other positive
		to zoom out to see the animation, scale the section from scale of 1, down to .9 when it's closed, then back to 1:
			projectsScale: .7 + (1 - .7) * ((1-.7) / (2 * 160)) * angle from angle = 160 to 0 to 160

		Animation frame will be used to change the angle from 160 to -160, everything else uses $derived and constants based on angle

		the folder will use the above data to animate like this:
			transform: matrix3d(
				cos(angle),		tan(skew),	sin(angle),	0,
				0,				1,			0,			0,
				-sin(angle),	0,			cos(angle),	translateZ (used elsewhere in code),
				0,				0,			0,			1
				); 
		and also the above, but with tan(-skew) - the folder front page is actually 2 divs with different skews
		*/

	const projectScaleChange = 0.3;
	const projectScaleDifference = 1 - projectScaleChange;
	const startAngle = 160;
	const projectScaleChangePerAngle = projectScaleChange / startAngle;
	let start: number = $state(-1);
	let angle = $state(startAngle);
	let folderAngle = $derived(Math.abs(angle));
	let projectsScale = $derived(projectScaleDifference + projectScaleChangePerAngle * folderAngle);
	let folderAngleRad = $derived((folderAngle * Math.PI) / 180);
	let folderSkew = $derived(18 - Math.abs(-folderAngle / 5 + 18));
	let folderSkewRad = $derived((folderSkew * Math.PI) / 180);
	let folderCosAngle = $derived(Math.cos(folderAngleRad));
	let folderSinAngle = $derived(Math.sin(folderAngleRad));
	let folderTanSkew = $derived(Math.tan(folderSkewRad));

	const animationSpeed = 0.3;

	function step(timestamp: number) {
		if (start === -1) {
			angle = startAngle;
			start = timestamp;
		}
		console.log(folderSkew);
		const elapsed = timestamp - start;

		angle = Math.max(startAngle - animationSpeed * elapsed, -startAngle);
		if (angle > -startAngle) {
			requestAnimationFrame(step);
		} else {
			start = -1;
		}
	}

	let sectionTitleMap: Map<HTMLElement, string> = $state(new Map());

	onMount(() => {
		if (projectsSection && skillsSection && aboutSection && introSection) {
			aboutSectionTop = aboutSection.offsetTop;
			skillsSectionTop = skillsSection.offsetTop;
			projectsSectionTop = projectsSection.offsetTop;
			sectionTitleMap = new Map([
				[projectsSection, 'Projects'],
				[skillsSection, 'Skills'],
				[aboutSection, 'About'],
				[introSection, 'Home']
			]);
		}
	});
</script>

<svelte:window
	bind:scrollY={scrollPosition}
	bind:innerHeight
	bind:innerWidth
	onresize={() => {
		if (projectsSection && skillsSection && aboutSection) {
			aboutSectionTop = aboutSection.offsetTop;
			skillsSectionTop = skillsSection.offsetTop;
			projectsSectionTop = projectsSection.offsetTop;
		}
	}}
	onclick={debugPrint}
	onscroll={() => {
		if (!scrollAnimationIsActive) {
			if (scrollPosition > innerHeight * 0.3 && scrollPosition < innerHeight * 1.7) {
				scrollAnimationIsActive = true;
				setTimeout(() => {
					scrollAnimationIsActive = false;
				}, 500);
				if (isScrollingUp) {
					window.scrollTo({
						top: 0,
						behavior: 'smooth'
					});
				} else {
					window.scrollTo({
						top: aboutSectionTop,
						behavior: 'smooth'
					});
				}
			}
		}
		for (let section of sections) {
			if (section && scrollPosition > section.offsetTop - 100) {
				currentSection = sectionTitleMap.get(section) || 'Home';
				console.log(currentSection);
				currentSectionString.set(currentSection);
			}
		}
		previousScrollPosition = scrollPosition;
	}}
	on:hashchange={() => {
		const hash = window.location.hash;
		scrollAnimationIsActive = true;
		setTimeout(() => {
			scrollAnimationIsActive = false;
		}, 500);

		if (hash === '#about') {
			window.scrollTo({
				top: aboutSectionTop,
				behavior: 'smooth'
			});
		}
		if (hash === '#skills') {
			window.scrollTo({
				top: skillsSectionTop,
				behavior: 'smooth'
			});
		}
		if (hash === '#projects') {
			window.scrollTo({
				top: projectsSectionTop,
				behavior: 'smooth'
			});
		}
	}}
/>

<svelte:head>
	<title>{currentSection} • Sidney Prytherch</title>
	<meta name="description" content="Sidney's awesome profile website" />
</svelte:head>

<!-- <section id="intro" bind:this={introSection} style="translate: 10px {scrollY}px {innerHeight}px; rotate: y {(90) * (scrollY / innerHeight)}deg;"> -->
<!-- <section id="intro" bind:this={introSection} style="transform: matrix3d({scrollCos},0,{scrollSin},0,0.00,1,0.00,0,-{scrollSin},0,{scrollCos},0,0,{scrollY},-{scrollY},1)"> -->
<!-- <section id="intro" bind:this={introSection} style="transform: perspective(1000px) rotate3d(0, 1, 0, {3 * angleDeg}deg) translate3d(0px, {scrollY}px, -{2 * scrollY}px);"> -->
<section
	id="intro"
	bind:this={introSection}
	class="sticky"
	style="transform: rotate3d(0, 1, 0, {introRotateAngle}deg) translate3d(0px, 0px, {translateZ}px) skewY({introSkewAngleOut}deg);"
>
	<div class="image-container">
		<span class="animation picture fancy-animation">
			<picture>
				<img src={profile_picture} alt="Name" />
			</picture>
		</span>

		<div class="pocket-container">
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
			<div class="pocket"></div>
		</div>
	</div>
</section>

<!-- style="transform: perspective({innerHeight * 2}px) rotate3d(0, 1, 0, {3 * angleDeg}deg) translate3d(0px, {scrollY}px, -{3 * scrollY}px);" -->
<!-- <section id="about" bind:this={aboutSection} style="{percentScrolled < 2 ? `transform: perspective(${innerWidth}px) rotate3d(0, 1, 0, ${paperAngleDeg}deg) translate3d(${paperXTranslate}px, ${scrollY - 2 * innerHeight}px, ${paperZTranslate}px)` : ''}" -->
<!-- class:invisible={scrollPosition < threshold} -->
<section
	id="about"
	bind:this={aboutSection}
	style={viewportWidth < 720
		? scrollPosition < aboutToSkillsScrollThreshold
			? `transform: rotate3d(0, 1, 0, ${aboutRotateAngleIn}deg) translate3d(0px, 0px, ${translateZ}px) skewY(${aboutSkewAngleIn}deg);`
			: `transform: rotate3d(0, 1, 0, ${aboutRotateAngleOut}deg) translate3d(0px, 0px, ${translateZ}px) skewY(${aboutSkewAngleOut}deg);`
		: scrollPosition > aboutToSkillsScrollCondition
			? `transform: translate3d(${aboutToSkillsTranslateX}px, ${aboutToSkillsTranslateY}px, ${translateZ}px) skewY(${aboutSkewAngleOut * 0}deg);`
			: // `transform: rotate3d(0, 1, 0, ${aboutRotateAngleOut}deg) translate3d(${aboutToSkillsTranslateX}px, ${aboutToSkillsTranslateY}px, ${translateZ}px) skewY(${aboutSkewAngleOut * 0}deg);`
				// scrollPosition < aboutToSkillsScrollThreshold
				// : `transform: rotate3d(0, 1, 0, ${aboutRotateAngleOut}deg) translate3d(0px, 0px, ${translateZ}px) skewY(${aboutSkewAngleOut * 0}deg);`}
				`transform: rotate3d(0, 1, 0, ${aboutRotateAngleIn}deg) translate3d(0px, 0px, ${translateZ}px) skewY(${aboutSkewAngleIn}deg);`}
>
	<About />
	<!-- <div class="blank"></div> -->
	<div class="hand" style="top: {handTop}px">
		<span>
			<picture>
				<img src={hand_picture} alt="Hand" />
			</picture>
		</span>
	</div>
</section>
<section
	id="skills"
	bind:this={skillsSection}
	style={viewportWidth < 720
		? scrollPosition < aboutToSkillsScrollThreshold + transitionPeriod
			? `transform: rotate3d(0, 1, 0, ${skillsRotateAngleIn}deg) translate3d(0px, 0px, ${translateZ}px) skewY(${skillsSkewAngleIn}deg);`
			: `transform: rotate3d(0, 1, 0, ${skillsRotateAngleOut}deg) translate3d(0px, 0px, ${translateZ}px) skewY(${skillsSkewAngleOut}deg);`
		: scrollPosition > skillsToProjectScrollCondition
			? `transform: translate3d(${skillsToProjectTranslateX}px, ${skillsToProjectTranslateY}px, ${translateZ}px) skewY(${skillsSkewAngleOut * 0}deg);`
			: // `transform: rotate3d(0, 1, 0, ${skillsRotateAngleOut}deg) translate3d(${skillsToProjectTranslateX}px, ${skillsToProjectTranslateY}px, ${translateZ}px) skewY(${skillsSkewAngleOut * 0}deg);`

				// style={scrollPosition < aboutToSkillsScrollThreshold + transitionPeriod
				// 	? `transform: rotate3d(0, 1, 0, ${skillsRotateAngleIn}deg) translate3d(0px, 0px, ${translateZ}px) skewY(${skillsSkewAngleIn}deg);`
				// 	: `transform: rotate3d(0, 1, 0, ${skillsRotateAngleOut}deg) translate3d(0px, 0px, ${translateZ}px) skewY(${skillsSkewAngleOut}deg);`}
				`transform: rotate3d(0, 1, 0, ${skillsRotateAngleIn}deg) translate3d(0px, 0px, ${translateZ}px) skewY(${skillsSkewAngleIn * 0}deg);`}
>
	<Skills />
	<div class="lefthand" style="top: {handTop}px">
		<span>
			<picture>
				<img src={hand_picture} alt="Hand" />
			</picture>
		</span>
	</div>
</section>
<section
	id="projects"
	bind:this={projectsSection}
	style="transform: scale({projectsScale}) rotate3d(0, 1, 0, {projectsRotateAngleIn}deg) translate3d(0px, 0px, {translateZ}px) skewY({projectsSkewAngleIn}deg);"
>
	<div
		class="folder"
		style="transform: matrix3d({folderCosAngle}, {folderTanSkew}, {folderSinAngle}, 0, 0, 1, 0, 0, {-folderSinAngle}, 0, cos(95deg), {translateZ},0, 0, 0, 1);"
	></div>
	<div
		class="folder top"
		style="transform: matrix3d({folderCosAngle}, -{folderTanSkew}, {folderSinAngle}, 0, 0, 1, 0, 0, {-folderSinAngle}, 0, cos(95deg), {translateZ},0, 0, 0, 1);"
	>
		<h1>PROJECTS</h1>
	</div>
	<Projects
		buttonSort={() => {
			requestAnimationFrame(step);

			setTimeout(() => {
				window.scrollTo({
					top: projectsSectionTop,
					behavior: 'smooth'
				});
			}, 550); // 500 is when the filter applies and therefore when the page size may change, so 550, after this, is ideal
		}}
	/>
	<div class="hand" style="top: {handTop}px">
		<span>
			<picture>
				<img src={hand_picture} alt="Hand" />
			</picture>
		</span>
	</div>
</section>

<style>
	.pocket-container {
		position: relative;
	}
	.pocket {
		background-image: url(/src/lib/images/pocket.svg);
		width: 36vw;
		background-size: cover;
		height: 52vw;
		position: absolute;
		top: 50%;
		padding: 10px;
		right: 20%;
	}

	.top {
		z-index: 3 !important;
		align-items: flex-start;
		justify-content: center;
		display: flex;
	}

	.top h1 {
		padding-top: 50vh;
	}

	.hand {
		position: absolute;
		right: 0;
		/* where the edge of the paper should be in the image for the illusion of behind the hand: */
		transform: translateX(432px);
	}

	.lefthand {
		position: absolute;
		left: 0;
		/* where the edge of the paper should be in the image for the illusion of behind the hand: */
		-webkit-transform: scaleX(-1) translateX(432px);
		transform: scaleX(-1) translateX(432px);
	}

	#projects,
	.folder {
		background-color: burlywood;
		min-height: 150vh;
		max-height: 150vh;
	}

	#skills,
	#about {
		border-image-slice: 72 72 72 72 fill;
		border-image-width: 60px 60px 60px 60px;
		border-image-outset: 0px 0px 0px 0px;
		border-image-repeat: round round;
		z-index: 0;
		min-height: 110vh;
		border-image-source: url(/src/lib/images/linedPaper.png);
	}

	#intro {
		background: url(/src/lib/images/shirtButtonTransparent.svg) repeat-y;
		background-position-x: 25%;
		background-size: 200px;
		z-index: 0;
		min-height: 200vh;
	}

	.sticky {
		position: sticky;
		top: 50px;
	}

	#intro h1 {
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		background: #c13e32;
		border-bottom: rgb(186, 181, 180) 35px solid;
		transform: translate(0px, 1px);
		margin-bottom: 0px;
	}

	.myName {
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		background: rgb(186, 181, 180);
		margin-top: 0px;
		border-bottom: #c13e32 30px solid;
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

	.folder {
		position: absolute;
		top: 0;
		left: 0;
		min-height: 100%;
		min-width: 100%;
		z-index: 1;
		transform-origin: left center;
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
			background: url(/src/lib/images/shirtButtonTransparent.svg) repeat-y;
			background-position-x: center;
			background-size: 100px;
			padding-top: 0px;
		}
		.hand,
		.lefthand {
			display: none;
		}
		.pocket {
			display: none;
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
