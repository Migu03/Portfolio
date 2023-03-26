import navbar from "@/components/navbar";
import aside from "@/components/aside";
import itemDashBoard from "@/components/item-dashboard";
import footer from "@/components/footer";
import { router, useEffect } from "@/lib";
import { addSkill } from "@/api/skills";

const AdminSkillAddPage = () => {
  useEffect(() => {
    const form = document.querySelector("#formAddSkill");
    const skillName = document.querySelector("#skill-name");
    const skillTag = document.querySelector("#skill-tag");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = {
        name: skillName.value,
        tag: skillTag.value
      };

      addSkill(formData)
    })
    const submit = document.querySelector("#submit")
        submit.addEventListener("click", function () {
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              }).then(() => { router.navigate("/admin/skills") })
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
        <h6>Add Skill</h6>
      </div>
      <div class="card-body px-3 pt-0 pb-2">
        <div class="table-responsive p-0">
        <div class="container pt-5">
        <form action="" id="formAddSkill">
              <div class="form-group">
                  <label for="skill-name" class="form-label text-sm font-weight-bolder">Name</label>
                  <input type="text" class="form-control" id="skill-name" />
              </div>
              <div class="form-group">
                  <label for="skill-tag" class="form-label text-sm font-weight-bolder">Tag</label>
                  <input type="text" class="form-control" id="skill-tag" />
                  <ion-icon class="text-center text-sm font-weight-bold" name=""></ion-icon>
              </div>
              <button class="btn btn-primary mt-2 text-sm font-weight-bolder" id="submit">Save</button>
          </form>
    </div>
      </div>${footer()}
      </main>
      
  </body>`
}

export default AdminSkillAddPage;