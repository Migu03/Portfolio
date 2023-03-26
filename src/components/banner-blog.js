import { useEffect } from "@/lib"

const bannerBlog = () => {
    useEffect(()=>{
        const stars = document.querySelector("#stars")
        const moon = document.querySelector("#moon")
        const mountains_behind = document.querySelector("#mountains_behind")
        const mountains_front = document.querySelector("#mountains_front")

        window.addEventListener('scroll',function(){
          const value = window.scrollY
          stars.style.left= value * 0.25 + 'px';
          moon.style.top= value * 1.05 + 'px'
          mountains_behind.style.top= value * 0.5 + 'px'
          mountains_front.style.top= value * 0 + 'px'
        })
      },[])
  return/*html*/`
    <section>
        <img src="/images/stars.png" id="stars" alt="">
        <img src="/images/moon.png" id="moon" alt="">
        <img src="/images/mountains_behind.png" id="mountains_behind" alt="">
        <img src="/images/mountains_front.png" id="mountains_front" alt="">
    </section>
  `
}

export default bannerBlog