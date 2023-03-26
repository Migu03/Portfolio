//jQuery
import $ from 'jquery';
import 'jquery-validation';
window.$ = $;
window.jQuery = $;
////////////////////////////////////////////////////////////////
import "bootstrap/dist/css/bootstrap.min.css";
const app = document.querySelector("#app");
import { render,router } from "./src/lib";
import NotFoundPage from "./src/pages/NotFoundPage"
import Home from "./src/pages/HomePage";
import BlogPage from "@/pages/BlogPage";
import LoginPage from "@/pages/LogIn";
import SignUp from "@/pages/Sign-up";

import adminHomePage from "@/pages/admin/admin";
//admin-projects
import AdminProjectsPage from "@/pages/admin/projects/projects";
import AdminProjectsAddPage from "@/pages/admin/projects/projects-add";
import AdminProjectsEditPage from "@/pages/admin/projects/projects-edit";
//admin-category
import AdminCategoriesPage from "@/pages/admin/categories/categories";
import AdminCategoriesAddPage from "@/pages/admin/categories/categories-add";
import AdminCategoriesEditPage from "@/pages/admin/categories/categories-edit";
//admin-technology
import AdminTechnologiesPage from '@/pages/admin/technologies/technologies';
import AdminTechnologiesEditPage from '@/pages/admin/technologies/technologies-edit';
import AdminTechnologiesAddPage from '@/pages/admin/technologies/technologies-add';

//admin-blog
import blogs from "@/pages/admin/blog/blogs";
import blogAdd from "@/pages/admin/blog/blog-add";
import blogEdit from "@/pages/admin/blog/blog-edit";

//admin-intro
import introAdmin from '@/pages/admin/intro/intro';
import introEditAdmin from '@/pages/admin/intro/intro-edit';

//admin-social-media
import smAdmin from '@/pages/admin/social-media/social-media';
import smAddAdmin from '@/pages/admin/social-media/social-media-add';
import smEditAdmin from '@/pages/admin/social-media/social-media-edit';

//admin-skill
import AdminSkillsPage from '@/pages/admin/skills/skills';
import AdminSkillAddPage from '@/pages/admin/skills/skills-add';
import AdminSkillsEditPage from '@/pages/admin/skills/skills-edit';

////////////////////////////////////////////////////////////////////////////////////
//user
router.on("/",()=> render(Home,app));
router.on("/Blog",()=> render(BlogPage,app));
router.on("/signin",()=> render(LoginPage,app));
router.on("/signup",()=> render(SignUp,app));

router.on("/projectPage",()=>render(ProjectPage,app));
router.on("/project/:id",({data})=>render(()=>ProjectDetaiPage(data),app));
//admin
router.on("/admin/*", () => { }, {
	before(done, match) {
		if (localStorage.getItem('user')) {
			const userRole = JSON.parse(localStorage.getItem('user')).role;
			if (userRole === 1) {
				done();
			} else {
				document.location.href = "/";
			}
		} else {
			document.location.href = "/signin";
		}

	}
})
router.on("/signup",()=>{ },{
	before(done) {
		if (localStorage.getItem('user')) {
			const userRole = JSON.parse(localStorage.getItem('user')).role;
			if (userRole === 1) {
				done();
			} else {
				document.location.href = "/";
			}
		} else {
			document.location.href = "/signin";
		}

	}
})
router.on("/admin/",()=>render(adminHomePage,app))

router.on("/admin/technologies/",()=>render(AdminTechnologiesPage,app))
router.on("/admin/technologies/add",()=>render(AdminTechnologiesAddPage,app))
router.on("/admin/technologies/:id/edit",({data})=>render(()=> AdminTechnologiesEditPage(data),app))

router.on("/admin/projects/",()=>render(AdminProjectsPage,app))
router.on("/admin/projects/add",()=>render(AdminProjectsAddPage,app))
router.on("/admin/projects/:id/edit",({data})=>render(()=>AdminProjectsEditPage(data),app))

router.on("/admin/categories/",()=>render(AdminCategoriesPage,app))
router.on("/admin/categories/add",()=>render(AdminCategoriesAddPage,app))
router.on("/admin/categories/:id/edit", ({data}) => render(() => AdminCategoriesEditPage(data), app));

router.on("/admin/blogs/",()=>render(blogs,app))
router.on("/admin/blogs/add",()=>render(blogAdd,app))
router.on("/admin/blogs/:id/edit",({data}) => render(() => blogEdit(data),app))

router.on("/admin/intro",()=>render(introAdmin,app))
router.on("/admin/intro/:id/edit",({data})=> render(()=>introEditAdmin(data),app))

router.on("/admin/social-media",()=>render(smAdmin,app))
router.on("/admin/social-media/add",()=>render(smAddAdmin,app))
router.on("/admin/social-media/:id/edit",({data})=> render(()=> smEditAdmin(data),app))

router.on("/admin/skills",()=>render(AdminSkillsPage,app))
router.on("/admin/skills/add",()=>render(AdminSkillAddPage,app))
router.on("/admin/skills/:id/edit",({data})=> render(()=> AdminSkillsEditPage(data),app))

router.notFound((render(NotFoundPage,app)))
router.resolve();

import"./style.css"
import"./admin.css"



