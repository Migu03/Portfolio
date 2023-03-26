import { useEffect, useState, router } from "../../../lib";
import { addProject } from "@/api/projects";
import navbar from "@/components/navbar";
import aside from "@/components/aside";
import itemDashBoard from "@/components/item-dashboard";
import footer from "@/components/footer";
import axios from "axios";
import { getTechnologies } from "@/api/technologies";
import $ from "jquery";
import { getCategories } from "@/api/categories";

const AdminProjectsAddPage = () => {
    const [technologies, setTechnologies] = useState([]);
    const [categories, setCategories] = useState([]);
    const [valueArrayIdTechnology,setValueArrayIdTechnology] = useState([]);

    useEffect(() => {
        getCategories()
            .then(({ data }) => setCategories(data))
            .catch(error => console.log(error))
    }, [])
    useEffect(() => {
        getTechnologies()
            .then(({ data }) => setTechnologies(data))
            .catch(error => console.log(error))
    }, [])
    useEffect(() => {
        const formAdd = $("#form-add");
        const projectName = document.querySelector("#project-name");
        const projectDesc = document.querySelector("#project-desc");
        const projectThumbnail = document.querySelector("#project-thumbnail");
        const projectLink = document.querySelector("#project-link");
        const projectTimeDone = document.querySelector("#project-timeDone");
        const projectAuthor = document.querySelector("#project-author");
        const projectCategoryId = document.querySelector("#project-category");
        const projectTechnologies = document.querySelectorAll(".project-technology");
        console.log(projectTechnologies)

        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dxa8ks06k/image/upload"
        const CLOUDINARY_PRESET = "km0ivkkn";
        let dataImg = "";

        projectTechnologies.forEach((item) =>{
            item.addEventListener("click",(e)=>{
                if(e.target.checked){
                    setValueArrayIdTechnology([...valueArrayIdTechnology,e.target.value])
                }else{
                    setValueArrayIdTechnology(valueArrayIdTechnology.filter((item)=>item !== e.target.value))
                }
            })
        })

        console.log(valueArrayIdTechnology)
        // display images
        var uploadedImage = "";
        projectThumbnail.addEventListener("change", function () {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                uploadedImage = reader.result;
                document.querySelector("#img-display").src = uploadedImage;
            });
            reader.readAsDataURL(this.files[0]);
        })

        formAdd.validate({
            rules: {
                "project-name": {
                    required: true,
                    minlength: 3
                },
                "project-desc": {
                    required: true,

                },
                "project-thumbnail": {
                    required: true,

                },
                "project-link": {
                    required: true,

                },
                "project-timeDone": {
                    required: true,

                },
                "project-author": {
                    required: true,

                },
                "project-category": {
                    required: true,
                }
            },
            messages: {
                "project-name": {
                    required: "<span class='error'>Name must not be empty<span>",
                    minlength: "<span class='error'>Enter at least 3 characters</span>"
                },
                "project-desc": {
                    required: "<span class='error'>Description must not be empty</span>",

                },
                "project-thumbnail": {
                    required: "<span class='error'>Image must not be empty</span>",

                },
                "project-link": {
                    required: "<span class='error'>Link must not be empty</span>",

                },
                "project-timeDone": {
                    required: "<span class='error'>Completion time must not be empty</span>",

                },
                "project-author": {
                    required: "<span class='error'>Author must not be empty</span>",
                },
                "project-category": {
                    required: "<span class='error'>Category must not be empty</span>",
                }
            },
            submitHandler: function () {

                async function addImage() {
                    const file = projectThumbnail.files[0];
                    if (file) {
                        const formData = new FormData();
                        formData.append('file', file);
                        formData.append('upload_preset', CLOUDINARY_PRESET)
                        // call api cloudinary
                        const { data } = await axios.post(CLOUDINARY_API, formData, {
                            headers: {
                                "Content-Type": "application/form-data"
                            }
                        });
                        dataImg = data.url;
                    }
                    // var seclectID = projectTechnologies.value;
                    const formData = {
                        name: projectName.value,
                        desc: projectDesc.value,
                        link: projectLink.value,
                        thumbnail: dataImg,
                        timeDone: projectTimeDone.value,
                        author: projectAuthor.value,
                        technologyId:valueArrayIdTechnology,
                        categoryId: parseInt(projectCategoryId.value),
                    };
                    addProject(formData)
                        .then(() => { router.navigate("/admin/projects") })
                        .catch(error => console.log(error))
                }
                addImage();
            }
        })

    })
    return /*html*/`
        <body class="g-sidenav-show bg-gray-100">
    <div class="min-height-300 bg-primary position-absolute w-100"></div>
     ${aside()}
     <main class="main-content position-relative border-radius-lg">
     ${navbar()}
     ${itemDashBoard()}
     <div class="container-fluid py-4">
        <div class="col-12">
      <div class="card mb-4 shadow-lg bg-white rounded-">
        <div class="card-header pb-0">
          <h6>Add Projects</h6>
        </div>
        <div class="card-body px-3 pt-0 pb-2">
          <div class="table-responsive p-0">
          <div class="container pt-5">
          <form action="" id="form-add">
                <div class="form-group">
                    <label for="project-name" class="form-label text-sm font-weight-bolder">Project name</label>
                    <input type="text" class="form-control" id="project-name" name="project-name"/>
                </div>
                <div class="form-group">
                    <label for="project-desc" class="form-label text-sm font-weight-bolder">Description</label>
                    <textarea name="" class="form-control" id="project-desc" name="project-desc" cols="30" rows="10"></textarea>
                </div>
                <div class="form-group">
                    <label for="project-thumbnail" class="form-label text-sm font-weight-bolder">Thumbnail</label>
                    <input type="file" accept="image/png, image/jpg, image/jpeg" class="form-control" name="project-thumbnail" id="project-thumbnail" />
                    <img src="" id="img-display" alt="">
                </div>
                <div class="form-group">
                    <label for="project-link" class="form-label text-sm font-weight-bolder">Link</label>
                    <input type="text" class="form-control" id="project-link" name="project-link" />
                </div>
                <div class="form-group">
                    <label for="project-timeDone" class="form-label text-sm font-weight-bolder">Completion time(day)</label>
                    <input type="number" class="form-control" id="project-timeDone" name="project-timeDone"/>
                </div>
                <div class="form-group">
                <label for="project-technologies" class="form-label text-sm font-weight-bolder">Technologies</label>
                ${technologies.map((technology) => {
                    return/*html*/`
                      <div key=${technology.id}>
                        <input
                        class="project-technology"
                          type="checkbox"
                          name="project-technologies"
                          value="${technology.id}"
                          
                        />
                        <label htmlFor="${technology.id}">${technology.name}</label>
                      </div>
                    `;
                  }).join("")}
                </div>
                <div class="form-group">
                    <label for="project-category" class="form-label text-sm font-weight-bolder">Categories</label>
                    <select id="project-category" name="project-category" class="form-control">
                    <option value="0">--- Seclect Category ---</option>
                    ${categories.map((category) => {
                    return/*html*/`
                            <option value="${category.id}">${category.name}</option>
                        `}).join("")}
                    </select>
                </div>
                <div class="form-group">
                    <label for="project-author" class="form-label text-sm font-weight-bolder">Author</label>
                    <input type="text" class="form-control" id="project-author" name="project-author"/>
                </div>
                <button class="btn btn-primary mt-2 text-sm font-weight-bolder" id="submit">Save</button>
            </form>
      </div>
        </div>${footer()}
        </main>
        
    </body>
    `
}


export default AdminProjectsAddPage;