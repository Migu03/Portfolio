
const vitur = () => {
  return/*html*/`
  <div class="border-radius-xl mt-4 mx-4 position-relative">
    <main class="main-content mt-1 border-radius-lg">
      <div class="section min-vh-85 position-relative transform-scale-0 transform-scale-md-7">
        <div class="container">
          <div class="row pt-10">
            <div class="col-lg-1 col-md-1 pt-5 pt-lg-0 ms-lg-5 text-center">
              <button class="btn btn-white border-radius-lg p-2 mt-0 mt-md-2 d-block mx-2 mx-md-0" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Home">
                <i class="fas fa-home p-2"></i>
              </button>
              </button>
              <button class="btn btn-white border-radius-lg p-2 d-block ms-2 ms-md-0" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Minimize">
                <i class="fas fa-ellipsis-h p-2"></i>
              </button>
            </div>
            <div class="col-lg-8 col-md-11">
              <div class="d-flex">
                <div class="me-auto">
                  <h1 class="display-1 font-weight-bold mb-0">12°C</h1>
                  <h6 class="text-uppercase mb-0 ms-1">Cloudy</h6>
                </div>
                <div class="ms-auto">
                  <img class="w-50 float-end mt-md-n5" src="/images/icon-sun-cloud.png" alt="image sun">
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>`
}

export default vitur