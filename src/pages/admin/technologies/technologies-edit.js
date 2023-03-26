import { getTechnology, updateTechnology } from "@/api/technologies";
import navbar from "@/components/navbar";
import aside from "@/components/aside";
import itemDashBoard from "@/components/item-dashboard";
import footer from "@/components/footer";
import { router, useEffect, useState } from "@/lib";

const AdminTechnologiesEditPage = ({ id }) => {
  const [technology, setTechnology] = useState([]);

  useEffect(() => {
    getTechnology(id)
      .then(({ data }) => setTechnology(data))
      .catch((error) => console.log(error));
  },[]);

  useEffect(() => {
    const form = document.querySelector("#formEditTechnology");
    const technologyName = document.querySelector("#technology-name");
    const technologyTag = document.querySelector("#technology-tag");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const formData = {
        id,
        name: technologyName.value,
        tag: technologyTag.value
      }

      updateTechnology(formData)
      .then(()=> router.navigate("/admin/technologies"))
      .catch((error) => console.log(error))
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
        <h6>Edit technology</h6>
      </div>
      <div class="card-body px-3 pt-0 pb-2">
        <div class="table-responsive p-0">
        <div class="container pt-5">
        <form action="" id="formEditTechnology">
              <div class="form-group">
                  <label for="technology-name" class="form-label text-sm font-weight-bolder">Name</label>
                  <input type="text" class="form-control" id="technology-name" value="${technology.name}"/>
              </div>
              <div class="form-group">
                  <label for="technology-tag" class="form-label text-sm font-weight-bolder">Tag</label>
                  <input type="text" class="form-control" id="technology-tag" value="${technology.tag}"/>
                  <ion-icon class="text-center text-sm font-weight-bold" name="logo-${technology.tag}"></ion-icon>
              </div>
              <button class="btn btn-primary mt-2 text-sm font-weight-bolder" id="submit">Save</button>
        </form>
    </div>
      </div>${footer()}
      </main>
      
  </body>`
}

export default AdminTechnologiesEditPage;