const certificatesContainer = document.getElementById("certificates-container");
const urlCertificates = "https://raw.githubusercontent.com/nicolassequeira11/APIS/main/portafolio-certificates.json";

fetch(urlCertificates)
  .then((response) => response.json())
  .then((data) => {
    let certificates = data.certificates;

    certificates.forEach((certificate) => {
      certificatesContainer.innerHTML += `
      <div class="col-12 col-md-6 col-xl-4 content-certificates">
        <button class="close-button rounded-circle" id="close-${certificate.id}" style="display: none;" onclick="closeImage(this)">
          <i class="bi bi-x-lg"></i>
        </button>
        <img src="${certificate.img}" class="col-12 img-certificates" data-id="${certificate.id}" alt="" onclick="applyStyle(this)">
      </div>
      `;
    });
  });

// Función para aplicar el estilo a la imagen clickeada y mostrar el botón de cierre
function applyStyle(image) {
  const images = certificatesContainer.querySelectorAll(".img-certificates");
  images.forEach((img) => {
    img.classList.remove("selected");
  });

  image.classList.add("selected");

  // Encuentra el botón de cierre y muéstralo
  const closeBtnId = `close-${image.getAttribute("data-id")}`;
  const closeButton = document.getElementById(closeBtnId);
  closeButton.style.display = "block";
}

// Función para cerrar la imagen seleccionada
function closeImage(button) {
  // Encuentra el div padre del botón
  const parentDiv = button.parentNode;
  
  // Encuentra la imagen dentro del div
  const image = parentDiv.querySelector(".img-certificates");
  
  // Desactiva el estilo seleccionado
  image.classList.remove("selected");
  
  // Oculta el botón de cierre
  button.style.display = "none";
}
