const searchForm = document.querySelector(".searchForm");
const searchInput = document.querySelector(".input-search");
const searchResult = document.querySelector(".resultImage");
const showMore = document.querySelector(".showMore");
const accessKey = "oMnlJ1rWMRxZi19rqYvF8ijn4n9k4w8_Ii-8SSW7Vhg";

let keyword = "";
let page = 1;

async function searchImage() {
  keyword = searchInput.value;
  const urlApi = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

  const response = await fetch(urlApi);
  const data = await response.json();
  console.log(data);
}
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});
