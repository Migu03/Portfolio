import { getBlog, updateBlog } from "@/api/blog"
import { useEffect, router, useState } from "@/lib"
import aside from "@/components/aside";
import navbar from "@/components/navbar";
import itemDashBoard from "@/components/item-dashboard";
import footer from "@/components/footer";
import axios from "axios";
import $ from "jquery";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const blogEdit = ({id}) => {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        getBlog(id)
        .then(({data})=> setBlog(data))
        .catch(err=> console.log(err))
    },[])

    let textarea
    useEffect(() => {
        ClassicEditor.create(document.querySelector('#blog-desc'))
            .then(editor => {
                textarea = editor
            })
            .catch(error => {
                console.error(error);
            });
    })

    useEffect(() => {
        const form = $("#form-add")
        const blogName = document.querySelector("#blog-name");
        const blogDesc = document.querySelector("#blog-desc");
        const blogThumbnail = document.querySelector("#blog-thumbnail");
        const blogAuthor = document.querySelector("#blog-author");
        const blogTime = document.querySelector("#blog-time");


        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dxa8ks06k/image/upload"
        const CLOUDINARY_PRESET = "km0ivkkn";

        var uploadedImage = "";
        blogThumbnail.addEventListener("change", function () {
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                uploadedImage = reader.result
                document.querySelector("#img-display").src = uploadedImage
            })
            reader.readAsDataURL(this.files[0])
        })

        let dataImg = ""
        form.validate({
            rules: {
                "blog-name": {
                    required: true,
                    minlength: 10
                },
                "blog-desc": {
                    required: true,

                },
                "blog-thumbnail": {
                    required: true,

                },
                "blog-author": {
                    required: true,
                },
                "blog-time": {
                    required: true,
                },
            },
            messages: {
                "blog-name": {
                    required: "<span class='error'>Name must not be empty<span>",
                    minlength: "<span class='error'>Enter at least 3 characters</span>"
                },
                "blog-desc": {
                    required: "<span class='error'>Description must not be empty</span>",

                },
                "blog-thumbnail": {
                    required: "<span class='error'>Image must not be empty</span>",

                },
                "blog-author": {
                    required: "<span class='error'>Author must not be empty</span>",
                },
                "blog-time": {
                    required: "<span class='error'>Image must not be empty</span>",
                },

            },
            submitHandler: function () {
                async function addImage() {
                    const file = blogThumbnail.files[0];
                    if (file) {
                        const formData = new FormData();
                        formData.append('file', file);
                        formData.append('upload_preset', CLOUDINARY_PRESET)
                        // call api cloudinary
                        const { data } = await axios.post(CLOUDINARY_API, formData, {
                            headers: {
                                "Content-Type": "multipart/form-data"
                            }
                        });
                        dataImg = data.url;
                    }
                    const formData = {
                        id,
                        name: blogName.value,
                        desc: blogDesc.value,
                        thumbnail: dataImg,
                        author: blogAuthor.value,
                        time: blogTime.value,
                    };
                    updateBlog(formData)
                        .then(() => { router.navigate("/admin/blogs") })
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
            <h6>Edit Blog</h6>
            </div>
            <div class="card-body px-3 pt-0 pb-2">
            <div class="table-responsive p-0">
            <div class="container pt-5">
            <form action="" id="form-add">
                    <div class="form-group">
                        <label for="project-name" class="form-label text-sm font-weight-bolder">Blog name</label>
                        <input type="text" class="form-control" name="blog-name" id="blog-name" value="${blog.name}"/>
                    </div>
                    <div class="form-group">
                        <label for="project-author" class="form-label text-sm font-weight-bolder">Description</label>
                        <textarea name="" class="form-control" name="blog-desc" id="blog-desc" cols="30" rows="10">${blog.desc}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="project-author" class="form-label text-sm font-weight-bolder">Thumbnail</label>
                        <input type="file" accept="image/png, image/jpg, image/jpeg" class="form-control" name="blog-thumbnail" id="blog-thumbnail"/>
                        <img src="${blog.thumbnail}" id="img-display" alt="">
                    </div>
                    <div class="form-group">
                        <label for="project-author" class="form-label text-sm font-weight-bolder">Time</label>
                        <input type="date" class="form-control" name="blog-time" id="blog-time" value="${blog.time}"/>
                    </div>
                    <div class="form-group">
                        <label for="project-author" class="form-label text-sm font-weight-bolder">Author</label>
                        <input type="text" class="form-control" name="blog-author" id="blog-author" value="${blog.author}"/>
                    </div>
                    <button class="btn btn-primary mt-2 text-sm font-weight-bolder" id="submit">Save</button>
                </form>
        </div>
            </div>${footer()}
            </main>
            
            </body>
        `
}

export default blogEdit