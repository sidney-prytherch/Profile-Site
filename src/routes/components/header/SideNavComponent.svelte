<script lang="ts">
	export let pageList: string[] = ['Home', 'Contact', 'About', 'Skills', 'Projects'];
	export let hrefList: string[];
	export let currentPage: string;
</script>

<nav>
	<ul>
		{#each pageList as pageName, i}
			<li aria-current={currentPage === pageName ? 'page' : undefined}>
				<a href={hrefList[i]}>{pageName}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	@import './navStyles.css';
	ul {
		align-items: start;
		flex-direction: column;
	}

	li {
		margin-left: 10px;
	}

	li[aria-current='page']::before {
		margin-top: var(--size);
		rotate: 270deg;
		left: 0;
	}

	nav {
		display: flex;
		--background: rgba(255, 255, 255, 0.7);
	}
</style>
