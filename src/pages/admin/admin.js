import aside from "@/components/aside"
import itemDashBoard from "@/components/item-dashboard"
import navbar from "@/components/navbar"
import vitur from "@/components/vitur"

const adminHomePage = () => {
  return /*html*/`
  <body class="g-sidenav-show bg-gray-100" >
    <div class="height-1000 bg-primary position-absolute w-100"  style="background-image: url('/images/vr-bg.jpg') ; background-size: cover;">
    ${vitur()}
    </div>
    ${aside()}
    <main class="main-content position-relative border-radius-lg " >
    ${navbar()}
    </main>
  </body>

  `
}

export default adminHomePage