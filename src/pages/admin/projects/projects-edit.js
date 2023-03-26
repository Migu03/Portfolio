import { getProject, updateProject } from "@/api/projects";
import { useEffect, router, useState } from "@/lib";
import {getCategories ,getCategory} from "@/api/categories";
import aside from "@/components/aside";
import footer from "@/components/footer";
import itemDashBoard from "@/components/item-dashboard";
import navbar from "@/components/navbar";
import { getTechnologies } from "@/api/technologies";


const AdminProjectsEditPage = ({ id }) => {
  const [technologies, setTechnologies] = useState([]);
  const [project, setProject] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const [valueArrayIdTechnology,setValueArrayIdTechnology] = useState([]);

  useEffect(() => {
    getTechnologies()
        .then(({ data }) => setTechnologies(data))
        .catch(error => console.log(error))
  }, [])

  useEffect(()=>{
    getCategories()
      .then(({data})=> setCategories(data))
      .catch((error)=> console.log(error))
  },[])

  useEffect(() => {
      getCategory(id)
      .then(({data}) => setCategory(data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    getProject(id)
      .then(({ data }) => setProject(data))
      .catch((error) => console.log(error))
  }, []);

  useEffect(() => {
    const form = document.querySelector("#form-edit");
    const projectName = document.querySelector("#project-name");
    const projectDesc = document.querySelector("#project-desc");
    const projectThumbnail = document.querySelector("#project-thumbnail");
    const projectLink = document.querySelector("#project-link");
    const projectTimeDone = document.querySelector("#project-timeDone");
    const projectAuthor = document.querySelector("#project-author");
    const projectTechnologies = document.querySelectorAll(".project-technology");
    const projectCategoryId = document.querySelector("#project-category");

    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dxa8ks06k/image/upload"
    const CLOUDINARY_PRESET = "km0ivkkn";

    projectTechnologies.forEach((item) =>{
      item.addEventListener("click",(e)=>{
          if(e.target.checked){
              setValueArrayIdTechnology([...valueArrayIdTechnology,e.target.value])
          }else{
              setValueArrayIdTechnology(valueArrayIdTechnology.filter((item)=>item !== e.target.value))
          }
      })
  })
    // display images
    var uploadedImage = "";
    projectThumbnail.addEventListener("change", function () {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        uploadedImage = reader.result;
        document.querySelector("#ImagePreview").src = uploadedImage;
      });
      reader.readAsDataURL(this.files[0]);
    });

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const file = projectThumbnail.files[0];
      let thumbnailSrc = uploadedImage;

      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_PRESET);

        try {
          // call api cloudinary
          const { data } = await axios.post(CLOUDINARY_API, formData, {
            headers: {
              "Content-Type": "application/form-data"
            }
          });
          thumbnailSrc = data.url;
        } catch (error) {
          console.log(error);
        } 
      }
      const formData = {
        id,
        name: projectName.value,
        desc: projectDesc.value,
        thumbnail: thumbnailSrc,
        link: projectLink.value,
        timeDone: projectTimeDone.value,
        author: projectAuthor.value,
        categoryId: parseInt(projectCategoryId.value),
        technologyId:valueArrayIdTechnology,
      };

      updateProject(formData)
        .then(() => router.navigate("/admin/projects"))
        .catch((error) => console.log(error));
    });

    const submit = document.querySelector("#submit")
    submit.addEventListener("click", function () {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      }).then(() => { router.navigate("/admin/projects") })
    })
  });
  return /*html*/`
    <body class="g-sidenav-show bg-gray-100">
      <div class="min-height-300 bg-primary position-absolute w-100"></div>
      ${aside()}
      <main class="main-content position-relative border-radius-lg ">
        ${navbar()}
        ${itemDashBoard()}
        <div class="container-fluid py-4">
          <div class="col-12">
        <div class="card mb-4 shadow-lg bg-white rounded-">
          <div class="card-header pb-0">
            <h6>Edit Projects</h6>
          </div>
          <div class="card-body px-3 pt-0 pb-2">
            <div class="table-responsive p-0">
            <div class="container pt-5">
            <form action="" id="form-edit">
                  <div class="form-group">
                      <label for="project-name" class="form-label text-sm font-weight-bolder">Project name</label>
                      <input type="text" class="form-control" id="project-name" value="${project.name}"/>
                  </div>
                  <div class="form-group">
                      <label for="project-author" class="form-label text-sm font-weight-bolder">Description</label>
                      <textarea name="" class="form-control" id="project-desc" cols="30" rows="10">${project.desc}</textarea>
                  </div>
                  <div class="form-group">
                      <label for="project-link" class="form-label text-sm font-weight-bolder">Thumbnail</label>
                      <input type="file" accept="image/png, image/jpg, image/jpeg" class="form-control" id="project-thumbnail"/>
                      <img src="${project.thumbnail}" id="ImagePreview" alt="">
                  </div>
                  <div class="form-group">
                      <label for="project-link" class="form-label text-sm font-weight-bolder">Link</label>
                      <input type="text" name="project-link" class="form-control" id="project-link" value="${project.link}"/>
                  </div>
                  <div class="form-group">
                <label for="project-technologies" class="form-label text-sm font-weight-bolder">Technologies</label>
                ${technologies.map((technology) => {
                    return/*html*/`
                      <div key=${technology.id}>
                        <input
                        class="project-technology"
                          type="checkbox"
                          id="${technology.id}"
                          name="project-technologies"
                          value="${technology.name}"
                        />
                        <label htmlFor="${technology.id}">${technology.name}</label>
                      </div>
                    `;
                  }).join("")}
                </div>
                  <div class="form-group">
                    <label for="project-author" class="form-label text-sm font-weight-bolder">Categories</label><br>
                    <select id="project-category" class="form-control" required 
                        oninvalid="this.setCustomValidity('Please select an option')" 
                        oninput="this.setCustomValidity('')">
                        <option value="${project.categoryId}">Category</option>
                      ${categories.map((category)=>{  
                        return/*html*/`
                        <option value="${category.id}">${category.name}</option>
                        `
                    }).join("")}
                    </select>
                  </div>
                  <div class="form-group">
                      <label for="project-author" class="form-label text-sm font-weight-bolder">Completion time(day)</label>
                      <input type="number" class="form-control" id="project-timeDone" value="${project.timeDone}"/>
                  </div>
                  <div class="form-group">
                      <label for="project-author" class="form-label text-sm font-weight-bolder">Author</label>
                      <input type="text" class="form-control" id="project-author" value="${project.author}"/>
                  </div>
                  <button class="btn btn-primary mt-2 text-sm font-weight-bolder" id="submit">Save</button>
              </form>
          </div>
        </div>
        ${footer()}</main>
    </body>
  `
}

export default AdminProjectsEditPage