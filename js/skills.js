const skillsContainer = document.getElementById("skills-container");
const urlSkills = "https://raw.githubusercontent.com/nicolassequeira11/APIS/main/portafolio-skills.json";

fetch(urlSkills)
  .then((response) => response.json())
  .then((data) => {
    let images = data.images;

    images.forEach(image => {
      skillsContainer.innerHTML += 
      `
      <div class="col-6 col-sm-4 col-md-3 col-lg-2 content-img-skills">
        <div class="img-content ${image.color}">
          <img src="${image.img}" alt="html" class="col-12 img-skills">
        </div>
      </div>
      `;
    });
  })