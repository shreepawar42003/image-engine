const accessKey = "Ws4ImH0wvmiREsmYO3hy8N5VXe2XfbZffTbXDt60ewU";
const searchForm = document.getElementById("search-form");
const seachbox = document.getElementById("serch-box");
const seachresult = document.getElementById("seach-result");
const  showmorebtn = document.getElementById("show_more-btn");

// Ws4ImH0wvmiREsmYO3hy8N5VXe2XfbZffTbXDt60ewU

let keyword ="";
let page = 1;

async function seachImage(params) {
     keyword = seachbox.value;
     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

     const response = await fetch(url);
     const data =  await response.json();  

     if(page ===1){
        seachresult.innerHTML =" ";
     }

      const results = data.results;
      results.map((result)=>{
          const image = document.createElement("img");
          image.src = result.urls.small;
          const imagelink = document.createElement("a");
          imagelink.href = result.links.html;
          imagelink.target = "_blank";

          imagelink.appendChild(image);
          seachresult.appendChild(imagelink);
      })
      showmorebtn.style.display = "block";
}
searchForm.addEventListener("submit" , (e)=>{
    e.preventDefault();
    page = 1;
    seachImage();
});
showmorebtn.addEventListener("click" , ()=>{
    page++;
    seachImage();
})