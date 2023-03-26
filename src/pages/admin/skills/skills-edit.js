import navbar from "@/components/navbar";
import aside from "@/components/aside";
import itemDashBoard from "@/components/item-dashboard";
import footer from "@/components/footer";
import { router, useEffect, useState } from "@/lib";
import { getSkill, updateSkill } from "@/api/skills";

const AdminSkillsEditPage = ({ id }) => {
  const [skills, setSkill] = useState([]);

  useEffect(() => {
    getSkill(id)
      .then(({ data }) => setSkill(data))
      .catch((error) => console.log(error));
  },[]);

  useEffect(() => {
    const form = document.querySelector("#formEditSkill");
    const skillName = document.querySelector("#Skill-name");
    const skillTag = document.querySelector("#Skill-tag");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const formData = {
        id,
        name: skillName.value,
        tag: skillTag.value
      }

      updateSkill(formData)
      .then(()=> router.navigate("/admin/skills"))
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
        <h6>Edit Skill</h6>
      </div>
      <div class="card-body px-3 pt-0 pb-2">
        <div class="table-responsive p-0">
        <div class="container pt-5">
        <form action="" id="formEditSkill">
              <div class="form-group">
                  <label for="Skill-name" class="form-label text-sm font-weight-bolder">Name</label>
                  <input type="text" class="form-control" id="Skill-name" value="${skills.name}"/>
              </div>
              <div class="form-group">
                  <label for="Skill-tag" class="form-label text-sm font-weight-bolder">Tag</label>
                  <input type="text" class="form-control" id="Skill-tag" value="${skills.tag}"/>
                  <ion-icon class="text-center text-sm font-weight-bold" name="logo-${skills.tag}"></ion-icon>
              </div>
              <button class="btn btn-primary mt-2 text-sm font-weight-bolder" id="submit">Save</button>
        </form>
    </div>
      </div>${footer()}
      </main>
      
  </body>`
}

export default AdminSkillsEditPage;