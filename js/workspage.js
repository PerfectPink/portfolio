let template = document.getElementById('work-card-temp');
let worksSection = document.getElementById('works-page-section');
let wallpaperSite = {
    "title": "Wallpapers",
    "description": "learning project site with wallpapers collection with different genres",
    "year": "2022",
    "image": "images/Preview/workWallpaper.png",
    "stack": ["HTML", " CSS"],
    "link": ["https://perfectpink.github.io/NordWallpapers/"]
}
let tmntSite = {
    "title": "TMNT",
    "description": "Site with presentation of heroes from cartoon Teen Mutant Ninja Turtles ",
    "year": "2022",
    "image": "images/Preview/workTMNT.png",
    "stack": ["HTML", " CSS"],
    "link": ["https://perfectpink.github.io/NordTMNT/"]};
let coffeSite = {
    "title": "Coffe site",
    "description": "Site with a little bit information about coffee. Target of project learn how to use Bootstrap",
    "year": "2022",
    "image": "images/Preview/workCoffee.png",
    "stack": ["HTML", " CSS"," Bootstrap"],
    "link": ["https://perfectpink.github.io/NordCoffe/"]};
let squareSite = {
    "title": "Blue Square site",
    "description": "site where you can change blue square. Target of project was learn basic js.",
    "year": "2022",
    "image": "images/Preview/workSquare.png",
    "stack": ["HTML", " CSS", "JS"],
    "link": ["https://perfectpink.github.io/RedSquare/"]
};
let anime4realSite = {
    "title": "Anime site",
    "description": "This site can show you some anime title with detailed information about they, target of project was make site with pages and learn how to use API's",
    "year": "2022",
    "image": "images/Preview/workAnime.png",
    "stack": ["HTML", " CSS", "JS"],
    "link": ["https://perfectpink.github.io/Anime4real/"]
};
let Taskboard = {
    "title": "Taskboard",
    "description": "Project website where you can create and track your tasks",
    "year": "2022",
    "image": "images/Preview/workTaskboard.png",
    "stack": ["HTML", " CSS", "JS"],
    "link": ["https://perfectpink.github.io/Taskboard/"]
};

function clearpage() {
    worksSection.innerHTML = " ";
}

function renderWallpaperSite() {
    clearpage();
    worksSection.innerHTML += template.innerHTML.replace('---title', wallpaperSite['title'])
        .replace('---description', wallpaperSite['description'])
        .replace('---year', wallpaperSite['year'])
        .replace('---stack', wallpaperSite['stack'])
        .replace('---link', wallpaperSite['link'])
        .replace('---imgSrc', wallpaperSite['image'])
}
function renderTMNTSite() {
    clearpage();
    worksSection.innerHTML += template.innerHTML.replace('---title', tmntSite['title'])
        .replace('---description', tmntSite['description'])
        .replace('---year', tmntSite['year'])
        .replace('---stack', tmntSite['stack'])
        .replace('---link', tmntSite['link'])
        .replace('---imgSrc', tmntSite['image'])
}
function renderCoffeeSite() {
    clearpage();
    worksSection.innerHTML += template.innerHTML.replace('---title', coffeSite['title'])
        .replace('---description', coffeSite['description'])
        .replace('---year', coffeSite['year'])
        .replace('---stack', coffeSite['stack'])
        .replace('---link', coffeSite['link'])
        .replace('---imgSrc', coffeSite['image'])
}
function renderSquareSite() {
    clearpage();
    worksSection.innerHTML += template.innerHTML.replace('---title', squareSite['title'])
        .replace('---description', squareSite['description'])
        .replace('---year', squareSite['year'])
        .replace('---stack', squareSite['stack'])
        .replace('---link', squareSite['link'])
        .replace('---imgSrc', squareSite['image'])
}
function renderAnimeSite() {
    clearpage();
    worksSection.innerHTML += template.innerHTML.replace('---title', anime4realSite['title'])
        .replace('---description', anime4realSite['description'])
        .replace('---year', anime4realSite['year'])
        .replace('---stack', anime4realSite['stack'])
        .replace('---link', anime4realSite['link'])
        .replace('---imgSrc', anime4realSite['image'])
}
function renderTaskboard() {
    clearpage();
    worksSection.innerHTML += template.innerHTML.replace('---title', Taskboard['title'])
        .replace('---description', Taskboard['description'])
        .replace('---year', Taskboard['year'])
        .replace('---stack', Taskboard['stack'])
        .replace('---link', Taskboard['link'])
        .replace('---imgSrc', Taskboard['image'])
}
