import styles from "./page.module.css";
import qs from "qs";
import {Hero} from "@/blocks/Hero/Hero";
import {Catalog} from "@/blocks/Catalog/Catalog";
import {Services} from "@/blocks/Services/Services";

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        'layout.hero-section': {
          populate: {
            HeroBackgroundImage: {
              fields: ['url', 'alternativeText']
            }
          }
        }
      }
    }
  }
}, {
  encodeValuesOnly: true
});

const baseUrl = "http://localhost:1337";

async function getStrapiData(path: string) {
  const url = new URL(path, baseUrl);
  url.search = homePageQuery
  try{
    const response = await fetch(url.href)
    const data = await response.json();
    console.dir(data, {depth: null});
    return data;
  }catch(err){
    console.log(err);
  }
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page")
  const {HeroText, HeroDescription, HeroBackgroundImage} = strapiData.data.blocks[0];
  const backgroundImageUrl = `${baseUrl}${HeroBackgroundImage.url}`;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero backgroundImageUrl={backgroundImageUrl} HeroText={HeroText} HeroDescription={HeroDescription}/>
        <Catalog/>
        <Services/>
      </main>
    </div>
  );
}
