import { getSkills } from "@/api/skills"
import { useEffect, useState } from "@/lib"

const skills = () => {
    const [skills,setSkill] = useState([])
     
    useEffect(()=>{
        getSkills()
        .then(({data}) => setSkill(data))
        .catch((error) => console.log(error))
    },[])

  return/*html*/`
  ${skills.map((skill)=>{
    return/*html*/`
    
        <div class="section-skills-item">
            <ion-icon id="tag-skill" name="logo-${skill.tag}"></ion-icon>
            <p>${skill.name}</p>
        </div>
    `
    }).join("")}
  `
}

export default skills