import { addTechnology } from "@/api/technologies";
import navbar from "@/components/navbar";
import aside from "@/components/aside";
import itemDashBoard from "@/components/item-dashboard";
import Footer from "@/components/Footer";
import { router, useEffect } from "@/lib";

const AdminTechnologiesAddPage = () => {
  useEffect(() => {
    const form = document.querySelector("#formAddTechnology");
    const technologyName = document.querySelector("#technology-name");
    const technologyTag = document.querySelector("#technology-tag");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = {
        name: technologyName.value,
        tag: technologyTag.value
      };

      addTechnology(formData)
    })
    const submit = document.querySelector("#submit")
        submit.addEventListener("click", function () {
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              }).then(() => { router.navigate("/admin/technologies") })
        });
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
        <h6>Add Technology</h6>
      </div>
      <div class="card-body px-3 pt-0 pb-2">
        <div class="table-responsive p-0">
        <div class="container pt-5">
        <form action="" id="formAddTechnology">
              <div class="form-group">
                  <label for="category-name" class="form-label text-sm font-weight-bolder">Name</label>
                  <input type="text" class="form-control" id="technology-name" />
              </div>
              <div class="form-group">
                  <label for="category-tag" class="form-label text-sm font-weight-bolder">Tag</label>
                  <input type="text" class="form-control" id="technology-tag" />
                  <ion-icon class="text-center text-sm font-weight-bold" name=""></ion-icon>
              </div>
              <button class="btn btn-primary mt-2 text-sm font-weight-bolder" id="submit">Save</button>
          </form>
    </div>
      </div>${Footer()}
      </main>
  </body>`
}

export default AdminTechnologiesAddPage;