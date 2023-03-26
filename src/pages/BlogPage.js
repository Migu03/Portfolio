import { getBlogs } from "@/api/blog"
import bannerBlog from "@/components/banner-blog"
import { useEffect, useState} from "@/lib"

const BlogPage = () => {
  const [blogs,setBlogs] = useState([])
  useEffect(()=>{    
        getBlogs()
                  .then(({data}) => setBlogs(data))
                  .catch((error)=> console.log(error))
  },[])
  return/*html*/`
  <div id="bodyBlog">
    <header class="header" id="header">
    <nav class="nav">
    <p>
      <ul class="nav__links">
          <li class="nav__item">
            <a class="nav__link" id="btn-home"href="/"><ion-icon name="home-outline"></ion-icon></a>
          </li>
      </ul>
    </nav>
    </header>
    ${blogs.map((blog)=>{
        return/*html*/`
        <div class="main-blog" id="#text">
          <h1>${blog.name}</h1>
          <p class="info">Author:${blog.author} ${blog.time}</p>
          <div class="body-blog">
          <img src="${blog.thumbnail}" alt="">
          ${blog.desc}
          </div>
        </div>
        `
      })}
</div>
  `
}

export default BlogPage
