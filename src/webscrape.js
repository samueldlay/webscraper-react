export default async function logSearchResults(query) {
  return await getSearchResults(query);
}

function getURL(query = "") {
  const corsProxy = "https://cors-anywhere.herokuapp.com/";
  const baseSearchURL = "https://www.pacehighschool.net/faculty-and-staff";
  const encodedQuery = encodeURIComponent(query);
  return corsProxy + baseSearchURL + encodedQuery;
}

async function getSearchResults(query) {
  try {
    const res = await fetch(getURL(query));
    if (res.ok) {
      const text = await res.text();
      // console.log(text)
      const document2 = document.createElement("div");
      document2.innerHTML = text;
      ["script", "style"].forEach(tag =>
        document2.querySelectorAll(tag).forEach(el => el.remove())
      );

      const [facultyListEl, supportListEl] = [
        ...document2.querySelectorAll("div")
      ].filter(
        div =>
          div.getAttribute("id") &&
          div.getAttribute("id").includes("itemsContainer")
      ); //returning an array of two elements

      const facThumbnailSize = [...facultyListEl.querySelectorAll("div")]
        .filter(
          div =>
            div.getAttribute("data-displayer-uri") &&
            div.getAttribute("data-displayer-uri").includes(".jpg")
        )
        .map(
          imgDiv =>
            `https://static.wixstatic.com/media/${
              imgDiv.dataset.displayerUri
            }/v1/fill/w_128,h_146,al_c,q_80,usm_0.66_1.00_0.01/965962_67f65640c28f41fabb25d6788d3c00d3~mv2.webp`
        );

      const facExpandedSize = [...facultyListEl.querySelectorAll("div")]
        .filter(
          div =>
            div.getAttribute("data-displayer-uri") &&
            div.getAttribute("data-displayer-uri").includes(".jpg")
        )
        .map(
          imgDiv =>
            `https://static.wixstatic.com/media/${
              imgDiv.dataset.displayerUri
            }/v1/fill/w_565,h_706,al_c,q_90,usm_0.66_1.00_0.01/965962_ca782da17d504399b0601d1f9513f516~mv2.webp`
        );

      const supThumbnailSize = [...supportListEl.querySelectorAll("div")]
        .filter(
          div =>
            div.getAttribute("data-displayer-uri") &&
            div.getAttribute("data-displayer-uri").includes("")
        )
        .map(
          imgDiv =>
            `https://static.wixstatic.com/media/${
              imgDiv.dataset.displayerUri
            }/v1/fill/w_128,h_146,al_c,q_80,usm_0.66_1.00_0.01/965962_67f65640c28f41fabb25d6788d3c00d3~mv2.webp`
        );

      const supExpandedSize = [...supportListEl.querySelectorAll("div")]
        .filter(
          div =>
            div.getAttribute("data-displayer-uri") &&
            div.getAttribute("data-displayer-uri").includes("")
        )
        .map(
          imgDiv =>
            `https://static.wixstatic.com/media/${
              imgDiv.dataset.displayerUri
            }/v1/fill/w_565,h_706,al_c,q_90,usm_0.66_1.00_0.01/965962_ca782da17d504399b0601d1f9513f516~mv2.webp`
        );

      const faculty = [...facultyListEl.childNodes]
        .filter(node => node.matches("div"))
        .map((div, i) => {
          const name = div.querySelector("h6").textContent.trim();

          return {
            name,
            imgThumbnail: facThumbnailSize[i],
            imgExpanded: facExpandedSize[i],
            type: "faculty"
          };
        });

      const support = [...supportListEl.childNodes]
        .filter(node => node.matches("div"))
        .map((div, i) => {
          const name = div.querySelector("h6").textContent.trim();
          return {
            name,
            imgThumbnail: supThumbnailSize[i],
            imgExpanded: supExpandedSize[i],
            type: "support"
          };
        });

      const staff = [...faculty, ...support];
      return { staff, text };
    } else throw Error();
  } catch (err) {
    throw new Error('Error fetching data: ', err);
  }
}
