// import { getCategory } from "@/api/categories";
import { deleteProject, getProjects, searchProject } from "@/api/projects";
import aside from "@/components/aside";
import footer from "@/components/footer";
import itemDashBoard from "@/components/item-dashboard";
import navbar from "@/components/navbar";
import { useEffect, useState } from "@/lib";

const AdminProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
      getProjects()
          .then(({ data }) => setProjects(data))
          .catch((error) => console.log(error));
  }, []);
  
  useEffect(() =>{
    const formSearch = document.querySelector("#form-search");
    const keyword = document.querySelector("#keyword");

    formSearch.addEventListener("submit", (e) => {
      e.preventDefault();
      searchProject(keyword.value)
      .then(() => {
        const newProjects = projects.filter((project) => project.name == keyword.value);
              setProjects(newProjects);
      })
      .catch((error) => console.log(error));
    })    
  })
  useEffect(function () {
      const btns = document.querySelectorAll("#remove-project");
      for (let btn of btns) {
          btn.addEventListener("click", function () {
              const id = this.dataset.id;
              Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  deleteProject(id)
                      .then(() => {
                          const newProjects = projects.filter((project) => project.id != id);
                          setProjects(newProjects);
                          Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                      })
                      .catch((error) => console.log(error));
                  
                }
              })
          })
      }
  });
  return/*html*/`
    <body class="g-sidenav-show bg-gray-100">
      <div class="min-height-300 bg-primary position-absolute w-100"></div>
      ${aside()}
      <main class="main-content position-relative border-radius-lg ">
      ${navbar()}
      ${itemDashBoard()}
        <div class="container-fluid py-4">
          <div class="col-12">
            <div class="card mb-4 shadow-lg bg-white rounded-">
              <div class="card-header pb-0 mb-2 d-flex justify-content-between">
                <h6>Project List</h6>
                <form action="" id="form-search">
                  <input type="text" id="keyword">
                  <button type="submit">Search</button>
                </form>
                <a class="btn btn-primary text-sm mb-2" href="/admin/projects/add">Add Project</a>
              </div>
              <div class="card-body px-0 pt-0 pb-2">
                <div class="table-responsive p-0">
                  <table class="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th class="text-center text-uppercase text-secondary text-xx font-weight-bolder opacity-10">STT</th>
                        <th class="text-uppercase text-secondary text-xx font-weight-bolder opacity-10">Thumbnail</th>
                        <th class="text-uppercase text-secondary text-xx font-weight-bolder opacity-10">Name</th>
                        <th class="text-uppercase text-secondary text-xx font-weight-bolder opacity-10">Author</th>
                        <th class="text-center text-uppercase text-secondary text-xx font-weight-bolder opacity-10">Link</th>
                        <th class="text-center text-uppercase text-secondary text-xx font-weight-bolder opacity-10">Completion
                          time</th>
                          <th class="text-center text-uppercase text-secondary text-xx font-weight-bolder opacity-10">
                          Category</th>
                        <th class="text-center text-uppercase text-secondary text-xx font-weight-bolder opacity-10">
                          Technology</th>
                        <th class="text-center text-uppercase text-secondary text-xx font-weight-bolder opacity-10">Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      ${projects.map((project, index) => {
                      return /*html*/`
                      <tr>
                        <td>
                          <p class="text-xs text-center font-weight-bold mb-0">${index + 1}</p>
                        </td>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div>
                              <img src="${project.thumbnail}" class="avatar avatar-sm me-3" alt="user1">
                            </div>
                        </td>
                        <td>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="mb-0 text-sm">${project.name}</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-xs font-weight-bold mb-0">${project.author}</p>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <a href="${project.link}" class="badge badge-sm bg-info text-decoration-none">View on github</a>
                        </td>
                        <td>
                          <p class="text-xs text-center mb-0">${project.timeDone}</p>
                        </td>
                        <td class="align-middle text-center">
                          <span class="text-secondary text-xs font-weight-bold" >${project.categoryId}</span>
                        </td>
                        <td class="align-middle text-center">
                          <span class="text-secondary text-xs font-weight-bold" >${project.technologyId}</span>
                        </td>
                        <td class=" text-center">
                          <a href="/admin/projects/${project.id}/edit" class="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip" data-original-title="Edit project">
                            <i class="fa-solid fa-pen"></i>
                          </a>
                          <a>
                            <i class="fa-solid fa-trash-can text-secondary font-weight-bold text-xs p-2 text-danger"
                              data-id="${project.id}" id="remove-project"></i>
                          </a>
                        </td>
                      </tr>
                      `
                      }).join("")}
                    </tbody>
                  </table>
                </div>${footer()}
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
    `
}
export default AdminProjectsPage;