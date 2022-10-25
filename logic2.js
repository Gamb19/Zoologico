let zooIds = {
  inicioForm: "",
  zoneId: "",
  specieId: "",
  idAnimals: "",
  commentsIds: "",
  elementValidation: "",
  search: false,
};
let arrayMenssage = [];
let arrayAreas = [];
let arraySpecie = [];
let arrayAnimal = [];
let arrayRespuestas = [];
//Ids de todas las areas
function zoneId() {
  let lastId = localStorage.getItem("zoneId") || "-1";
  let newId = JSON.parse(lastId) + 1;
  localStorage.setItem("zoneId", JSON.stringify(newId));
  return newId;
}
function specieId() {
  let lastId = localStorage.getItem("specieId") || "-1";
  let newId = JSON.parse(lastId) + 1;
  localStorage.setItem("specieId", JSON.stringify(newId));
  return newId;
}
function animalsId() {
  let lastId = localStorage.getItem("animalsId") || "-1";
  let newId = JSON.parse(lastId) + 1;
  localStorage.setItem("animalsId", JSON.stringify(newId));
  return newId;
}
function commentsIds() {
  let lastId = localStorage.getItem("commentsIds") || "-1";
  let newId = JSON.parse(lastId) + 1;
  localStorage.setItem("commentsIds", JSON.stringify(newId));
  return newId;
}
function Events() {
  let area = document.getElementById("newArea");
  area.addEventListener("click", areaForm);
  dataLocalStorage();
  areaSelects();
}
//Fin

// Data de todo el local
function dataLocalStorage() {
  arraySpecie = JSON.parse(localStorage.getItem("Especies"));
  arrayAnimal = JSON.parse(localStorage.getItem("Animales"));
  arrayMenssage = JSON.parse(localStorage.getItem("Comentarios"));
  arrayRespuestas = JSON.parse(localStorage.getItem("ResponseComment"));
  if (arraySpecie === null) {
    arraySpecie = [];
  }
  if (arrayAnimal === null) {
    arrayAnimal = [];
  }
  if (arrayMenssage === null) {
    arrayMenssage = [];
  }
  if (arrayRespuestas === null) {
    arrayRespuestas = [];
  }
}
//Fin

//Funcion del area
function areaForm() {
  let sectSearch = document.getElementById("verBusqueda");
  sectSearch.className = "d-none";
  zooIds.inicioForm = "areaForm";

  let sectionEspe = document.getElementById("sectVerEspecies");
  sectionEspe.className = "d-none";
  sectionComment = document.getElementById("verComentarios");
  sectionComment.className = "d-none";

  let sectForm = document.getElementById("sectForm");
  sectForm.className = "sect-form";
  let titleForm = document.getElementById("titleForm");
  titleForm.textContent = "Create the new area for the Zoo";

  formulario.innerHTML = "";

  let divInputArea = document.createElement("div");
  divInputArea.className = "form-floating mb-3";
  let inputArea = document.createElement("input");
  inputArea.type = "text";
  inputArea.className = "form-control rounded-3";
  inputArea.id = "floatingInput";
  inputArea.placeholder = "Area's name";
  let labelArea = document.createElement("label");
  labelArea.textContent = "Area's Name"
  labelArea.setAttribute("for", "floatingInput");

  let btnSubmit = document.createElement("button");
  btnSubmit.type = "submit";
  btnSubmit.textContent = "Submit";
  btnSubmit.className = "w-100 mb-2 btn btn-lg rounded-3 btn-primary";

  formulario.insertAdjacentElement("beforeend", divInputArea);
  divInputArea.insertAdjacentElement("beforeend", inputArea);
  divInputArea.insertAdjacentElement("beforeend", labelArea);

  formulario.insertAdjacentElement("beforeend", btnSubmit);
}
function areaSelects() {
  arrayAreas = JSON.parse(localStorage.getItem("Zoo's Area"));
  let sectComment = document.getElementById("verComentarios");
  if (arrayAreas === null) {
    arrayAreas = [];
  } else {
    let listaAreas = document.getElementById("listaAreas");
    listaAreas.innerHTML = "";
    arrayAreas.forEach((element) => {
      let divSpecie = document.createElement("li");
      divSpecie.className = "btn-group dropend separadoBtn";
      let btnArea = document.createElement("button");
      btnArea.className = "btn btn-secondary NameSpecie divArea";
      btnArea.textContent = element.name;
      btnArea.addEventListener("click", (e) => {
        speciesArea(e);
        zooIds.zoneId = element.Id;
      });
      let btnSpecies = document.createElement("button");
      btnSpecies.className =
        "btn btn-secondary dropdown-toggle dropdown-toggle-split especiesDiv";
      btnSpecies.addEventListener("click", (e) => {
        speciesList(element.Id);
        sectComment.className = "d-none";
      });
      let spanToggle = document.createElement("span");
      spanToggle.className = "visually-hidden";
      spanToggle.textContent = "Toggle Dropend";

      listaAreas.insertAdjacentElement("beforeend", divSpecie);
      divSpecie.insertAdjacentElement("beforeend", btnArea);
      divSpecie.insertAdjacentElement("beforeend", btnSpecies);
      btnSpecies.insertAdjacentElement("beforeend", spanToggle);
    });
  }
}
function speciesArea(e) {
  zooIds.inicioForm = "formSpecie";

  let sectSearch = document.getElementById("verBusqueda");
  sectSearch.className = "d-none";
  let sectionEspe = document.getElementById("sectVerEspecies");
  sectionEspe.className = "d-none";

  let sectForm = document.getElementById("sectForm");
  sectForm.className = "sect-form";
  let titleForm = document.getElementById("titleForm");
  titleForm.textContent = `Create the new specie for ${e.target.textContent}'s zone`;

  formulario.innerHTML = "";
  formulario.innerHTML += `
        <form class="" id="formulario">
            <div class="form-floating mb-3">
                <input type="text" class="form-control rounded-3" id="floatingInput" placeholder="Species Name">
                <label for="floatingInput">Species Name</label>
            </div>
            <button type="submit" class="w-100 mb-2 btn btn-lg rounded-3 btn-primary">Submit</button>
        </form>>
    `;
}
function speciesList(id) {
  arraySpecie = JSON.parse(localStorage.getItem("Especies"));
  let sectForm = document.getElementById("sectForm");
  sectForm.className = "d-none";
  if (arraySpecie === null) {
    arraySpecie = [];
  } else {
    let section = document.getElementById("especieAside");
    section.innerHTML = "";
    let divContentSpecie = document.createElement("div");
    let titleEspecie = document.createElement("h2");
    titleEspecie.textContent = "Species";
    titleEspecie.className = "whiteColorTitles text-center";
    section.insertAdjacentElement("beforeend", divContentSpecie);
    divContentSpecie.insertAdjacentElement("beforeend", titleEspecie);

    arraySpecie.forEach((element) => {
      if (id === element.zoneId) {
        let divSpecie = document.createElement("div");
        divSpecie.className = "btn-group dropend btnSpecies separadoBtn";
        let divNameSpecie = document.createElement("div");
        divNameSpecie.className = "divNameSpecie btnSpecies";
        divNameSpecie.textContent = element.name;
        let btnVerAnimal = document.createElement("button");
        btnVerAnimal.className =
          "btn btn-secondary dropdown-toggle dropdown-toggle-split addSee";
        btnVerAnimal.addEventListener("click", (e) => {
          listaAnimales(element.Id);
        });
        let spanToggle = document.createElement("span");
        spanToggle.className = "visually-hidden";
        spanToggle.textContent = "Toggle Dropend";
        let btnAnimal = document.createElement("button");
        btnAnimal.className = "btn btn-secondary dropdown-toggle-split addSee";
        btnAnimal.textContent = "+";
        btnAnimal.addEventListener("click", (e) => {
          animalForm(e);
          zooIds.specieId = element.Id;
        });

        divContentSpecie.insertAdjacentElement("beforeend", divSpecie);
        divSpecie.insertAdjacentElement("beforeend", divNameSpecie);
        divSpecie.insertAdjacentElement("beforeend", btnAnimal);
        divSpecie.insertAdjacentElement("beforeend", btnVerAnimal);
        btnVerAnimal.insertAdjacentElement("beforeend", spanToggle);
      }
    });
  }
}
function animalForm(e) {
  zooIds.inicioForm = "animalForm";

  let sectSearch = document.getElementById("verBusqueda");
  sectSearch.className = "d-none";
  let sectRespComment = document.getElementById("verComentarios");
  sectRespComment.className = "d-none";
  let sectForm = document.getElementById("sectForm");
  sectForm.className = "sect-form";
  let titleForm = document.getElementById("titleForm");
  titleForm.textContent = `Create your animals for the ${e.target.parentNode.childNodes[0].textContent}'s species`;

  formulario.innerHTML = "";

  let divInputArea = document.createElement("div");
  divInputArea.className = "form-floating mb-3";
  let inputArea = document.createElement("input");
  inputArea.type = "text";
  inputArea.className = "form-control rounded-3";
  inputArea.id = "floatingInput";
  inputArea.placeholder = "Animal Name";
  let labelArea = document.createElement("label");
  labelArea.textContent = "Animal Name";
  labelArea.setAttribute("for", "floatingInput");

  let btnSubmit = document.createElement("button");
  btnSubmit.type = "submit";
  btnSubmit.textContent = "Submit";
  btnSubmit.className = "w-100 mb-2 btn btn-lg rounded-3 btn-primary";

  formulario.insertAdjacentElement("beforeend", divInputArea);
  divInputArea.insertAdjacentElement("beforeend", inputArea);
  divInputArea.insertAdjacentElement("beforeend", labelArea);

  formulario.insertAdjacentElement("beforeend", btnSubmit);
}
function listaAnimales(id) {
  let section = document.getElementById("sectVerEspecies");
  section.className = "sectVerEspecies";
  section.innerHTML = "";
  let divContentAnimal = document.createElement("div");
  divContentAnimal.className = "divAnimal containers-scroll borderDivScrool";

  section.insertAdjacentElement("beforeend", divContentAnimal);
  arrayAnimal = JSON.parse(localStorage.getItem("Animales"));
  let sectForm = document.getElementById("sectForm");
  sectForm.className = "d-none";
  if (arrayAnimal === null) {
    arrayAnimal = [];
  } else {
    divContentAnimal.innerHTML = "";
    let titleAnimales = document.createElement("h2");
    titleAnimales.textContent = "Animales";
    titleAnimales.className = "whiteColorTitles text-center";
    let sectForm = document.getElementById("sectForm");
    let sectComment = document.getElementById("verComentarios");
    divContentAnimal.insertAdjacentElement("beforeend", titleAnimales);

    arrayAnimal.forEach((element) => {
      if (id === element.specieId) {
        let divAnimal = document.createElement("div");
        divAnimal.className = "btn-group dropend btnSpecies separadoBtn";
        let divNameAnimal = document.createElement("div");
        divNameAnimal.className = "divNameSpecie btnSpecies animalDiv";
        divNameAnimal.textContent = element.name;
        let btnVerComentario = document.createElement("button");
        btnVerComentario.className =
          "btn btn-secondary dropdown-toggle dropdown-toggle-split";
        btnVerComentario.addEventListener("click", (e) => {
          sectForm.className = "d-none";
          listaComment(element.Id);
        });
        let spanToggle = document.createElement("span");
        spanToggle.className = "visually-hidden";
        spanToggle.textContent = "Toggle Dropend";
        let btnComentario = document.createElement("button");
        btnComentario.className = "btn btn-secondary dropdown-toggle-split";
        btnComentario.textContent = "+";
        btnComentario.addEventListener("click", (e) => {
          sectComment.className = "d-none";
          formComment();
          zooIds.idAnimals = element.Id;
        });

        divContentAnimal.insertAdjacentElement("beforeend", divAnimal);
        divAnimal.insertAdjacentElement("beforeend", divNameAnimal);
        divAnimal.insertAdjacentElement("beforeend", btnComentario);
        divAnimal.insertAdjacentElement("beforeend", btnVerComentario);
        btnVerComentario.insertAdjacentElement("beforeend", spanToggle);
      }
    });
  }
}
function formComment() {
  let sectSearch = document.getElementById("verBusqueda");
  sectSearch.className = "d-none";
  zooIds.inicioForm = "formComment";

  let sectForm = document.getElementById("sectForm");
  sectForm.className = "sect-form";
  let titleForm = document.getElementById("titleForm");
  titleForm.textContent = "Create your Message";

  formulario.innerHTML = "";

  let divInputName = document.createElement("div");
  divInputName.className = "form-floating mb-3";
  let inputName = document.createElement("input");
  inputName.type = "text";
  inputName.className = "form-control rounded-3";
  inputName.id = "floatingInput";
  inputName.placeholder = "Name";
  let labelName = document.createElement("label");
  labelName.textContent = "Name";
  labelName.setAttribute("for", "floatingInput");

  let divInputMessage = document.createElement("div");
  divInputMessage.className = "form-floating mb-3";
  let inputMessage = document.createElement("textarea");
  inputMessage.className = "textArea form-control rounded-3";
  inputMessage.id = "floatingTextarea";
  inputMessage.placeholder = "Here you can put your message";
  let labelMessage = document.createElement("label");
  labelMessage.textContent = "Message";
  labelMessage.setAttribute("for", "floatingTextarea");

  let btnSubmit = document.createElement("button");
  btnSubmit.type = "submit";
  btnSubmit.textContent = "Submit";
  btnSubmit.className = "w-100 mb-2 btn btn-lg rounded-3 btn-primary";

  formulario.insertAdjacentElement("beforeend", divInputName);
  divInputName.insertAdjacentElement("beforeend", inputName);
  divInputName.insertAdjacentElement("beforeend", labelName);

  formulario.insertAdjacentElement("beforeend", divInputMessage);
  divInputMessage.insertAdjacentElement("beforeend", inputMessage);
  divInputMessage.insertAdjacentElement("beforeend", labelMessage);

  formulario.insertAdjacentElement("beforeend", btnSubmit);
}
function listaComment(id) {
  let section = document.getElementById("verComentarios");
  section.className = "verComentarios";
  section.innerHTML = "";
  arrayMenssage = JSON.parse(localStorage.getItem("Comentarios"));

  if (arrayMenssage === null) {
    arrayMenssage = [];
  } else {
    arrayMenssage.forEach((element) => {
      if (id === element.IdAnimals) {
        let divContents = document.createElement("div");
        divContents.className = "toast fade show";
        let divNameUser = document.createElement("div");
        divNameUser.className = "toast-header";
        let iconMess = document.createElement("i");
        iconMess.className = "fa-solid fa-message";
        let nameUser = document.createElement("strong");
        nameUser.className = "me-auto";
        nameUser.textContent = element.nameUser;
        let horaFech = document.createElement("p");
        horaFech.textContent = element.fechaHora;

        let divComment = document.createElement("div");
        divComment.className = "toast-body";
        divComment.id = "divComment";
        let txtComment = document.createElement("p");
        txtComment.textContent = element.comment;
        let divRespuesta = document.createElement("div");
        divRespuesta.className = "btn-group";
        let btnResponder = document.createElement("button");
        btnResponder.className = "btn btn-sm btn-secondary";
        btnResponder.textContent = "Answer";
        btnResponder.addEventListener("click", (e) => {
          formResponder(divForm, element.Id, divRespComment);
          zooIds.commentsIds = element.id;
        });
        let btnVerRespuestas = document.createElement("button");
        btnVerRespuestas.className =
          "btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split";
        btnVerRespuestas.addEventListener("click", (e) => {
          listaRespuestas(element.Id, divRespComment, divForm);
        });
        let spanFlecha = document.createElement("span");
        spanFlecha.className = "visually-hidden";
        spanFlecha.textContent = "Toggle Dropdown";
        let divForm = document.createElement("div");
        let divRespComment = document.createElement("div");

        section.insertAdjacentElement("beforeend", divContents);
        divContents.insertAdjacentElement("beforeend", divNameUser);
        divNameUser.insertAdjacentElement("beforeend", iconMess);
        divNameUser.insertAdjacentElement("beforeend", nameUser);
        divNameUser.insertAdjacentElement("beforeend", horaFech);
        divContents.insertAdjacentElement("beforeend", divComment);
        divComment.insertAdjacentElement("beforeend", txtComment);
        divComment.insertAdjacentElement("beforeend", divRespuesta);
        divRespuesta.insertAdjacentElement("beforeend", btnResponder);
        divRespuesta.insertAdjacentElement("beforeend", btnVerRespuestas);
        divRespuesta.insertAdjacentElement("beforeend", spanFlecha);
        divComment.insertAdjacentElement("beforeend", divForm);
        divComment.insertAdjacentElement("beforeend", divRespComment);
      }
    });
  }
}
function formResponder(divForm, commentsIds, divRespComment) {
  let sectSearch = document.getElementById("verBusqueda");
  sectSearch.className = "d-none";
  divForm.innerHTML = "";
  divForm.className = "divFormResp";
  divRespComment.className = "d-none";
  zooIds.inicioForm = "formResponder";
  let formulario = document.createElement("form");
  formulario.className = "formRespuesta";
  formulario.addEventListener("submit", (e) => {
    envio(e, nameUser, respuesta, commentsIds);
  });
  let nameUser = document.createElement("input");
  nameUser.type = "text";
  nameUser.className = "form-control form-control-sm nameUser";
  nameUser.placeholder = "User name";
  let respuesta = document.createElement("textarea");
  respuesta.className = "form-control form-control-sm inpuntRespuesta";
  respuesta.placeholder = "Reply comment";
  let btnSubmit = document.createElement("button");
  btnSubmit.textContent = "Send";
  btnSubmit.className = "btn btn-primary btn-sm";

  divForm.insertAdjacentElement("beforeend", formulario);
  formulario.insertAdjacentElement("beforeend", nameUser);
  formulario.insertAdjacentElement("beforeend", respuesta);
  formulario.insertAdjacentElement("beforeend", btnSubmit);
}
function listaRespuestas(id, divRespComment, divForm) {
  arrayRespuestas = JSON.parse(localStorage.getItem("ResponseComment"));
  divRespComment.innerHTML = "";
  divRespComment.className = "divVerRespuestas";
  divForm.className = "d-none";
  if (arrayRespuestas === null) {
    arrayRespuestas = [];
  } else {
    arrayRespuestas.forEach((element) => {
      if (id === element.IdComment) {
        divRespComment.innerHTML += `
                <div class="toast fade show divRespuestas">
                    <div class="toast-header">
                        <strong class="me-auto">${element.nameUser}</strong>
                        <p>${element.fechaHora}</p>
                    </div>
                    <div class="toast-body" id="divComment">
                        <p>${element.comment}</p>
                    </div>
                </div>
                `;
      }
    });
  }
}
let formSearch = document.getElementById("forSearch");
formSearch.addEventListener("submit", search);

function search(e) {
  e.preventDefault();
  zooIds.search = false;
  let sectVerEspecies = document.getElementById("sectVerEspecies");
  sectVerEspecies.className = "d-none";
  let sectForm = document.getElementById("sectForm");
  sectForm.className = "d-none";
  let sectVerComentarios = document.getElementById("verComentarios");
  sectVerComentarios.className = "d-none";
  let buscador = document.getElementById("inputSearch").value.toLowerCase();
  let sectSearch = document.getElementById("verBusqueda");
  sectSearch.className = "verBusqueda";
  sectSearch.innerHTML = "";
  if (/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(buscador) && buscador.length >= 4) {
    verBusqueda(buscador, sectSearch);
    formSearch.reset();
  } else {
    sectSearch.innerHTML += `
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          You haven't put nothing
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style="">
          <div class="accordion-body">
            <strong>Verifica que cumpla con las condiciones de search:</strong>
            <p>1- The min number of characters is (5)</p>
            <p>2- Only letters are accepted</p>
            <p>3- Sin importar si son mayusculas o minusculas, el resultado de la search sera el mismo</p>
          </div>
        </div>
      </div>
        `;
  }
}
function verBusqueda(buscador, sectSearch) {
  arrayAreas.forEach((element) => {
    if (element.name.includes(buscador)) {
      let title = document.createElement("h3");
      title.textContent = "Area";
      let verZona = document.createElement("p");
      verZona.textContent = element.name;
      sectSearch.insertAdjacentElement("beforeend", title);
      sectSearch.insertAdjacentElement("beforeend", verZona);
      zooIds.search = true;
    }
  });
  arraySpecie.forEach((element) => {
    if (element.name.includes(buscador)) {
      let titleEsp = document.createElement("h3");
      titleEsp.textContent = "Area's animal";
      titleEsp.className = "especie";
      let verEspecie = document.createElement("p");
      verEspecie.textContent = element.name;
      verEspecie.className = "especie";
      sectSearch.insertAdjacentElement("beforeend", titleEsp);
      sectSearch.insertAdjacentElement("beforeend", verEspecie);
      let idZona = element.zoneId;
      arrayAreas.forEach((element) => {
        if (element.Id === idZona) {
          let titleArea = document.createElement("h3");
          titleArea.textContent = "Zone";
          let verZona = document.createElement("p");
          verZona.textContent = element.name;
          sectSearch.insertAdjacentElement("afterbegin", verZona);
          sectSearch.insertAdjacentElement("afterbegin", titleArea);
        }
      });
      zooIds.search = true;
    }
  });
  arrayAnimal.forEach((element) => {
    if (element.name.includes(buscador)) {
      let divImpri = document.createElement("div");
      divImpri.className = "bordeBottom";
      sectSearch.insertAdjacentElement("beforeend", divImpri);
      let titleAni = document.createElement("h3");
      titleAni.textContent = "Animal";
      titleAni.className = "animales";
      let verAnimal = document.createElement("p");
      verAnimal.textContent = element.name;
      verAnimal.className = "animales";
      divImpri.insertAdjacentElement("beforeend", titleAni);
      divImpri.insertAdjacentElement("beforeend", verAnimal);
      let idEspecie = element.specieId;
      arraySpecie.forEach((element) => {
        if (element.Id === idEspecie) {
          let titleEsp = document.createElement("h3");
          titleEsp.textContent = "Especie";
          titleEsp.className = "especie";
          let verEspecie = document.createElement("p");
          verEspecie.textContent = element.name;
          verEspecie.className = "especie";
          divImpri.insertAdjacentElement("afterbegin", verEspecie);
          divImpri.insertAdjacentElement("afterbegin", titleEsp);
          let idZona = element.zoneId;
          arrayAreas.forEach((element) => {
            if (element.Id === idZona) {
              let titleArea = document.createElement("h3");
              titleArea.textContent = "Area";
              let verZona = document.createElement("p");
              verZona.textContent = element.name;
              divImpri.insertAdjacentElement("afterbegin", verZona);
              divImpri.insertAdjacentElement("afterbegin", titleArea);
            }
          });
        }
      });
      zooIds.search = true;
    }
  });
  arrayMenssage.forEach((element) => {
    if (
      element.nameUser.includes(buscador) ||
      element.comment.includes(buscador)
    ) {
      let divImpri = document.createElement("div");
      divImpri.className = "bordeBottom";
      sectSearch.insertAdjacentElement("beforeend", divImpri);
      let titleComment = document.createElement("h3");
      titleComment.textContent = "Comments";
      titleComment.className = "comentarios";
      let verNameUser = document.createElement("p");
      verNameUser.textContent = `User: ${element.nameUser}`;
      verNameUser.className = "comentarios";
      let verComment = document.createElement("p");
      verComment.textContent = `Comment: ${element.comment}`;
      verComment.className = "comentarios";
      divImpri.insertAdjacentElement("beforeend", titleComment);
      divImpri.insertAdjacentElement("beforeend", verNameUser);
      divImpri.insertAdjacentElement("beforeend", verComment);
      let idAnimal = element.IdAnimals;
      arrayAnimal.forEach((element) => {
        if (element.Id === idAnimal) {
          let titleAni = document.createElement("h3");
          titleAni.textContent = "Animal";
          titleAni.className = "animales";
          let verAnimal = document.createElement("p");
          verAnimal.textContent = element.name;
          verAnimal.className = "animales";
          divImpri.insertAdjacentElement("afterbegin", verAnimal);
          divImpri.insertAdjacentElement("afterbegin", titleAni);
          let idEspecie = element.specieId;
          arraySpecie.forEach((element) => {
            if (element.Id === idEspecie) {
              let titleEsp = document.createElement("h3");
              titleEsp.textContent = "Especie";
              titleEsp.className = "especie";
              let verEspecie = document.createElement("p");
              verEspecie.textContent = element.name;
              verEspecie.className = "especie";
              divImpri.insertAdjacentElement("afterbegin", verEspecie);
              divImpri.insertAdjacentElement("afterbegin", titleEsp);
              let idZona = element.zoneId;
              arrayAreas.forEach((element) => {
                if (element.Id === idZona) {
                  let titleArea = document.createElement("h3");
                  titleArea.textContent = "Zona";
                  let verZona = document.createElement("p");
                  verZona.textContent = element.name;
                  divImpri.insertAdjacentElement("afterbegin", verZona);
                  divImpri.insertAdjacentElement("afterbegin", titleArea);
                }
              });
            }
          });
        }
      });
      zooIds.search = true;
    }
  });
  arrayRespuestas.forEach((element) => {
    if (
      element.nameUser.includes(buscador) ||
      element.comment.includes(buscador)
    ) {
      let divImpri = document.createElement("div");
      divImpri.className = "bordeBottom";
      sectSearch.insertAdjacentElement("beforeend", divImpri);
      let titleResp = document.createElement("h3");
      titleResp.textContent = "Respuesta";
      titleResp.className = "respuestas";
      let verNameUser = document.createElement("p");
      verNameUser.textContent = `User: ${element.nameUser}`;
      verNameUser.className = "respuestas";
      let verResp = document.createElement("p");
      verResp.textContent = `Respuesta: ${element.comment}`;
      verResp.className = "respuestas";
      divImpri.insertAdjacentElement("beforeend", titleResp);
      divImpri.insertAdjacentElement("beforeend", verNameUser);
      divImpri.insertAdjacentElement("beforeend", verResp);
      let idComment = element.IdComment;
      arrayMenssage.forEach((element) => {
        if (element.Id === idComment) {
          let titleComment = document.createElement("h3");
          titleComment.textContent = "Comentario";
          titleComment.className = "comentarios";
          let verNameUser = document.createElement("p");
          verNameUser.textContent = `User: ${element.nameUser}`;
          verNameUser.className = "comentarios";
          let verComment = document.createElement("p");
          verComment.textContent = `Comment: ${element.comment}`;
          verComment.className = "comentarios";
          divImpri.insertAdjacentElement("afterbegin", verComment);
          divImpri.insertAdjacentElement("afterbegin", verNameUser);
          divImpri.insertAdjacentElement("afterbegin", titleComment);
          let idAnimal = element.IdAnimals;
          arrayAnimal.forEach((element) => {
            if (element.Id === idAnimal) {
              let titleAni = document.createElement("h3");
              titleAni.textContent = "Animal";
              titleAni.className = "animales";
              let verAnimal = document.createElement("p");
              verAnimal.textContent = element.name;
              verAnimal.className = "animales";
              divImpri.insertAdjacentElement("afterbegin", verAnimal);
              divImpri.insertAdjacentElement("afterbegin", titleAni);
              let idEspecie = element.specieId;
              arraySpecie.forEach((element) => {
                if (element.Id === idEspecie) {
                  let titleEsp = document.createElement("h3");
                  titleEsp.textContent = "Especie";
                  titleEsp.className = "especie";
                  let verEspecie = document.createElement("p");
                  verEspecie.textContent = element.name;
                  verEspecie.className = "especie";
                  divImpri.insertAdjacentElement("afterbegin", verEspecie);
                  divImpri.insertAdjacentElement("afterbegin", titleEsp);
                  let idZona = element.zoneId;
                  arrayAreas.forEach((element) => {
                    if (element.Id === idZona) {
                      let titleArea = document.createElement("h3");
                      titleArea.textContent = "Zona";
                      let verZona = document.createElement("p");
                      verZona.textContent = element.name;
                      divImpri.insertAdjacentElement("afterbegin", verZona);
                      divImpri.insertAdjacentElement("afterbegin", titleArea);
                    }
                  });
                }
              });
            }
          });
        }
      });
      zooIds.search = true;
    }
  });
  if (zooIds.search === false) {
    sectSearch.innerHTML = "";
    let mensaje = document.createElement("h2");
    mensaje.textContent = `There are no results for your search(${buscador}).`;
    sectSearch.insertAdjacentElement("beforeend", mensaje);
  }
}

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", envio);
function envio(e, nameUserResp, resCommnet, idResComment) {
  e.preventDefault();
  if (zooIds.inicioForm === "areaForm") {
    let inputNameArea = document
      .getElementById("floatingInput")
      .value.toLowerCase();
    if (
      /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(inputNameArea) &&
      inputNameArea.length >= 5
    ) {
      validarData(inputNameArea, arrayAreas);
      if (zooIds.elementValidation === false) {
        let submit = {
          Id: zoneId(),
          name: inputNameArea,
        };
        arrayAreas.push(submit);
        localStorage.setItem("Zoo's Area", JSON.stringify(arrayAreas));
        areaSelects();
        formulario.reset();
      } else {
        alert(`El area ${inputNameArea} ya existe`);
      }
    } else {
      alert(
        "Only letters are allowed, and at least 5 characters"
      );
    }
  }
  if (zooIds.inicioForm === "formSpecie") {
    let inputNameSpecie = document
      .getElementById("floatingInput")
      .value.toLowerCase();
    if (
      /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(inputNameSpecie) &&
      inputNameSpecie.length >= 5
    ) {
      validarData(inputNameSpecie, arraySpecie);
      if (zooIds.elementValidation === false) {
        let submit = {
          zoneId: zooIds.zoneId,
          Id: specieId(),
          name: inputNameSpecie,
        };
        arraySpecie.push(submit);
        localStorage.setItem("Especies", JSON.stringify(arraySpecie));
        formulario.reset();
      } else {
        alert(`The specie ${inputNameSpecie} already exist`);
      }
    } else {
      alert(
        "Only letters are allowed, and at least 5 characters"
      );
    }
  }
  if (zooIds.inicioForm === "animalForm") {
    let inputNameAnimal = document
      .getElementById("floatingInput")
      .value.toLowerCase();
    if (
      /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(inputNameAnimal) &&
      inputNameAnimal.length >= 4
    ) {
      validarData(inputNameAnimal, arrayAnimal);
      if (zooIds.elementValidation === false) {
        let submit = {
          specieId: zooIds.specieId,
          Id: animalsId(),
          name: inputNameAnimal,
        };
        arrayAnimal.push(submit);
        localStorage.setItem("Animales", JSON.stringify(arrayAnimal));
        formulario.reset();
      } else {
        alert(`El animal ${inputNameAnimal} ya existe`);
      }
    } else {
      alert(
        "Only letters are allowed, and at least 5 characters"
      );
    }
  }
  if (zooIds.inicioForm === "formComment") {
    let inputName = document
      .getElementById("floatingInput")
      .value.toLowerCase();
    let inputTextarea = document
      .getElementById("floatingTextarea")
      .value.toLowerCase();
    if (inputName.length >= 4 && inputTextarea.length >= 3) {
      if (
        /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(inputName) &&
        /\S/.test(inputTextarea)
      ) {
        let date = new Date();
        let fecha = `Date: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} H24: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        console.log(fecha);
        let submit = {
          IdAnimals: zooIds.idAnimals,
          Id: commentsIds(),
          nameUser: inputName,
          comment: inputTextarea,
          fechaHora: fecha,
        };
        arrayMenssage.push(submit);
        localStorage.setItem("Comentarios", JSON.stringify(arrayMenssage));
        formulario.reset();
      } else {
        alert(
          "Only letters are allowed, and at least 5 characters"
        );
      }
    } else {
      alert("You must put more than 3 characters");
    }
  }
  if (zooIds.inicioForm === "formResponder") {
    if (nameUserResp.value.length >= 4 && resCommnet.value.length >= 4) {
      if (
        /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(nameUserResp.value) &&
        /\S/.test(resCommnet.value)
      ) {
        let date = new Date();
        let fecha = `Date: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} H24: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        let submit = {
          // Valores del Objetos son pasados por parametros
          IdComment: idResComment,
          nameUser: nameUserResp.value.toLowerCase(),
          comment: resCommnet.value.toLowerCase(),
          fechaHora: fecha,
        };
        arrayRespuestas.push(submit);
        localStorage.setItem(
          "ResponseComment",
          JSON.stringify(arrayRespuestas)
        );
        e.target.reset();
      } else {
        alert("Solo se aceptan letras");
      }
    } else {
      alert("Los campos admiten minimo 4 caracteres");
    }
  }
}
function validarData(inputValue, arrayValidar) {
  let array = [];
  arrayValidar.forEach((element) => {
    array.push(element.name);
  });
  zooIds.elementValidation = array.includes(inputValue);
}
document.addEventListener("DOMContentLoaded", Events);
