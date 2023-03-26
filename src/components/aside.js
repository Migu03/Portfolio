
const aside = () => {
  return/*html*/`
  <aside class="sidenav shadow-lg bg-white p-3 mb-7 rounded- navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
  <div class="sidenav-header">
  <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
  <a class="navbar-brand m-0" href="/admin/">
  <span class="ms-1 font-weight-bold">Admin Portfloio</span>
  </a>
</div>
    <hr class="horizontal dark mt-0">
    <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " href="/admin/projects">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-folder-open text-warning text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Projects</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/admin/categories">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-rectangle-list text-success text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Categories</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/admin/blogs">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-newspaper text-info text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Blog</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/admin/technologies">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-magic text-info text-warning text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Technologies</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/admin/intro">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-info text-info text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Introduce</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/admin/social-media">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-location text-info text-warning  text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Social Media</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/admin/skills">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-hand text-info text-success  text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Skill</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/" target="_blank">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-house text-danger text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Home</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
  `
}

export default aside