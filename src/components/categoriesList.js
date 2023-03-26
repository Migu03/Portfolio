import { useEffect } from "@/lib"

const categoriesList = ({categories, onClick}) => {
    useEffect(()=>{
        const btns = document.querySelectorAll("#list-cate");
        for (const btn of btns) {
            btn.addEventListener("click", function () {
                const id = btn.dataset.id;
                onClick(id);
            });
        }
    })
  return/*html*/`
    <ul  id="menu-cate">
    ${categories.map(({name,id})=>{
        return`
        <li><button data-id="${id}" class="badge badge-sm bg-info text-decoration-none " id="list-cate">${name}</button></li>
        `
    }).join("")}
    </ul>
  `
}

export default categoriesList