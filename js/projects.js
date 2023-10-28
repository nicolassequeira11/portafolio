const projectsContainer = document.getElementById("projects-container");
const urlProjects = "https://raw.githubusercontent.com/nicolassequeira11/APIS/main/portafolio-projects.json";

fetch(urlProjects)
  .then((response) => response.json())
  .then((data) => {
    let projects = data.projects;
    projects.reverse();

    projects.forEach((project) => {
      projectsContainer.innerHTML += `
      <div class="col-12 col-sm-10 col-lg-4 content-img-projects">
        <div class="content-img">
            <img src="${project.img}" class="col-12 img-projects" alt="">
        </div>
        <div class="content-hover">
          <p class="col-8 projects-title">${project.title}</p>
          <div class="d-flex col-10 col-lg-8 m-auto">
            <button class="col-7 col-lg-9 projects-button">
              <a href="${project.url}" class="text-white" target="_blank">Visitar Sitio Web
                <i class="fa-solid fa-chevron-right fa-xs" style="color: #ffffff;"></i>
              </a>
            </button>
            <button class="col-3 col-lg-2 projects-button">
                <a href="${project.github}" class="text-white" target="_blank">
                <i class="fa-brands fa-github fa-lg" style="color: #ffffff;"></i>
                </a>
            </button>
          </div>
            
          <div class="projects-skills" id="skills-project">
            ${addSkillsProject(project.skills)}
          </div>
        </div>
      </div>
      `;
    });
  });

  const skillsProject = document.getElementById("skills-project");

  function addSkillsProject(array){
    let container = "";

    for(let i = 0; i < array.length; i++){
      container += `<img src="${array[i]}" class="col-2" alt="">`;
    }
    
    return container;
  }