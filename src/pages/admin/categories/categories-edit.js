import { getCategory, updateCategory } from "@/api/categories";
import aside from "@/components/aside";
import itemDashBoard from "@/components/item-dashboard";
import navbar from "@/components/navbar";
import footer from "@/components/footer";
import { router, useEffect, useState } from "@/lib";

const AdminCategoriesEditPage = ({ id }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory(id)
      .then(({ data }) => setCategory(data))
      .catch((error) => console.log(error));
  },[]);

  useEffect(() => {
    const form = document.querySelector("#formEditCategory");
    const categoryName = document.querySelector("#category-name");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const formData = {
        id,
        name: categoryName.value,
      }

      updateCategory(formData)
      .then(()=> router.navigate("/admin/categories"))
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
        <h6>Edit Technology</h6>
      </div>
      <div class="card-body px-3 pt-0 pb-2">
        <div class="table-responsive p-0">
        <div class="container pt-5">
        <form action="" id="formEditCategory">
              <div class="form-group">
                  <label for="category-name" class="form-label text-sm font-weight-bolder">Name</label>
                  <input type="text" class="form-control" id="category-name" value="${category.name}"/>
              </div>
              <button class="btn btn-primary mt-2 text-sm font-weight-bolder" id="submit">Save</button>
        </form>
    </div>
      </div>
      ${footer()}</main>
  </body>`
}

export default AdminCategoriesEditPage;