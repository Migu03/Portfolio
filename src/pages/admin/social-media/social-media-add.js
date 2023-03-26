import navbar from "@/components/navbar";
import aside from "@/components/aside";
import itemDashBoard from "@/components/item-dashboard";
import footer from "@/components/footer";
import { router, useEffect } from "@/lib";
import $ from "jquery";
import { addSm } from "@/api/social-media";

const smAddAdmin = () => {
  useEffect(() => {
    const formAdd = $("#formAddCategory");
    const smName = document.querySelector("#sm-name");
    const smLink = document.querySelector("#sm-link");
    const smTag = document.querySelector("#sm-tag");
    formAdd.validate({
      rules: {
        "sm-name": {
          required: true,
        },
        "sm-link": {
          required: true,
        },
        "sm-tag": {
          required: true,
        },
      },
      messages: {
        "sm-name": {
          required: "<span class='error'>Name must not be empty</span>",
        },
        "sm-link": {
          required: "<span class='error'>Link must not be empty</span>",
        },
        "sm-tag": {
          required: "<span class='error'>Tag must not be empty</span>",
        },
      },
      submitHandler: function () {
        addSm({
           name: smName.value,
           link: smLink.value,
           tag: smTag.value,
          })
          .then(() => { router.navigate("/admin/social-media") })
          .catch(error => console.log(error))
      }
    })

  }
  );

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
          <h6>Add Social media</h6>
        </div>
        <div class="card-body px-3 pt-0 pb-2">
          <div class="table-responsive p-0">
          <div class="container pt-5">
            <form action="" id="formAddCategory">
                <div class="form-group">
                    <label for="sm-name" class="form-label text-sm font-weight-bolder">Name</label>
                    <input type="text" class="form-control" name="sm-name" id="sm-name" />
                </div>
                <div class="form-group">
                    <label for="sm-link" class="form-label text-sm font-weight-bolder">Link</label>
                    <input type="text" class="form-control" name="sm-link" id="sm-link" />
                </div>
                <div class="form-group">
                    <label for="sm-tag" class="form-label text-sm font-weight-bolder">Tag</label>
                    <input type="text" class="form-control" name="sm-tag" id="sm-tag" />
                </div>
                <button class="btn btn-primary mt-2 text-sm font-weight-bolder" id="submit">Save</button>
            </form>
      </div>
        </div>${footer()}
        </main>
        
    </body>
  `
}

export default smAddAdmin