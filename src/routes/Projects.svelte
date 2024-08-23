<script lang="ts">
	import projects from '$lib/data/projects.json';
	import { ProjectTags } from './types';

	// necessary for getting enum key from enum value within Svelte html section
	const tagMap = new Map(Object.entries(ProjectTags));

	// each tag can be filtered - this map stores each tag and a bool of whether it's filtered or not
	let tagFilterBooleanMap = new Map(Object.keys(ProjectTags).map((tag) => [tag, false]));
	// array of strings/tags whose filter is active
	$: filteredTags = [...tagFilterBooleanMap.keys()].filter((tag) => tagFilterBooleanMap.get(tag));
	$: filteredProjects =
		filteredTags.length === 0 || filteredTags.length === tagFilterBooleanMap.size
			? projects
			: projects.filter((project) =>
					project.tags.some((projectTag) => filteredTags.includes(projectTag))
				);
</script>

<div id="project-section">
	<h1>Projects</h1>

	<div class="tags">
		{#each tagFilterBooleanMap.entries() as [tag, isFiltered]}
			<button
				class:selected={isFiltered}
				on:click={() => {
					tagFilterBooleanMap.set(tag, !isFiltered);
					tagFilterBooleanMap = tagFilterBooleanMap;
				}}>{tagMap.get(tag)}</button
			>
		{/each}
		<button
			class="clear"
			on:click={() => {
				[...tagFilterBooleanMap.keys()].forEach((key) => {
					tagFilterBooleanMap.set(key, false);
				});
				tagFilterBooleanMap = tagFilterBooleanMap;
			}}
			>clear filter
		</button>
	</div>

	{#each filteredProjects as project}
		<div class="project-group">
            <h2>{project.title}</h2>
			<div class="title-and-tags">
				{#each project.tags as tag}
					<span>{tagMap.get(tag)}</span>
				{/each}
			</div>
			<p>{project.description}</p>
		</div>
	{/each}
</div>

<style>
    h2, p {
        margin-block: 0
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
        margin: 10px
	}

	.project-group h2 {
        text-decoration: underline;
	}
</style>
