export enum ProjectTagCodes {
    ALLPROJECTS = "ALLPROJECTS",
    WEB = "WEB",
    ANDROIDAPP = "ANDROIDAPP",
    DESKTOPAPP = "DESKTOPAPP",
    SVELTE = "SVELTE",
    HTML = "HTML",
    CSS = "CSS",
    JAVASCRIPT = "JAVASCRIPT",
    TYPESCRIPT = "TYPESCRIPT",
    JAVA = "JAVA",
    KOTLIN = "KOTLIN",
    SQLITE = "SQLITE"
}

export const TAG_CODE_TO_NAME_MAP = new Map(
    [
        ["ALLPROJECTS", "All Projects"],
        ["WEB", "Web"],
        ["ANDROIDAPP", "Android App"],
        ["DESKTOPAPP", "Desktop App"],
        ["SVELTE", "Svelte"],
        ["HTML", "HTML"],
        ["CSS", "CSS"],
        ["JAVASCRIPT", "JavaScript"],
        ["TYPESCRIPT", "TypeScript"],
        ["JAVA", "Java"],
        ["KOTLIN", "Kotlin"],
        ["SQLITE", "SQLite"],
    ]);
