import { getAllSm } from "@/api/social-media"
import { useEffect, useState } from "@/lib"

const socialMedia = () => {
    const[socialMedia,setSocialMedia]= useState([])

    useEffect(()=>{
        getAllSm()
        .then(({data}) => setSocialMedia(data))
        .catch((error) => console.log(error))
    },[])
  return/*html*/`
    <div class="col-md-9">
        <ul class="social-media">
        ${socialMedia.map((socialMedia)=>{
            return `
            <li><a href="${socialMedia.link}"><i class="fa fa-${socialMedia.tag}"></i></a></li>
            `
        }).join("")}
        </ul>
    </div>
  `
}

export default socialMedia