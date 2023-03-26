import navbar from "@/components/navbar";
import aside from "@/components/aside";
import itemDashBoard from "@/components/item-dashboard";
import footer from "@/components/footer";
import { router, useEffect, useState } from "@/lib";
import { getIntro, updateIntro } from "@/api/intro";
import $ from "jquery";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const introEditAdmin = ({ id }) => {
    let description;
    const [intro, setIntro] = useState([]);

    useEffect(() => {
        getIntro(id)
            .then(({ data }) => setIntro(data))
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        ClassicEditor.create( document.querySelector( '#content' ) )
        .then((editor) => {
            description = editor;
            // window.editor = editor;
        })
        .catch( error => {
            console.error("There was a problem initializing the editor.", error);
        } );
    })

    useEffect(() => {
        const form = $("#formEdit");
        const Content = document.querySelector("#content");

        form.validate({
            rules: {
                "content": {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                "content": {
                    required: "<span class='error'>Content must not be empty</span>",
                    minlength: "<span class='error'>Enter at least 20 characters</span>"
                },
            },
            submitHandler: function () {
                updateIntro({ id, content: Content.value })
                    .then(() => { router.navigate("/admin/intro") })
                    .catch(error => console.log(error))
            }
        })
    });

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
        <h6>Edit Intro</h6>
      </div>
      <div class="card-body px-3 pt-0 pb-2">
        <div class="table-responsive p-0">
        <div class="container pt-5">
        <form action="" id="formEdit">
              <div class="form-group">
                  <label for="technology-name" class="form-label text-sm font-weight-bolder">Content</label>
                  <textarea rows="30" col="50" class="form-control" name="content" id="content" >${intro.content}</textarea>
              </div>
              <button class="btn btn-primary mt-2 text-sm font-weight-bolder" id="submit">Save</button>
        </form>
    </div>
      </div>${footer()}
      </main>
      
  </body>`
}

export default introEditAdmin