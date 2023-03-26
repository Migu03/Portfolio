import navbar from "@/components/navbar";
import aside from "@/components/aside";
import itemDashBoard from "@/components/item-dashboard";
import footer from "@/components/footer";
import { useEffect, useState } from "@/lib";
import { getIntroAll } from "@/api/intro";

const introAdmin = () => {
  const [introAll, setIntroAll] = useState([]);

  useEffect(() => {
    getIntroAll()
      .then(({ data }) => setIntroAll(data))
      .catch((error) => console.log(error));
  }, []);

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
            <h6>Introduce List</h6>
          </div>
          <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-center text-uppercase text-secondary text-xx font-weight-bolder opacity-10">STT</th>
                    <th class="content text-center text-uppercase text-secondary text-xx font-weight-bolder opacity-10">Content</th>
                    <th class="text-center text-uppercase text-secondary text-xx font-weight-bolder opacity-10">Action</th>
                  </tr>
                </thead>
                <tbody>
                    ${introAll.map((intro,index) => {
                        return /*html*/`
                        <tr>
                        <td>
                          <p class="text-xs text-center font-weight-bold mb-0">${index+1}</p>
                        </td>

                        <td class="content text-center">
                          <textarea class="text-xs text-center font-weight-bold mb-0">${intro.content}</textarea>
                        </td>
                        <td class=" text-center">
                          <a href="/admin/intro/${intro.id}/edit" class="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip" data-original-title="Edit category">
                            <i class="fa-solid fa-pen"></i>
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

export default introAdmin;