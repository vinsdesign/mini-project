const searchForm = document.querySelector(".searchForm");
const searchInput = document.querySelector(".input-search");
const searchResult = document.querySelector(".resultImage");
const showMore = document.querySelector(".showMore");
const accessKey = "oMnlJ1rWMRxZi19rqYvF8ijn4n9k4w8_Ii-8SSW7Vhg";

let keyword = "";
let page = 1;

async function searchImage() {
  keyword = searchInput.value;
  const urlApi = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(urlApi);
  const data = await response.json();

  console.log(data);
  const results = data.results;
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    const gradient = document.createElement("div");
    gradient.setAttribute("class", "gradient");

    const profile = document.createElement("div");
    profile.setAttribute("class", "profile");

    const imgProfil = document.createElement("img");
    imgProfil.src = result.user.profile_image.large;

    const heading2 = document.createElement("h2");
    heading2.innerHTML = result.user.name;

    const socialMedia = document.createElement("p");
    socialMedia.innerHTML = "@" + result.user.social.instagram_username;

    profile.appendChild(heading2);
    profile.appendChild(socialMedia);
    profile.appendChild(imgProfil);
    gradient.appendChild(profile);
    imageLink.appendChild(gradient);
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
}
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});
