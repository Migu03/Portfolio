import { getCategories } from "@/api/categories"
import categoriesList from "@/components/categoriesList"
import ProjectList from "@/components/ProjectList"
import contact from "@/components/contact"
import intro from "@/components/intro"
import { useEffect,useState } from "@/lib"
import skills from "@/components/skills"


const Home = () => {
  const [projects, setProjects] = useState([]); 
  const [categories,setCategories]= useState([])

  useEffect(() => {
     getCategories()
     .then(({data}) => setCategories(data))
     .catch((error) =>console.log(error))
    var icon = document.querySelector("#icon")
    icon.onclick = function () {
      document.body.classList.toggle("dark-mode")
      if (document.body.classList.contains("dark-mode")) {
        icon.src = "/images/dark.png"
        localStorage.removeItem('darkMode')
      } else {
        icon.src = "/images/sun.png"
        localStorage.setItem('darkMode', true)
      }
    }
    if (localStorage.getItem('darkMode')) {
      document.body.classList.remove("dark-mode")
    } else {
      document.body.classList.add("dark-mode")
    }
  }, [])
  const onHandleClick = (id) => {
    fetch(`http://localhost:3001/categories/${id}?_embed=projects`)
    .then((response) => response.json())
    .then(({ projects }) => setProjects(projects));
}
  return/*html*/ `
  <header class="header" id="header">
    <nav class="nav">
    <div class="nav-left">
      <img src="/images/logo.png" alt="Bankist logo" class="nav__logo" id="logo"
      data-version-number="3.0" />
    </div>
      <ul class="nav__links">
        <li class="nav__item" >
          <a class="nav__link nav__link--btn btn--show-modal" href="./TRANTHIPHUONGCV.pdf" download="CV- Tran Thi Phuong"
            >My Resume</a
          >
        </li>
        <li><img src="/images/dark.png" alt="" id="icon"></li>
      </ul>
    </nav>
    
    <div class="header__title" >
    
      <!-- <h1 onclick="alert('HTML alert')"> -->
      <img
        src="/images/bannerr.png"
        class="header__img"
        alt="Minimalist bank items"
      /> 
      <h1>
        Halo,I am
        <!-- Green highlight effect -->
        <span class="highlight">Phuong</span>
        a <br />
        <span class="highlight">Fontend developer</span>
      </h1>
      <h4>Let me talk to you about PhuongTran!</h4>
      <a href="#section--1"><button class="btn--text btn--scroll-to" >Gooooo &DownArrow;</button></a>
      
    </div>
    <div class="menu-Navigation">
    <nav>
      <ul>
        <a href="#header"><li><ion-icon name="home-outline"></ion-icon> Home</li></a>
        <a href="#section--1"><li><ion-icon name="planet-outline"></ion-icon> Introduce</li></a>
        <a href="#section--2"><li><ion-icon name="document-text-outline"></ion-icon>  Products</li></a>
        <a href="/Blog"><li><ion-icon name="rocket-outline"></ion-icon>  Blog</li></a>
        <a href="#contact"><li><ion-icon name="chatbubbles-outline"></ion-icon>  Contact</li></a>
      </ul>
    </nav>
  </div>
  </header>
  
  ${intro()}
  <section class="section" id="section--2">
    <div class="section__title">
      <h2 class="section__description">My Projects</h2>
      <h3 class="section__header">
      Throughout my career as a developer, I have had the opportunity to work on several exciting projects.
      </h3>
    </div>
    ${categoriesList({categories, onClick: onHandleClick})}
    ${ProjectList({projects})}
     
  </section>
  <div class="section-skill">
        <h2 class="section__description">My Skill</h2>
      <p>
        I have knowledge of programming languages such as Java, C++, C
         and software development-related technologies such as HTML, CSS, and JavaScript,...
        </p>
        <div class="section-skills">
          ${skills()}
        </div>
    </div>
  ${contact()}
  <footer class="footer">
    <ul class="footer__nav">
      <li class="footer__item">
        <a class="footer__link" href="#">Introduce</a>
      </li>
      <li class="footer__item">
        <a class="footer__link" href="#">Products</a>
      </li>
      <li class="footer__item">
        <a class="footer__link" href="#">Blog</a>
      </li>
      <li class="footer__item">
        <a class="footer__link" href="#">Contact</a>
      </li>
    </ul>
    <p class="footer__copyright">
      &copy; Design by PhuongTran
    </p>
  </footer>
  <div class="overlay hidden"></div>

  `
}

export default Home