<script>
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
	import menuIcon from '$lib/images/menu.svg';
	import { currentSectionString } from '$lib/stores/sectionStore';
	import TopNavComponent from './TopNavComponent.svelte';
	import SideNavComponent from './SideNavComponent.svelte';
	import { onMount } from 'svelte';

	const pageList = ['Home', 'Contact', 'About', 'Skills', 'Projects'];
	const hrefList = ['/', '/contact', '/#about', '/#skills', '/#projects'];
	$: currentPage =
		$page.url.pathname === '/contact'
			? 'Contact'
			: $currentSectionString === 'About'
				? 'About'
				: $currentSectionString === 'Skills'
					? 'Skills'
					: $currentSectionString === 'Projects'
						? 'Projects'
						: 'Home';

	let sideNavVisible = false;

	onMount(() => {
		window.addEventListener('resize', () => {
			if (window.matchMedia('(min-width: 721px)').matches) {
				sideNavVisible = false;
			}
		});
	});
</script>

<header>
	<!-- to keep the nav bar centered: -->
	<div class="corner left">
		<button
			class="small-screen-visibility"
			on:click={() => {
				sideNavVisible = !sideNavVisible;
			}}
		>
			<img src={menuIcon} alt="menu" />
		</button>
		<div class="side-nav" class:hidden={!sideNavVisible}>
			<SideNavComponent {pageList} {hrefList} bind:currentPage />
		</div>
	</div>

	<div class="top-nav">
		<TopNavComponent {pageList} {hrefList} bind:currentPage />
	</div>

	<div class="corner">
		<a href="https://github.com/sidney-prytherch/Profile-Site">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		position: sticky;
		top: 0;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a,
	.left img {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2.5em;
		height: 2.5em;
		object-fit: contain;
	}

	.left img {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.side-nav {
		max-height: 150px;
		min-width: fit-content;
		overflow: hidden;
		transition: max-height 0.3s ease-in-out;
	}

	.hidden {
		max-height: 0 !important;
		transition: max-height 0.3s ease-in-out;
	}

	.left {
		left: 0;
	}

	.side-nav {
		display: none;
	}

	.small-screen-visibility {
		display: none;
		background-color: rgba(255, 255, 255, 0.7);
		border: none;
	}

	/* when screen is large: */
	@media (max-width: 720px) {
		.top-nav {
			display: none;
		}

		.side-nav {
			display: block;
		}

		.small-screen-visibility {
			display: block;
		}
	}
</style>
