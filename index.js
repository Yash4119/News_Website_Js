console.log("this is index js file ");

// API key is :-

// TOP HEADLINES API LINK :- https://newsapi.org/v2/top-headlines?country=in&apiKey=e64a6dbdd45943e2a7e30384795a91f6

// intialise the news api parameters

let apiKey = "e64a6dbdd45943e2a7e30384795a91f6";
let country_code = "in";

// Grab the new container

let accordian = document.getElementById("accordionExample");

// create the ajax get request

const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=${country_code}&apiKey=${apiKey}`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;

    let newsHTML = "";

    articles.forEach((element,index) => {
      let news;
      if(index==0){
        news = `<div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                        <b>Breaking News ${index+1}:-</b> ${element["title"]}
                        </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>${element["content"]}.....</strong>
                            <a href="${element["url"]}" target="_blank"> Read More Here</a>
                        </div>
                        </div>
                    </div>`;
      }
      else{
        news = `<div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                           <b>Breaking News ${index+1}:-</b> ${element["title"]}
                        </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
                        <div class="accordion-body ">
                            <strong>${element["content"]}.....</strong>
                            <a href="${element["url"]}" target="_blank"> Read More Here</a>
                        </div>
                        </div>
                    </div>`;
      }
      newsHTML += news;
    });
    accordian.innerHTML = newsHTML;
  } else {
    console.log("Some Error occurued");
  }
};

xhr.send();
