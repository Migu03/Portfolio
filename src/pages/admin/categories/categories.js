import { deleteCategory, getCategories } from "@/api/categories";
import aside from "@/components/aside";
import itemDashBoard from "@/components/item-dashboard";
import navbar from "@/components/navbar";
import footer from "@/components/footer";
import {useEffect, useState } from "@/lib";

const AdminCategoriesPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
        .then(({data}) => setCategories(data))
        .catch((error) => console.log(error));
    },[]);

  useEffect(() => {
    const btns = document.querySelectorAll("#remove-categories");
    for(let btn of btns) {
      btn.addEventListener("click", function() {
        const id = this.dataset.id;
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            deleteCategory(id)
          .then(() => {
            const newCategories = categories.filter((category) => category.id != id);
            setCategories(newCategories)
          })
          .catch((error) => console.log(error));
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
    })
  }});  
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
          <div class="card-header pb-0 mb-2 d-flex justify-content-between">
            <h6>Technology List</h6>
            <a class="btn btn-primary text-sm mb-2" href="/admin/categories/add">Add Category</a>
          </div>
          <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-center text-uppercase text-secondary text-xx font-weight-bolder opacity-10">STT</th>
                    <th class="text-center text-uppercase text-secondary text-xx font-weight-bolder opacity-10">Name</th>
                    <th class="text-center text-uppercase text-secondary text-xx font-weight-bolder opacity-10">Action</th>
                  </tr>
                </thead>
                <tbody>
                ${categories.map((category, index)=>{
                  return /*html*/`
                  <tr>
                  <td>
                    <p class="text-xs text-center font-weight-bold mb-0">${index + 1}</p>
                  </td>
                  <td class=" text-center">
                  <button type="button" class="btn btn-light"><p class="text-xs text-center font-weight-bold mb-0">${category.name}</p></button>
                  </td>
                  <td class=" text-center">
                    <a href="/admin/categories/${category.id}/edit" class="text-secondary font-weight-bold text-xs"
                      data-toggle="tooltip" data-original-title="Edit categories">
                      <i class="fa-solid fa-pen"></i>
                    </a>
                    <a>
                      <i class="fa-solid fa-trash-can text-secondary font-weight-bold text-xs p-2 text-danger"
                        data-id="${category.id}" id="remove-categories"></i>
                    </a>
                  </td> 
                </tr>
                  `
                }).join("")}
                  
                </tbody>
              </table>
            </div>
          </div>${footer()}
        </div>
      </div>
    </div>
    
  </main>

</body>
  `
}

export default AdminCategoriesPage;