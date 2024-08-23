export enum ProjectTagCodes {
    ALLPROJECTS = "ALLPROJECTS",
    WEB = "WEB",
    ANDROID = "ANDROID",
    DESKTOPAPP = "DESKTOPAPP",
    SVELTE = "SVELTE",
    HTML = "HTML",
    CSS = "CSS",
    JAVASCRIPT = "JAVASCRIPT",
    TYPESCRIPT = "TYPESCRIPT",
    JAVA = "JAVA"
}

export const TAG_CODE_TO_NAME_MAP = new Map(
    [
        ["ALLPROJECTS", "All Projects"],
        ["WEB", "Web"],
        ["ANDROID", "Android"],
        ["DESKTOPAPP", "Desktop App"],
        ["SVELTE", "Svelte"],
        ["HTML", "HTML"],
        ["CSS", "CSS"],
        ["JAVASCRIPT", "JavaScript"],
        ["TYPESCRIPT", "TypeScript"],
        ["JAVA", "Java"]
    ]);
