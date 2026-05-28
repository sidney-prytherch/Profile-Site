<script lang="ts">
	import projects from '$lib/data/projects.json';
	import nameImage from '$lib/images/name.png';
	import kirby1 from '$lib/images/kirby/kirby.gif';
	import kirby2 from '$lib/images/kirbySite/KirbySite2.png';
	import kirby3 from '$lib/images/kirbySite/KirbySite3.png';
	import crochet1 from '$lib/images/CrochetV2/crochetOne.png';
	import crochet2 from '$lib/images/CrochetV2/crochetTwo.png';
	import crochet3 from '$lib/images/CrochetV2/crochetThree.png';
	import snake1 from '$lib/images/Snake/Snake1.gif';
	import snake2 from '$lib/images/Snake/Snake2.png';
	import snake3 from '$lib/images/Snake/Snake3.png';
	import snake4 from '$lib/images/Snake/Snake4.png';
	import spanishCrossword1 from '$lib/images/SpanishCrossword/Options.png';
	import spanishCrossword2 from '$lib/images/SpanishCrossword/Example.png';
	import spanishCrossword3 from '$lib/images/SpanishCrossword/Hints.png';
	import spanishCrossword4 from '$lib/images/SpanishCrossword/SpanishChecking.png';
	import hitOrBlow1 from '$lib/images/HitOrBlow/game.png';
	import hitOrBlow2 from '$lib/images/HitOrBlow/game2.png';
	import hitOrBlow3 from '$lib/images/HitOrBlow/results.png';
	import hitOrBlow4 from '$lib/images/HitOrBlow/settings.png';
	import PtAppCrossword from '$lib/images/PTVerbApp/crossword.png';
	import PtAppDictionary from '$lib/images/PTVerbApp/dictionary.png';
	import PtAppMainPage from '$lib/images/PTVerbApp/mainPage.png';
	import PtAppResults from '$lib/images/PTVerbApp/results.png';
	import PtApptimerMode from '$lib/images/PTVerbApp/TimerMode.png';
	import PtAppWordsearch from '$lib/images/PTVerbApp/wordsearch.png';
	import trainTracks1 from '$lib/images/TrainTracks/Screenshot_20250122_161548.png';
	import trainTracks2 from '$lib/images/TrainTracks/Screenshot_20250122_161843.png';
	import trainTracks3 from '$lib/images/TrainTracks/Screenshot_20250122_161909.png';
	import trainTracks4 from '$lib/images/TrainTracks/trainAnimation.gif';
	import yamlEditor1 from '$lib/images/YamlEditor/MainScreen.png';
	import yamlEditor2 from '$lib/images/YamlEditor/Result.png';
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
		spanishCrossword4,
		hitOrBlow1,
		hitOrBlow2,
		hitOrBlow3,
		hitOrBlow4,
		PtAppCrossword,
		PtAppDictionary,
		PtAppMainPage,
		PtAppResults,
		PtApptimerMode,
		PtAppWordsearch,
		trainTracks4,
		trainTracks1,
		trainTracks2,
		trainTracks3,
		yamlEditor1,
		yamlEditor2
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
				{#if !!project.extraDetails && project.extraDetails.length > 0}
					<ul class:expanded={projectExpanded[i]}>
						{#each project.extraDetails as extraDetail}
							<li><p>{extraDetail}</p></li>
						{/each}
					</ul>
				{/if}
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
		max-height: 400px;
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
		min-height: 120vh;
		border-radius: 10px;
		overflow-y: scroll;
		max-height: 120vh;
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
