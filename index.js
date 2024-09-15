const accesskey = "fw7VHsTqIZ9rXfyOGT_C_YLZcivEg1EjP_N-Axz7tzw";


 const submitForm = document.getElementById("search-form");
 const searchInput = document.getElementById("search-box");
 const submitResult = document.getElementById("search-result");
 const ShowMoreBtn = document.getElementById("show-more-btn");

 let keyword = " ";
 let page = 1;

async function searchImages() {

    keyword = searchInput.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}
    &client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if(page === 1)
    {
        submitResult.innerHTML = "";
    }

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        submitResult.appendChild(imageLink);

        imageLink.className = "images";
    });

    ShowMoreBtn.style.display = "block";
    
}

submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});


ShowMoreBtn.addEventListener("click", function(){
    page++;
    searchImages();

});