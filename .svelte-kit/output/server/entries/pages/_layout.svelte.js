import { c as create_ssr_component, e as each, a as add_attribute, b as escape, d as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { w as writable } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
const github = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20xmlns='http://www.w3.org/2000/svg'%20shape-rendering='crispEdges'%3e%3cpath%20d='M5%200h1v1H5zM6%200h1v1H6zM7%200h1v1H7zM8%200h1v1H8zM9%200h1v1H9zM10%200h1v1h-1zM11%200h1v1h-1zM12%200h1v1h-1zM3%201h1v1H3zM4%201h1v1H4zM5%201h1v1H5zM6%201h1v1H6zM7%201h1v1H7zM8%201h1v1H8zM9%201h1v1H9zM10%201h1v1h-1zM11%201h1v1h-1zM12%201h1v1h-1zM13%201h1v1h-1zM14%201h1v1h-1zM2%202h1v1H2zM3%202h1v1H3zM4%202h1v1H4zM5%202h1v1H5zM12%202h1v1h-1zM13%202h1v1h-1zM14%202h1v1h-1zM15%202h1v1h-1zM1%203h1v1H1zM2%203h1v1H2zM3%203h1v1H3zM14%203h1v1h-1zM15%203h1v1h-1zM16%203h1v1h-1zM1%204h1v1H1zM2%204h1v1H2zM15%204h1v1h-1zM16%204h1v1h-1zM0%205h1v1H0zM1%205h1v1H1zM2%205h1v1H2zM5%205h1v1H5zM6%205h1v1H6zM8%205h1v1H8zM9%205h1v1H9zM11%205h1v1h-1zM12%205h1v1h-1zM15%205h1v1h-1zM16%205h1v1h-1zM17%205h1v1h-1zM0%206h1v1H0zM1%206h1v1H1zM6%206h1v1H6zM7%206h1v1H7zM8%206h1v1H8zM9%206h1v1H9zM10%206h1v1h-1zM11%206h1v1h-1zM16%206h1v1h-1zM17%206h1v1h-1zM0%207h1v1H0zM1%207h1v1H1zM5%207h1v1H5zM6%207h1v1H6zM7%207h1v1H7zM8%207h1v1H8zM9%207h1v1H9zM10%207h1v1h-1zM11%207h1v1h-1zM12%207h1v1h-1zM16%207h1v1h-1zM17%207h1v1h-1zM0%208h1v1H0zM1%208h1v1H1zM5%208h1v1H5zM6%208h1v1H6zM7%208h1v1H7zM8%208h1v1H8zM9%208h1v1H9zM10%208h1v1h-1zM11%208h1v1h-1zM12%208h1v1h-1zM16%208h1v1h-1zM17%208h1v1h-1zM0%209h1v1H0zM1%209h1v1H1zM5%209h1v1H5zM6%209h1v1H6zM7%209h1v1H7zM8%209h1v1H8zM9%209h1v1H9zM10%209h1v1h-1zM11%209h1v1h-1zM12%209h1v1h-1zM16%209h1v1h-1zM17%209h1v1h-1zM0%2010h1v1H0zM1%2010h1v1H1zM6%2010h1v1H6zM7%2010h1v1H7zM8%2010h1v1H8zM9%2010h1v1H9zM10%2010h1v1h-1zM11%2010h1v1h-1zM16%2010h1v1h-1zM17%2010h1v1h-1zM0%2011h1v1H0zM1%2011h1v1H1zM3%2011h1v1H3zM4%2011h1v1H4zM7%2011h1v1H7zM8%2011h1v1H8zM9%2011h1v1H9zM10%2011h1v1h-1zM16%2011h1v1h-1zM17%2011h1v1h-1zM0%2012h1v1H0zM1%2012h1v1H1zM2%2012h1v1H2zM4%2012h1v1H4zM5%2012h1v1H5zM6%2012h1v1H6zM7%2012h1v1H7zM8%2012h1v1H8zM9%2012h1v1H9zM10%2012h1v1h-1zM11%2012h1v1h-1zM15%2012h1v1h-1zM16%2012h1v1h-1zM17%2012h1v1h-1zM1%2013h1v1H1zM2%2013h1v1H2zM5%2013h1v1H5zM6%2013h1v1H6zM7%2013h1v1H7zM8%2013h1v1H8zM9%2013h1v1H9zM10%2013h1v1h-1zM11%2013h1v1h-1zM15%2013h1v1h-1zM16%2013h1v1h-1zM1%2014h1v1H1zM2%2014h1v1H2zM3%2014h1v1H3zM6%2014h1v1H6zM7%2014h1v1H7zM8%2014h1v1H8zM9%2014h1v1H9zM10%2014h1v1h-1zM11%2014h1v1h-1zM14%2014h1v1h-1zM15%2014h1v1h-1zM16%2014h1v1h-1zM2%2015h1v1H2zM3%2015h1v1H3zM4%2015h1v1H4zM5%2015h1v1H5zM6%2015h1v1H6zM7%2015h1v1H7zM8%2015h1v1H8zM9%2015h1v1H9zM10%2015h1v1h-1zM11%2015h1v1h-1zM12%2015h1v1h-1zM13%2015h1v1h-1zM14%2015h1v1h-1zM15%2015h1v1h-1zM3%2016h1v1H3zM4%2016h1v1H4zM5%2016h1v1H5zM6%2016h1v1H6zM7%2016h1v1H7zM8%2016h1v1H8zM9%2016h1v1H9zM10%2016h1v1h-1zM11%2016h1v1h-1zM12%2016h1v1h-1zM13%2016h1v1h-1zM14%2016h1v1h-1zM5%2017h1v1H5zM6%2017h1v1H6zM7%2017h1v1H7zM8%2017h1v1H8zM9%2017h1v1H9zM10%2017h1v1h-1zM11%2017h1v1h-1zM12%2017h1v1h-1z'/%3e%3c/svg%3e";
const menuIcon = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20xmlns='http://www.w3.org/2000/svg'%20shape-rendering='crispEdges'%3e%3cpath%20d='M3%203h1v1H3zM4%203h1v1H4zM5%203h1v1H5zM6%203h1v1H6zM7%203h1v1H7zM8%203h1v1H8zM9%203h1v1H9zM10%203h1v1h-1zM11%203h1v1h-1zM4%204h1v1H4zM5%204h1v1H5zM6%204h1v1H6zM7%204h1v1H7zM8%204h1v1H8zM9%204h1v1H9zM10%204h1v1h-1zM11%204h1v1h-1zM12%204h1v1h-1zM3%207h1v1H3zM4%207h1v1H4zM5%207h1v1H5zM6%207h1v1H6zM7%207h1v1H7zM8%207h1v1H8zM9%207h1v1H9zM10%207h1v1h-1zM11%207h1v1h-1zM4%208h1v1H4zM5%208h1v1H5zM6%208h1v1H6zM7%208h1v1H7zM8%208h1v1H8zM9%208h1v1H9zM10%208h1v1h-1zM11%208h1v1h-1zM12%208h1v1h-1zM3%2011h1v1H3zM4%2011h1v1H4zM5%2011h1v1H5zM6%2011h1v1H6zM7%2011h1v1H7zM8%2011h1v1H8zM9%2011h1v1H9zM10%2011h1v1h-1zM11%2011h1v1h-1zM4%2012h1v1H4zM5%2012h1v1H5zM6%2012h1v1H6zM7%2012h1v1H7zM8%2012h1v1H8zM9%2012h1v1H9zM10%2012h1v1h-1zM11%2012h1v1h-1zM12%2012h1v1h-1z'/%3e%3c/svg%3e";
const currentSectionString = writable("Home");
const css$3 = {
  code: "nav.svelte-19920hg.svelte-19920hg{display:flex;--background:rgba(255, 255, 255, 0.7)}a.svelte-19920hg.svelte-19920hg:hover{color:var(--color-theme-1)}li.svelte-19920hg a.svelte-19920hg{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:1.5rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}li[aria-current='page'].svelte-19920hg.svelte-19920hg::before{--size:6px;content:'';width:0;height:0;position:absolute;border:var(--size) solid transparent;border-top:var(--size) solid var(--color-theme-1)}ul.svelte-19920hg.svelte-19920hg{position:relative;padding:0;margin:0;display:flex;list-style:none;background:var(--background);background-size:contain}ul.svelte-19920hg.svelte-19920hg{height:3em;justify-content:center;align-items:center}li.svelte-19920hg.svelte-19920hg{position:relative;height:100%}li[aria-current='page'].svelte-19920hg.svelte-19920hg::before{top:0;left:calc(50% - var(--size))}nav.svelte-19920hg.svelte-19920hg{display:flex;--background:rgba(255, 255, 255, 0.7)}svg.svelte-19920hg.svelte-19920hg{width:2em;height:3em;display:block}path.svelte-19920hg.svelte-19920hg{fill:var(--background)}",
  map: `{"version":3,"file":"TopNavComponent.svelte","sources":["TopNavComponent.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let pageList = [\\"Home\\", \\"Contact\\", \\"About\\", \\"Skills\\", \\"Projects\\"];\\nexport let hrefList;\\nexport let currentPage;\\n<\/script>\\n\\n<nav>\\n\\t<svg width=\\"32\\" height=\\"48\\" xmlns=\\"http://www.w3.org/2000/svg\\" shape-rendering=\\"crispEdges\\"\\n\\t\\t><path\\n\\t\\t\\td=\\"M0 0h4v4H0zM4 0h4v4H4zM8 0h4v4H8zM12 0h4v4h-4zM16 0h4v4h-4zM20 0h4v4h-4zM24 0h4v4h-4zM28 0h4v4h-4zM0 4h4v4H0zM4 4h4v4H4zM8 4h4v4H8zM12 4h4v4h-4zM16 4h4v4h-4zM20 4h4v4h-4zM24 4h4v4h-4zM28 4h4v4h-4zM0 8h4v4H0zM4 8h4v4H4zM8 8h4v4H8zM12 8h4v4h-4zM16 8h4v4h-4zM20 8h4v4h-4zM24 8h4v4h-4zM28 8h4v4h-4zM4 12h4v4H4zM8 12h4v4H8zM12 12h4v4h-4zM16 12h4v4h-4zM20 12h4v4h-4zM24 12h4v4h-4zM28 12h4v4h-4zM4 16h4v4H4zM8 16h4v4H8zM12 16h4v4h-4zM16 16h4v4h-4zM20 16h4v4h-4zM24 16h4v4h-4zM28 16h4v4h-4zM4 20h4v4H4zM8 20h4v4H8zM12 20h4v4h-4zM16 20h4v4h-4zM20 20h4v4h-4zM24 20h4v4h-4zM28 20h4v4h-4zM8 24h4v4H8zM12 24h4v4h-4zM16 24h4v4h-4zM20 24h4v4h-4zM24 24h4v4h-4zM28 24h4v4h-4zM8 28h4v4H8zM12 28h4v4h-4zM16 28h4v4h-4zM20 28h4v4h-4zM24 28h4v4h-4zM28 28h4v4h-4zM12 32h4v4h-4zM16 32h4v4h-4zM20 32h4v4h-4zM24 32h4v4h-4zM28 32h4v4h-4zM12 36h4v4h-4zM16 36h4v4h-4zM20 36h4v4h-4zM24 36h4v4h-4zM28 36h4v4h-4zM20 40h4v4h-4zM24 40h4v4h-4zM28 40h4v4h-4zM28 44h4v4h-4z\\"\\n\\t\\t/></svg\\n\\t>\\n\\n\\t<ul>\\n\\t\\t{#each pageList as pageName, i}\\n\\t\\t\\t<li aria-current={currentPage === pageName ? 'page' : undefined}>\\n\\t\\t\\t\\t<a href={hrefList[i]}>{pageName}</a>\\n\\t\\t\\t</li>\\n\\t\\t{/each}\\n\\t</ul>\\n\\t<svg width=\\"32\\" height=\\"48\\" xmlns=\\"http://www.w3.org/2000/svg\\" shape-rendering=\\"crispEdges\\"\\n\\t\\t><path\\n\\t\\t\\td=\\"M0 0h4v4H0zM4 0h4v4H4zM8 0h4v4H8zM12 0h4v4h-4zM16 0h4v4h-4zM20 0h4v4h-4zM24 0h4v4h-4zM28 0h4v4h-4zM0 4h4v4H0zM4 4h4v4H4zM8 4h4v4H8zM12 4h4v4h-4zM16 4h4v4h-4zM20 4h4v4h-4zM24 4h4v4h-4zM28 4h4v4h-4zM0 8h4v4H0zM4 8h4v4H4zM8 8h4v4H8zM12 8h4v4h-4zM16 8h4v4h-4zM20 8h4v4h-4zM24 8h4v4h-4zM28 8h4v4h-4zM0 12h4v4H0zM4 12h4v4H4zM8 12h4v4H8zM12 12h4v4h-4zM16 12h4v4h-4zM20 12h4v4h-4zM24 12h4v4h-4zM0 16h4v4H0zM4 16h4v4H4zM8 16h4v4H8zM12 16h4v4h-4zM16 16h4v4h-4zM20 16h4v4h-4zM24 16h4v4h-4zM0 20h4v4H0zM4 20h4v4H4zM8 20h4v4H8zM12 20h4v4h-4zM16 20h4v4h-4zM20 20h4v4h-4zM24 20h4v4h-4zM0 24h4v4H0zM4 24h4v4H4zM8 24h4v4H8zM12 24h4v4h-4zM16 24h4v4h-4zM20 24h4v4h-4zM0 28h4v4H0zM4 28h4v4H4zM8 28h4v4H8zM12 28h4v4h-4zM16 28h4v4h-4zM20 28h4v4h-4zM0 32h4v4H0zM4 32h4v4H4zM8 32h4v4H8zM12 32h4v4h-4zM16 32h4v4h-4zM0 36h4v4H0zM4 36h4v4H4zM8 36h4v4H8zM12 36h4v4h-4zM16 36h4v4h-4zM0 40h4v4H0zM4 40h4v4H4zM8 40h4v4H8zM0 44h4v4H0z\\"\\n\\t\\t/></svg\\n\\t>\\n</nav>\\n\\n<style>nav {\\n    display: flex;\\n    --background: rgba(255, 255, 255, 0.7);\\n}\\n\\na:hover {\\n    color: var(--color-theme-1);\\n}\\n\\nli a {\\n    display: flex;\\n    height: 100%;\\n    align-items: center;\\n    padding: 0 0.5rem;\\n    color: var(--color-text);\\n    font-weight: 700;\\n    font-size: 1.5rem;\\n    text-transform: uppercase;\\n    letter-spacing: 0.1em;\\n    text-decoration: none;\\n    transition: color 0.2s linear;\\n}\\n\\nli[aria-current='page']::before {\\n    --size: 6px;\\n    content: '';\\n    width: 0;\\n    height: 0;\\n    position: absolute;\\n    border: var(--size) solid transparent;\\n    border-top: var(--size) solid var(--color-theme-1);\\n\\n}\\n\\nul {\\n    position: relative;\\n    padding: 0;\\n    margin: 0;\\n    display: flex;\\n    list-style: none;\\n    background: var(--background);\\n    background-size: contain;\\n}\\n\\nul {\\n\\t\\theight: 3em;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t}\\n\\nli {\\n\\t\\tposition: relative;\\n\\t\\theight: 100%;\\n\\t}\\n\\nli[aria-current='page']::before {\\n\\t\\ttop: 0;\\n\\t\\tleft: calc(50% - var(--size));\\n\\t}\\n\\nnav {\\n\\t\\tdisplay: flex;\\n\\t\\t--background: rgba(255, 255, 255, 0.7);\\n\\t}\\n\\nsvg {\\n\\t\\twidth: 2em;\\n\\t\\theight: 3em;\\n\\t\\tdisplay: block;\\n\\t}\\n\\npath {\\n\\t\\tfill: var(--background);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA0BO,iCAAI,CACP,OAAO,CAAE,IAAI,CACb,YAAY,CAAE,wBAClB,CAEA,+BAAC,MAAO,CACJ,KAAK,CAAE,IAAI,eAAe,CAC9B,CAEA,iBAAE,CAAC,gBAAE,CACD,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,CAAC,CAAC,MAAM,CACjB,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,MAAM,CACjB,cAAc,CAAE,SAAS,CACzB,cAAc,CAAE,KAAK,CACrB,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,MAC3B,CAEA,EAAE,CAAC,YAAY,CAAC,MAAM,+BAAC,QAAS,CAC5B,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,MAAM,CAAC,CAAC,KAAK,CAAC,WAAW,CACrC,UAAU,CAAE,IAAI,MAAM,CAAC,CAAC,KAAK,CAAC,IAAI,eAAe,CAErD,CAEA,gCAAG,CACC,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,IAAI,YAAY,CAAC,CAC7B,eAAe,CAAE,OACrB,CAEA,gCAAG,CACD,MAAM,CAAE,GAAG,CACX,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACd,CAED,gCAAG,CACD,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IACT,CAED,EAAE,CAAC,YAAY,CAAC,MAAM,+BAAC,QAAS,CAC9B,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,MAAM,CAAC,CAC7B,CAED,iCAAI,CACF,OAAO,CAAE,IAAI,CACb,YAAY,CAAE,wBACf,CAED,iCAAI,CACF,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,KACV,CAED,kCAAK,CACH,IAAI,CAAE,IAAI,YAAY,CACvB"}`
};
const TopNavComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageList = ["Home", "Contact", "About", "Skills", "Projects"] } = $$props;
  let { hrefList } = $$props;
  let { currentPage } = $$props;
  if ($$props.pageList === void 0 && $$bindings.pageList && pageList !== void 0) $$bindings.pageList(pageList);
  if ($$props.hrefList === void 0 && $$bindings.hrefList && hrefList !== void 0) $$bindings.hrefList(hrefList);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0) $$bindings.currentPage(currentPage);
  $$result.css.add(css$3);
  return `<nav class="svelte-19920hg"><svg width="32" height="48" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" class="svelte-19920hg"><path d="M0 0h4v4H0zM4 0h4v4H4zM8 0h4v4H8zM12 0h4v4h-4zM16 0h4v4h-4zM20 0h4v4h-4zM24 0h4v4h-4zM28 0h4v4h-4zM0 4h4v4H0zM4 4h4v4H4zM8 4h4v4H8zM12 4h4v4h-4zM16 4h4v4h-4zM20 4h4v4h-4zM24 4h4v4h-4zM28 4h4v4h-4zM0 8h4v4H0zM4 8h4v4H4zM8 8h4v4H8zM12 8h4v4h-4zM16 8h4v4h-4zM20 8h4v4h-4zM24 8h4v4h-4zM28 8h4v4h-4zM4 12h4v4H4zM8 12h4v4H8zM12 12h4v4h-4zM16 12h4v4h-4zM20 12h4v4h-4zM24 12h4v4h-4zM28 12h4v4h-4zM4 16h4v4H4zM8 16h4v4H8zM12 16h4v4h-4zM16 16h4v4h-4zM20 16h4v4h-4zM24 16h4v4h-4zM28 16h4v4h-4zM4 20h4v4H4zM8 20h4v4H8zM12 20h4v4h-4zM16 20h4v4h-4zM20 20h4v4h-4zM24 20h4v4h-4zM28 20h4v4h-4zM8 24h4v4H8zM12 24h4v4h-4zM16 24h4v4h-4zM20 24h4v4h-4zM24 24h4v4h-4zM28 24h4v4h-4zM8 28h4v4H8zM12 28h4v4h-4zM16 28h4v4h-4zM20 28h4v4h-4zM24 28h4v4h-4zM28 28h4v4h-4zM12 32h4v4h-4zM16 32h4v4h-4zM20 32h4v4h-4zM24 32h4v4h-4zM28 32h4v4h-4zM12 36h4v4h-4zM16 36h4v4h-4zM20 36h4v4h-4zM24 36h4v4h-4zM28 36h4v4h-4zM20 40h4v4h-4zM24 40h4v4h-4zM28 40h4v4h-4zM28 44h4v4h-4z" class="svelte-19920hg"></path></svg> <ul class="svelte-19920hg">${each(pageList, (pageName, i) => {
    return `<li${add_attribute("aria-current", currentPage === pageName ? "page" : void 0, 0)} class="svelte-19920hg"><a${add_attribute("href", hrefList[i], 0)} class="svelte-19920hg">${escape(pageName)}</a> </li>`;
  })}</ul> <svg width="32" height="48" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" class="svelte-19920hg"><path d="M0 0h4v4H0zM4 0h4v4H4zM8 0h4v4H8zM12 0h4v4h-4zM16 0h4v4h-4zM20 0h4v4h-4zM24 0h4v4h-4zM28 0h4v4h-4zM0 4h4v4H0zM4 4h4v4H4zM8 4h4v4H8zM12 4h4v4h-4zM16 4h4v4h-4zM20 4h4v4h-4zM24 4h4v4h-4zM28 4h4v4h-4zM0 8h4v4H0zM4 8h4v4H4zM8 8h4v4H8zM12 8h4v4h-4zM16 8h4v4h-4zM20 8h4v4h-4zM24 8h4v4h-4zM28 8h4v4h-4zM0 12h4v4H0zM4 12h4v4H4zM8 12h4v4H8zM12 12h4v4h-4zM16 12h4v4h-4zM20 12h4v4h-4zM24 12h4v4h-4zM0 16h4v4H0zM4 16h4v4H4zM8 16h4v4H8zM12 16h4v4h-4zM16 16h4v4h-4zM20 16h4v4h-4zM24 16h4v4h-4zM0 20h4v4H0zM4 20h4v4H4zM8 20h4v4H8zM12 20h4v4h-4zM16 20h4v4h-4zM20 20h4v4h-4zM24 20h4v4h-4zM0 24h4v4H0zM4 24h4v4H4zM8 24h4v4H8zM12 24h4v4h-4zM16 24h4v4h-4zM20 24h4v4h-4zM0 28h4v4H0zM4 28h4v4H4zM8 28h4v4H8zM12 28h4v4h-4zM16 28h4v4h-4zM20 28h4v4h-4zM0 32h4v4H0zM4 32h4v4H4zM8 32h4v4H8zM12 32h4v4h-4zM16 32h4v4h-4zM0 36h4v4H0zM4 36h4v4H4zM8 36h4v4H8zM12 36h4v4h-4zM16 36h4v4h-4zM0 40h4v4H0zM4 40h4v4H4zM8 40h4v4H8zM0 44h4v4H0z" class="svelte-19920hg"></path></svg> </nav>`;
});
const css$2 = {
  code: "nav.svelte-1r6gomy.svelte-1r6gomy{display:flex;--background:rgba(255, 255, 255, 0.7)}a.svelte-1r6gomy.svelte-1r6gomy:hover{color:var(--color-theme-1)}li.svelte-1r6gomy a.svelte-1r6gomy{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:1.5rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}li[aria-current='page'].svelte-1r6gomy.svelte-1r6gomy::before{--size:6px;content:'';width:0;height:0;position:absolute;border:var(--size) solid transparent;border-top:var(--size) solid var(--color-theme-1)}ul.svelte-1r6gomy.svelte-1r6gomy{position:relative;padding:0;margin:0;display:flex;list-style:none;background:var(--background);background-size:contain}ul.svelte-1r6gomy.svelte-1r6gomy{align-items:start;flex-direction:column}li.svelte-1r6gomy.svelte-1r6gomy{margin-left:10px}li[aria-current='page'].svelte-1r6gomy.svelte-1r6gomy::before{margin-top:var(--size);rotate:270deg;left:0}nav.svelte-1r6gomy.svelte-1r6gomy{display:flex;--background:rgba(255, 255, 255, 0.7)}",
  map: `{"version":3,"file":"SideNavComponent.svelte","sources":["SideNavComponent.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let pageList = [\\"Home\\", \\"Contact\\", \\"About\\", \\"Skills\\", \\"Projects\\"];\\nexport let hrefList;\\nexport let currentPage;\\n<\/script>\\n\\n<nav>\\n\\t<ul>\\n\\t\\t{#each pageList as pageName, i}\\n\\t\\t\\t<li aria-current={currentPage === pageName ? 'page' : undefined}>\\n\\t\\t\\t\\t<a href={hrefList[i]}>{pageName}</a>\\n\\t\\t\\t</li>\\n\\t\\t{/each}\\n\\t</ul>\\n</nav>\\n\\n<style>nav {\\n    display: flex;\\n    --background: rgba(255, 255, 255, 0.7);\\n}\\n\\na:hover {\\n    color: var(--color-theme-1);\\n}\\n\\nli a {\\n    display: flex;\\n    height: 100%;\\n    align-items: center;\\n    padding: 0 0.5rem;\\n    color: var(--color-text);\\n    font-weight: 700;\\n    font-size: 1.5rem;\\n    text-transform: uppercase;\\n    letter-spacing: 0.1em;\\n    text-decoration: none;\\n    transition: color 0.2s linear;\\n}\\n\\nli[aria-current='page']::before {\\n    --size: 6px;\\n    content: '';\\n    width: 0;\\n    height: 0;\\n    position: absolute;\\n    border: var(--size) solid transparent;\\n    border-top: var(--size) solid var(--color-theme-1);\\n\\n}\\n\\nul {\\n    position: relative;\\n    padding: 0;\\n    margin: 0;\\n    display: flex;\\n    list-style: none;\\n    background: var(--background);\\n    background-size: contain;\\n}\\n\\nul {\\n\\t\\talign-items: start;\\n\\t\\tflex-direction: column;\\n\\t}\\n\\nli {\\n\\t\\tmargin-left: 10px;\\n\\t}\\n\\nli[aria-current='page']::before {\\n\\t\\tmargin-top: var(--size);\\n\\t\\trotate: 270deg;\\n\\t\\tleft: 0;\\n\\t}\\n\\nnav {\\n\\t\\tdisplay: flex;\\n\\t\\t--background: rgba(255, 255, 255, 0.7);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAeO,iCAAI,CACP,OAAO,CAAE,IAAI,CACb,YAAY,CAAE,wBAClB,CAEA,+BAAC,MAAO,CACJ,KAAK,CAAE,IAAI,eAAe,CAC9B,CAEA,iBAAE,CAAC,gBAAE,CACD,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,CAAC,CAAC,MAAM,CACjB,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,MAAM,CACjB,cAAc,CAAE,SAAS,CACzB,cAAc,CAAE,KAAK,CACrB,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,MAC3B,CAEA,EAAE,CAAC,YAAY,CAAC,MAAM,+BAAC,QAAS,CAC5B,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,MAAM,CAAC,CAAC,KAAK,CAAC,WAAW,CACrC,UAAU,CAAE,IAAI,MAAM,CAAC,CAAC,KAAK,CAAC,IAAI,eAAe,CAErD,CAEA,gCAAG,CACC,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,IAAI,YAAY,CAAC,CAC7B,eAAe,CAAE,OACrB,CAEA,gCAAG,CACD,WAAW,CAAE,KAAK,CAClB,cAAc,CAAE,MACjB,CAED,gCAAG,CACD,WAAW,CAAE,IACd,CAED,EAAE,CAAC,YAAY,CAAC,MAAM,+BAAC,QAAS,CAC9B,UAAU,CAAE,IAAI,MAAM,CAAC,CACvB,MAAM,CAAE,MAAM,CACd,IAAI,CAAE,CACP,CAED,iCAAI,CACF,OAAO,CAAE,IAAI,CACb,YAAY,CAAE,wBACf"}`
};
const SideNavComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageList = ["Home", "Contact", "About", "Skills", "Projects"] } = $$props;
  let { hrefList } = $$props;
  let { currentPage } = $$props;
  if ($$props.pageList === void 0 && $$bindings.pageList && pageList !== void 0) $$bindings.pageList(pageList);
  if ($$props.hrefList === void 0 && $$bindings.hrefList && hrefList !== void 0) $$bindings.hrefList(hrefList);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0) $$bindings.currentPage(currentPage);
  $$result.css.add(css$2);
  return `<nav class="svelte-1r6gomy"><ul class="svelte-1r6gomy">${each(pageList, (pageName, i) => {
    return `<li${add_attribute("aria-current", currentPage === pageName ? "page" : void 0, 0)} class="svelte-1r6gomy"><a${add_attribute("href", hrefList[i], 0)} class="svelte-1r6gomy">${escape(pageName)}</a> </li>`;
  })}</ul> </nav>`;
});
const css$1 = {
  code: "header.svelte-1xgseh1.svelte-1xgseh1{display:flex;justify-content:space-between;position:sticky;top:0}.corner.svelte-1xgseh1.svelte-1xgseh1{width:3em;height:3em}.corner.svelte-1xgseh1 a.svelte-1xgseh1,.left.svelte-1xgseh1 img.svelte-1xgseh1{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.svelte-1xgseh1 img.svelte-1xgseh1{width:2.5em;height:2.5em;object-fit:contain}.left.svelte-1xgseh1 img.svelte-1xgseh1{display:flex;align-items:center;justify-content:center}.side-nav.svelte-1xgseh1.svelte-1xgseh1{max-height:150px;min-width:fit-content;overflow:hidden;transition:max-height 0.3s ease-in-out}.hidden.svelte-1xgseh1.svelte-1xgseh1{max-height:0 !important;transition:max-height 0.3s ease-in-out}.left.svelte-1xgseh1.svelte-1xgseh1{left:0}.side-nav.svelte-1xgseh1.svelte-1xgseh1{display:none}.small-screen-visibility.svelte-1xgseh1.svelte-1xgseh1{display:none;background-color:rgba(255, 255, 255, 0.7);border:none}@media(max-width: 720px){.top-nav.svelte-1xgseh1.svelte-1xgseh1{display:none}.side-nav.svelte-1xgseh1.svelte-1xgseh1{display:block}.small-screen-visibility.svelte-1xgseh1.svelte-1xgseh1{display:block}}",
  map: `{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script>\\n\\timport { page } from '$app/stores';\\n\\timport github from '$lib/images/github.svg';\\n\\timport menuIcon from '$lib/images/menu.svg';\\n\\timport { currentSectionString } from '$lib/stores/sectionStore';\\n\\timport TopNavComponent from './TopNavComponent.svelte';\\n\\timport SideNavComponent from './SideNavComponent.svelte';\\n\\timport { onMount } from 'svelte';\\n    import { base } from '$app/paths';\\n\\n\\tconst pageList = ['Home', 'Contact', 'About', 'Skills', 'Projects'];\\n\\tconst hrefList = [\`\${base}/\`, \`\${base}/contact\`, \`\${base}/#about\`, \`\${base}/#skills\`, \`\${base}/#projects\`];\\n\\t$: currentPage =\\n\\t\\t$page.url.pathname === \`\${base}/contact\`\\n\\t\\t\\t? 'Contact'\\n\\t\\t\\t: $currentSectionString === 'About'\\n\\t\\t\\t\\t? 'About'\\n\\t\\t\\t\\t: $currentSectionString === 'Skills'\\n\\t\\t\\t\\t\\t? 'Skills'\\n\\t\\t\\t\\t\\t: $currentSectionString === 'Projects'\\n\\t\\t\\t\\t\\t\\t? 'Projects'\\n\\t\\t\\t\\t\\t\\t: 'Home';\\n\\n\\tlet sideNavVisible = false;\\n\\n\\tonMount(() => {\\n\\t\\twindow.addEventListener('resize', () => {\\n\\t\\t\\tif (window.matchMedia('(min-width: 721px)').matches) {\\n\\t\\t\\t\\tsideNavVisible = false;\\n\\t\\t\\t}\\n\\t\\t});\\n\\t});\\n<\/script>\\n\\n<header>\\n\\t<!-- to keep the nav bar centered: -->\\n\\t<div class=\\"corner left\\">\\n\\t\\t<button\\n\\t\\t\\tclass=\\"small-screen-visibility\\"\\n\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\tsideNavVisible = !sideNavVisible;\\n\\t\\t\\t}}\\n\\t\\t>\\n\\t\\t\\t<img src={menuIcon} alt=\\"menu\\" />\\n\\t\\t</button>\\n\\t\\t<div class=\\"side-nav\\" class:hidden={!sideNavVisible}>\\n\\t\\t\\t<SideNavComponent {pageList} {hrefList} bind:currentPage />\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<div class=\\"top-nav\\">\\n\\t\\t<TopNavComponent {pageList} {hrefList} bind:currentPage />\\n\\t</div>\\n\\n\\t<div class=\\"corner\\">\\n\\t\\t<a href=\\"https://github.com/sidney-prytherch/Profile-Site\\">\\n\\t\\t\\t<img src={github} alt=\\"GitHub\\" />\\n\\t\\t</a>\\n\\t</div>\\n</header>\\n\\n<style>\\n\\theader {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\tposition: sticky;\\n\\t\\ttop: 0;\\n\\t}\\n\\n\\t.corner {\\n\\t\\twidth: 3em;\\n\\t\\theight: 3em;\\n\\t}\\n\\n\\t.corner a,\\n\\t.left img {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t}\\n\\n\\t.corner img {\\n\\t\\twidth: 2.5em;\\n\\t\\theight: 2.5em;\\n\\t\\tobject-fit: contain;\\n\\t}\\n\\n\\t.left img {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t}\\n\\n\\t.side-nav {\\n\\t\\tmax-height: 150px;\\n\\t\\tmin-width: fit-content;\\n\\t\\toverflow: hidden;\\n\\t\\ttransition: max-height 0.3s ease-in-out;\\n\\t}\\n\\n\\t.hidden {\\n\\t\\tmax-height: 0 !important;\\n\\t\\ttransition: max-height 0.3s ease-in-out;\\n\\t}\\n\\n\\t.left {\\n\\t\\tleft: 0;\\n\\t}\\n\\n\\t.side-nav {\\n\\t\\tdisplay: none;\\n\\t}\\n\\n\\t.small-screen-visibility {\\n\\t\\tdisplay: none;\\n\\t\\tbackground-color: rgba(255, 255, 255, 0.7);\\n\\t\\tborder: none;\\n\\t}\\n\\n\\t/* when screen is large: */\\n\\t@media (max-width: 720px) {\\n\\t\\t.top-nav {\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\n\\t\\t.side-nav {\\n\\t\\t\\tdisplay: block;\\n\\t\\t}\\n\\n\\t\\t.small-screen-visibility {\\n\\t\\t\\tdisplay: block;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA8DC,oCAAO,CACN,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,CACN,CAEA,qCAAQ,CACP,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GACT,CAEA,sBAAO,CAAC,gBAAC,CACT,oBAAK,CAAC,kBAAI,CACT,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACT,CAEA,sBAAO,CAAC,kBAAI,CACX,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,OACb,CAEA,oBAAK,CAAC,kBAAI,CACT,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAClB,CAEA,uCAAU,CACT,UAAU,CAAE,KAAK,CACjB,SAAS,CAAE,WAAW,CACtB,QAAQ,CAAE,MAAM,CAChB,UAAU,CAAE,UAAU,CAAC,IAAI,CAAC,WAC7B,CAEA,qCAAQ,CACP,UAAU,CAAE,CAAC,CAAC,UAAU,CACxB,UAAU,CAAE,UAAU,CAAC,IAAI,CAAC,WAC7B,CAEA,mCAAM,CACL,IAAI,CAAE,CACP,CAEA,uCAAU,CACT,OAAO,CAAE,IACV,CAEA,sDAAyB,CACxB,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,MAAM,CAAE,IACT,CAGA,MAAO,YAAY,KAAK,CAAE,CACzB,sCAAS,CACR,OAAO,CAAE,IACV,CAEA,uCAAU,CACT,OAAO,CAAE,KACV,CAEA,sDAAyB,CACxB,OAAO,CAAE,KACV,CACD"}`
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentPage;
  let $currentSectionString, $$unsubscribe_currentSectionString;
  let $page, $$unsubscribe_page;
  $$unsubscribe_currentSectionString = subscribe(currentSectionString, (value) => $currentSectionString = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const pageList = ["Home", "Contact", "About", "Skills", "Projects"];
  const hrefList = [
    `${base}/`,
    `${base}/contact`,
    `${base}/#about`,
    `${base}/#skills`,
    `${base}/#projects`
  ];
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    currentPage = $page.url.pathname === `${base}/contact` ? "Contact" : $currentSectionString === "About" ? "About" : $currentSectionString === "Skills" ? "Skills" : $currentSectionString === "Projects" ? "Projects" : "Home";
    $$rendered = `<header class="svelte-1xgseh1"> <div class="corner left svelte-1xgseh1"><button class="small-screen-visibility svelte-1xgseh1" data-svelte-h="svelte-10n7ycd"><img${add_attribute("src", menuIcon, 0)} alt="menu" class="svelte-1xgseh1"></button> <div class="${["side-nav svelte-1xgseh1", "hidden"].join(" ").trim()}">${validate_component(SideNavComponent, "SideNavComponent").$$render(
      $$result,
      { pageList, hrefList, currentPage },
      {
        currentPage: ($$value) => {
          currentPage = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="top-nav svelte-1xgseh1">${validate_component(TopNavComponent, "TopNavComponent").$$render(
      $$result,
      { pageList, hrefList, currentPage },
      {
        currentPage: ($$value) => {
          currentPage = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="corner svelte-1xgseh1" data-svelte-h="svelte-dqabwk"><a href="https://github.com/sidney-prytherch/Profile-Site" class="svelte-1xgseh1"><img${add_attribute("src", github, 0)} alt="GitHub" class="svelte-1xgseh1"></a></div> </header>`;
  } while (!$$settled);
  $$unsubscribe_currentSectionString();
  $$unsubscribe_page();
  return $$rendered;
});
const css = {
  code: ".app.svelte-tsf3oq{display:flex;flex-direction:column;min-height:100vh}main.svelte-tsf3oq{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:84rem;margin:0 auto;box-sizing:border-box}footer.svelte-tsf3oq{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}@media(min-width: 480px){footer.svelte-tsf3oq{padding:12px 0}}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n\\timport Header from './components/header/Header.svelte';\\n\\timport '../app.css';\\n<\/script>\\n\\n<div class=\\"app\\">\\n\\t<Header />\\n\\n\\t<main>\\n\\t\\t<slot />\\n\\t</main>\\n\\n\\t<footer>\\n\\t\\t<p>This is the footer - for now</p>\\n\\t</footer>\\n</div>\\n\\n<style>\\n\\t.app {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tmin-height: 100vh;\\n\\t}\\n\\n\\tmain {\\n\\t\\tflex: 1;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tpadding: 1rem;\\n\\t\\twidth: 100%;\\n\\t\\tmax-width: 84rem;\\n\\t\\tmargin: 0 auto;\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n\\n\\tfooter {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 12px;\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\tfooter {\\n\\t\\t\\tpadding: 12px 0;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAkBC,kBAAK,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,UAAU,CAAE,KACb,CAEA,kBAAK,CACJ,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,UACb,CAEA,oBAAO,CACN,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IACV,CAEA,MAAO,YAAY,KAAK,CAAE,CACzB,oBAAO,CACN,OAAO,CAAE,IAAI,CAAC,CACf,CACD"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-tsf3oq">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-tsf3oq">${slots.default ? slots.default({}) : ``}</main> <footer class="svelte-tsf3oq" data-svelte-h="svelte-1k5rm1u"><p>This is the footer - for now</p></footer> </div>`;
});
export {
  Layout as default
};
