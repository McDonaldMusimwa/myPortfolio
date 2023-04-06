
let projects = document.querySelector('.project-links');
export default class interactions {




  interate(name) {



    let newname = name.join()
    newname = newname.replaceAll(',', "");

    return newname;
  }

  cards(object) {
    let result = "";
    object.forEach(element => {
      result += `
        <div class="project-card">
          <a href="${element.link}" target="_blank"
            class="project project-tile">
            <div class="container">
            <img class="project-img" src="${element.image}" target="_blank" >
            </div>
            <p>${element.theme}</p>
            <p>${element.description}</p>
          </a>

          <div class="code-links">
            <a href="${element.sourcecode}" target="_blank">ViewCode</a>
            <a href="${element.link}" target="_blank">ViewLive</a>
          </div>

        </div>
        `
    });
    projects.innerHTML = result;
  }
}