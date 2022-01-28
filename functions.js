function createProject(title,imgUrl,id) {
    return `
    <div class="project-card">
        <div class="project-info">
            <p class="project-category">check the details</p>
            <strong class="project-title">
                <span>${title}</span>
                <a href="/project.html?id=${id}" class="more-details">More Details</a>
            </strong>
        </div>
        <div class="project-image">
            <img src="${imgUrl}">
        </div>
    </div>
    `
}
const projectsContentElement=document.getElementById("projectsContent")
function renderProjects() {
    let innerHtml=""
    for(let project of projectsDetails){
        let {id , title, imgUrl}=project
        innerHtml=innerHtml+createProject(title, imgUrl , id)
    }
    projectsContentElement.innerHTML=innerHtml
}
// renderProjects()
// main header
const mainHeaderElement=document.getElementById("mainHeader")
function renderHeader(nav){
    let innerHTML=`
    <a href="/index.html" class="logo">AJ</a>
    <nav class="navigation">
        <a href="#services">Services</a>
        <a href="https://www.google.com/">Projects</a>
        <a href="/contact-us.html">Contact</a>
    </nav>
    `
    mainHeaderElement.innerHTML=innerHTML
}
function renderProjectArticle() {
    let articleId=new URLSearchParams(location.search).get("id")
    let project=projectsDetails.find(obj=>obj.id==articleId)
    if(typeof project=="object"){
        let {title, imgUrl}=project
        document.getElementById("projectArticle").innerHTML=createProject(title, imgUrl)
    }
} 