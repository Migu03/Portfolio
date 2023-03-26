
const ProjectList = ({projects}) => {
        return`
        ${projects.map(({link,name,timeDone,author,thumbnail,desc})=>{
          return/*html*/`
          <div class="project">
          <a href="${link}">
            <img
              src="${thumbnail}"
              class="features__img lazy-img"
            />
          </a>
            <div class="text-project">
                <div class="features__icon">
                  <svg>
                    <use xlink:href="img/icons.svg#icon-monitor"></use>
                  </svg>
                </div>
                <h3 class="features__header">${name}</h3>
                <h4>${desc}</h4>
                <p>Completion time: ${timeDone} days</p>
                <h5>Programmer: ${author}</h5>
                <a href="${link}" class="badge badge-sm bg-info text-decoration-none ">View on github</a>
            </div>
        </div>
          `
        }).join("")}<div class="features">
          
  `
}

export default ProjectList