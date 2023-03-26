import { getIntroAll } from "@/api/intro"
import { useEffect, useState } from "@/lib";

const intro = () => {
  const [introAll, setIntroAll] = useState([]);

  useEffect(() => {
    getIntroAll()
      .then(({ data }) => setIntroAll(data))
      .catch((error) => console.log(error));
  }, []);
  return/*html*/`
  <section class="section" id="section--1">
  <div class="section__title">
    <h2 class="section__description">Introduce</h2>
    <h3 class="section__header">
    ${introAll.map(({content})=>{
      return`${content}`
    }
    )}
  </div>
</section>
  `
}

export default intro