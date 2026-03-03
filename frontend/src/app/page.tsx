import styles from "./page.module.css";
import qs from "qs";

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
        <div
          className={styles.background}
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>

          <div
            className={styles.hero}
            >
            <h1>{HeroText}</h1>
            <p>{HeroDescription}</p>
          </div>
        </div>

      </main>
    </div>
  );
}
