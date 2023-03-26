import { deleteBlog, getBlogs } from "@/api/blog"
import { useEffect, useState } from "@/lib"
import aside from "@/components/aside";
import footer from "@/components/footer";
import itemDashBoard from "@/components/item-dashboard";
import navbar from "@/components/navbar";
const blogs = () => {
    const [blogs,setBlogs] = useState([])

    useEffect(()=>{
        getBlogs()
        .then(({data}) => setBlogs(data))
        .catch((error) => console.log(error))
    },[])

        useEffect(function() {
            const btns = document.querySelectorAll("#remove-blogs");
            btns.forEach((btn) => {
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
                    deleteBlog(id)
                      .then(() => {
                        const newBlogs = blogs.filter((blog) => blog.id != id);
                        setBlogs(newBlogs);
                        Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                        );
                      })
                      .catch((error) => console.log(error));
                  }
                });
              });
            });
          }, [blogs]);          

  return/*html*/`
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
                <h6>Blogs List</h6>
                <a class="btn btn-primary text-sm mb-2" href="/admin/blogs/add">Add Blog</a>
              </div>
              <div class="card-body px-0 pt-0 pb-2">
                <div class="table-responsive p-0">
                  <table class="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th class="text-uppercase text-secondary text-xx font-weight-bolder opacity-10">STT</th>
                        <th class="text-uppercase text-secondary text-xx font-weight-bolder opacity-10">Thumbnail</th>
                        <th class="text-uppercase text-secondary text-xx font-weight-bolder opacity-10">Name</th>
                        <th class="text-uppercase text-secondary text-xx font-weight-bolder opacity-10">Time</th>
                        <th class="text-uppercase text-secondary text-xx font-weight-bolder opacity-10">Author</th>                        
                        <th class="text-center text-uppercase text-secondary text-xx font-weight-bolder opacity-10">Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      ${blogs.map((blog, index) => {
                      return /*html*/`
                      <tr>
                        <td>
                          <p class="text-xs text-center font-weight-bold mb-0">${index + 1}</p>
                        </td>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div>
                              <img src="${blog.thumbnail}" class="avatar avatar-sm me-3" alt="user1">
                            </div>
                        </td>
                        <td>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="mb-0 text-sm">${blog.name}</h6>
                            </div>
                        </td>
                        <td>
                          <p class="text-xs font-weight-bold mb-0">${blog.time}</p>
                        </td>
                        <td>
                          <p class="text-xs font-weight-bold mb-0">${blog.author}</p>
                        </td>
                        <td class=" text-center">
                          <a href="/admin/blogs/${blog.id}/edit" class="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip" data-original-title="Edit blogs">
                            <i class="fa-solid fa-pen"></i>
                          </a>
                          <a>
                            <i class="fa-solid fa-trash-can text-secondary font-weight-bold text-xs p-2 text-danger"
                              data-id="${blog.id}" id="remove-blogs"></i>
                          </a>
                        </td>
                      </tr>
                      `
                      }).join("")}
                    </tbody>
                  </table>
                </div>${footer()}
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  `
}

export default blogs