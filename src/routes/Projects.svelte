<script lang="ts">
	import projects from '$lib/data/projects.json';
	import nameImage from '$lib/images/name.png';
	import kirby1 from '$lib/images/kirby Site/Kirby site animation.gif';
	import kirby2 from '$lib/images/kirby Site/Kirby Site 2.png';
	import kirby3 from '$lib/images/kirby Site/Kirby Site 3.png';
	import crochet1 from '$lib/images/Crochet V2/crochetOne.png';
	import crochet2 from '$lib/images/Crochet V2/crochetTwo.png';
	import crochet3 from '$lib/images/Crochet V2/crochetThree.png';
	import snake1 from '$lib/images/Snake/Snake1.gif';
	import snake2 from '$lib/images/Snake/Snake2.png';
	import snake3 from '$lib/images/Snake/Snake3.png';
	import snake4 from '$lib/images/Snake/Snake4.png';
	import spanishCrossword1 from '$lib/images/Spanish Crossword/Spanish Crossword Options.png';
	import spanishCrossword2 from '$lib/images/Spanish Crossword/Spanish Crossword Example.png';
	import spanishCrossword3 from '$lib/images/Spanish Crossword/Spanish Crossword Hints.png';
	import spanishCrossword4 from '$lib/images/Spanish Crossword/Spanish Checking.png';
	import { TAG_CODE_TO_NAME_MAP, ProjectTagCodes } from './types';

	const images: { [imageCode: string]: string } = {
		nameImage: nameImage,
		kirby1,
		kirby2,
		kirby3,
		crochet1,
		crochet2,
		crochet3,
		snake1,
		snake2,
		snake3,
		snake4,
		spanishCrossword1,
		spanishCrossword2,
		spanishCrossword3,
		spanishCrossword4
	};

	let { buttonSort } = $props();

	let currentFilter = $state(ProjectTagCodes.ALLPROJECTS);

	let projectExpanded = $state(projects.map((it) => false));

	// array of strings/tags whose filter is active
	let filteredProjects = $derived(
		currentFilter === ProjectTagCodes.ALLPROJECTS
			? projects
			: projects.filter((project) => project.tags.includes(currentFilter))
	);

	function setFilter(tagCode: string) {
		currentFilter =
			currentFilter === tagCode
				? ProjectTagCodes.ALLPROJECTS
				: ProjectTagCodes[tagCode as keyof typeof ProjectTagCodes];
	}
</script>

<div id="project-section">
	<h1>Personal Projects</h1>

	<div class="tags">
		{#each TAG_CODE_TO_NAME_MAP.entries() as [tagCode, tagName]}
			<button
				class:selected={currentFilter === tagCode}
				onclick={() => {
					buttonSort();
					setTimeout(() => {
						setFilter(tagCode);
					}, 500);
				}}>{tagName}</button
			>
		{/each}
	</div>

	<div class="projects-section">
		{#each filteredProjects as project, i}
			<div class="project-group">
				<h2>{project.title}</h2>
				<div class="title-and-tags">
					{#each project.tags as tag}
						<span>{tag ? TAG_CODE_TO_NAME_MAP.get(tag) : '-'}</span>
					{/each}
				</div>
				<p>{project.description}</p>
				<button
					class="expandButton"
					onclick={() => {
						projectExpanded[i] = !projectExpanded[i];
					}}
					><i class="pixel-carot" class:rotated={projectExpanded[i]}></i>{projectExpanded[i]
						? 'hide'
						: 'show more'} details</button
				>
				<ul class:expanded={projectExpanded[i]}>
					{#each project.extraDetails as extraDetail}
						<li><p>{extraDetail}</p></li>
					{/each}
				</ul>
				<div>
					{#each project.imagePath as imgSrc}
						<img src={images[imgSrc]} alt="Name" />
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.pixel-carot {
		background-image: url(/src/lib/images/carot.svg);
		background-repeat: no-repeat;
		width: 15px;
		height: 15px;
		background-size: 15px;
		font-size: large !important;
		display: inline-block;
		padding-bottom: 5px;
		margin-right: 5px;
		font-size: large !important;
		transform-origin: center;
		transition: transform 0.5s;
	}

	.expandButton {
		display: inline-flex;
		align-items: center;
		box-shadow: none;
		background-color: #00000000;
	}

	.pixel-carot.rotated {
		transform: rotate(90deg);
	}

	.expandButton {
		width: fit-content;
		border: none;
	}

	img {
		max-width: 46%;
		margin: 1%;
		border-radius: 10px;
		border: #00000055 solid 5px;
	}

	.expanded {
		/* height: max-content; */
		visibility: visible;
		max-height: 200px;
		overflow-y: auto;
	}

	ul {
		/* height: 0; */
		/* transition: height 2s ease, visibility 2s; */
		/* interpolate-size: allow-keywords; */
		transition:
			max-height 0.5s ease-in-out,
			visibility 1s;
		max-height: 1px;
		overflow: clip;
		visibility: hidden;
		-webkit-background-clip: text;
		background-clip: text;
		overflow-y: hidden;
		margin-right: 40px;
	}

	li {
		font-size: large;
	}

	.projects-section {
		background-color: antiquewhite;
		padding: 10px;
		margin: 10px;
		min-height: 150vh;
		border-radius: 10px;
	}

	h2,
	p,
	li {
		margin-block: 0;
	}

	li p {
		font-size: large;
	}

	h2 {
		max-width: fit-content;
		display: inline-block;
	}

	#project-section {
		margin: 0 30px;
	}

	.title-and-tags {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
	}

	span {
		background-color: #00000022;
		border-radius: 10px;
		border: solid #00000055 1px;
		padding: 5px;
		margin: 6px 3px;
	}

	button {
		background-color: #00000022;
		border-radius: 10px;
		border: solid #00000055 3px;
		padding: 5px;
		margin: 6px 3px;
		box-shadow: 2px 4px;
	}

	.clear {
		background-color: #fd0303aa;
		border-color: rgb(117, 0, 0);
	}

	.selected {
		background-color: #000000aa;
		border-color: #00000088;
		transform: translate(2px, 4px);
		box-shadow: 1px 1px 0px black;
		color: lightcyan;
	}

	.project-group {
		display: flex;
		align-content: stretch;
		align-items: stretch;
		flex-direction: column;
		background-color: #00000022;
		border-radius: 10px;
		padding: 10px;
		margin: 10px;
	}

	.project-group h2 {
		text-decoration: underline;
	}

	@media (max-width: 720px) {
		img {
			max-width: 98%;
			margin: 1%;
		}
	}
</style>
