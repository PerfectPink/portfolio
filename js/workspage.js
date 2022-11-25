let template = document.getElementById('work-card-temp');
let worksSection = document.getElementById('works-page-section');
let wallpaperSite = {
    "title": "Wallpapers",
    "description": "learning project site with wallpapers collection with different genres",
    "year": "2022",
    "image": "./images/Preview/workWallpaper.png",
    "stack": ["HTML", " CSS"],
    "link": ["https://perfectpink.github.io/NordWallpapers/"]
}
let tmntSite = {};
let coffeSite = {};
let squareSite = {};
let anime4realSite = {};

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

