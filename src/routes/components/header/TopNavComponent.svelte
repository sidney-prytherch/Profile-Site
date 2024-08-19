<script lang="ts">
	export let pageList: string[] = ['Home', 'Contact', 'About', 'Skills', 'Projects'];
	export let hrefList: string[];
	export let currentPage: string;
</script>

<nav>
	<svg width="32" height="48" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges"
		><path
			d="M0 0h4v4H0zM4 0h4v4H4zM8 0h4v4H8zM12 0h4v4h-4zM16 0h4v4h-4zM20 0h4v4h-4zM24 0h4v4h-4zM28 0h4v4h-4zM0 4h4v4H0zM4 4h4v4H4zM8 4h4v4H8zM12 4h4v4h-4zM16 4h4v4h-4zM20 4h4v4h-4zM24 4h4v4h-4zM28 4h4v4h-4zM0 8h4v4H0zM4 8h4v4H4zM8 8h4v4H8zM12 8h4v4h-4zM16 8h4v4h-4zM20 8h4v4h-4zM24 8h4v4h-4zM28 8h4v4h-4zM4 12h4v4H4zM8 12h4v4H8zM12 12h4v4h-4zM16 12h4v4h-4zM20 12h4v4h-4zM24 12h4v4h-4zM28 12h4v4h-4zM4 16h4v4H4zM8 16h4v4H8zM12 16h4v4h-4zM16 16h4v4h-4zM20 16h4v4h-4zM24 16h4v4h-4zM28 16h4v4h-4zM4 20h4v4H4zM8 20h4v4H8zM12 20h4v4h-4zM16 20h4v4h-4zM20 20h4v4h-4zM24 20h4v4h-4zM28 20h4v4h-4zM8 24h4v4H8zM12 24h4v4h-4zM16 24h4v4h-4zM20 24h4v4h-4zM24 24h4v4h-4zM28 24h4v4h-4zM8 28h4v4H8zM12 28h4v4h-4zM16 28h4v4h-4zM20 28h4v4h-4zM24 28h4v4h-4zM28 28h4v4h-4zM12 32h4v4h-4zM16 32h4v4h-4zM20 32h4v4h-4zM24 32h4v4h-4zM28 32h4v4h-4zM12 36h4v4h-4zM16 36h4v4h-4zM20 36h4v4h-4zM24 36h4v4h-4zM28 36h4v4h-4zM20 40h4v4h-4zM24 40h4v4h-4zM28 40h4v4h-4zM28 44h4v4h-4z"
		/></svg
	>

	<ul>
		{#each pageList as pageName, i}
			<li aria-current={currentPage === pageName ? 'page' : undefined}>
				<a href={hrefList[i]}>{pageName}</a>
			</li>
		{/each}
	</ul>
	<svg width="32" height="48" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges"
		><path
			d="M0 0h4v4H0zM4 0h4v4H4zM8 0h4v4H8zM12 0h4v4h-4zM16 0h4v4h-4zM20 0h4v4h-4zM24 0h4v4h-4zM28 0h4v4h-4zM0 4h4v4H0zM4 4h4v4H4zM8 4h4v4H8zM12 4h4v4h-4zM16 4h4v4h-4zM20 4h4v4h-4zM24 4h4v4h-4zM28 4h4v4h-4zM0 8h4v4H0zM4 8h4v4H4zM8 8h4v4H8zM12 8h4v4h-4zM16 8h4v4h-4zM20 8h4v4h-4zM24 8h4v4h-4zM28 8h4v4h-4zM0 12h4v4H0zM4 12h4v4H4zM8 12h4v4H8zM12 12h4v4h-4zM16 12h4v4h-4zM20 12h4v4h-4zM24 12h4v4h-4zM0 16h4v4H0zM4 16h4v4H4zM8 16h4v4H8zM12 16h4v4h-4zM16 16h4v4h-4zM20 16h4v4h-4zM24 16h4v4h-4zM0 20h4v4H0zM4 20h4v4H4zM8 20h4v4H8zM12 20h4v4h-4zM16 20h4v4h-4zM20 20h4v4h-4zM24 20h4v4h-4zM0 24h4v4H0zM4 24h4v4H4zM8 24h4v4H8zM12 24h4v4h-4zM16 24h4v4h-4zM20 24h4v4h-4zM0 28h4v4H0zM4 28h4v4H4zM8 28h4v4H8zM12 28h4v4h-4zM16 28h4v4h-4zM20 28h4v4h-4zM0 32h4v4H0zM4 32h4v4H4zM8 32h4v4H8zM12 32h4v4h-4zM16 32h4v4h-4zM0 36h4v4H0zM4 36h4v4H4zM8 36h4v4H8zM12 36h4v4h-4zM16 36h4v4h-4zM0 40h4v4H0zM4 40h4v4H4zM8 40h4v4H8zM0 44h4v4H0z"
		/></svg
	>
</nav>

<style>
	@import './navStyles.css';
	ul {
		height: 3em;
		justify-content: center;
		align-items: center;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		top: 0;
		left: calc(50% - var(--size));
	}

	nav {
		display: flex;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}
</style>
