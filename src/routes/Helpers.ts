
// used to check which section is being viewed for nav
// element shouldn't be considered the main in viewport if it has less than ~50px visible
const elementIsMainInViewport = (el: HTMLElement) => {
    return el.getBoundingClientRect().bottom - 50 > 0;
}

export { elementIsMainInViewport };