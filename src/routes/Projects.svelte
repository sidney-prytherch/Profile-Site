<script lang="ts">
	import projects from '$lib/data/projects.json';
	import { TAG_CODE_TO_NAME_MAP, ProjectTagCodes } from './types';

	let currentFilter = ProjectTagCodes.ALLPROJECTS;

	// array of strings/tags whose filter is active
	$: filteredProjects =
		currentFilter === ProjectTagCodes.ALLPROJECTS
			? projects
			: projects.filter((project) => project.tags.includes(currentFilter));

	function setFilter(tagCode: string) {
		currentFilter =
			currentFilter === tagCode
				? ProjectTagCodes.ALLPROJECTS
				: ProjectTagCodes[tagCode as keyof typeof ProjectTagCodes];
	}
</script>

<div id="project-section">
	<h1>Projects</h1>

	<div class="tags">
		{#each TAG_CODE_TO_NAME_MAP.entries() as [tagCode, tagName]}
			<button
				class:selected={currentFilter === tagCode}
				on:click={() => {
					setFilter(tagCode);
				}}>{tagName}</button
			>
		{/each}
		<!-- <button
			class="clear"
			on:click={() => {
				clearFilter();
				tagFilterBooleanMap = tagFilterBooleanMap;
			}}
			>clear filter
		</button> -->
	</div>

	{#each filteredProjects as project}
		<div class="project-group">
			<h2>{project.title}</h2>
			<div class="title-and-tags">
				{#each project.tags as tag}
					<span>{tag ? TAG_CODE_TO_NAME_MAP.get(tag) : '-'}</span>
				{/each}
			</div>
			<p>{project.description}</p>
		</div>
	{/each}
</div>

<style>
	h2,
	p {
		margin-block: 0;
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
</style>
