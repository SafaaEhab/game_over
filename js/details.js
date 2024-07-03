/// <reference types="../@types/jquery"/>
let details = "";
export class Details {
  constructor(id) {
    this.getDetails(id);
  }
  async getDetails(id) {
    const loading = document.querySelector(".spinnerr");
    loading.classList.replace("d-none","d-flex");
    const url = `https://free-to-play-games-resbase.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "34ad6a04a9msh2c9812247aab354p1dfcd0jsn27f4e282cf93",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      this.displayDet(result);
      loading.classList.replace("d-flex","d-none");
    } catch (error) {
      console.error(error);
    }
  }
  displayDet(res) {
    details = `
     <div class="col-md-4 mt-5">
                  <img src="${res.thumbnail}" class="w-100" alt="">
               </div>
               <div class="col-md-8 mt-5  fw-bold">
                  <h3 class="text-warning">Title : <span>${res.title}</span></h3>
                  <p class="text-white">Category: <span>${res.genre}</span></p>
                  <p class="text-white">Platform: <span>${res.platform}</span></p>
                  <p class="text-white">Status: <span>${res.status}</span></p>
                  <p class="text-white">${res.description}</p>
                    <a class="btn btn-outline-warning" target="_blank" href="${res.game_url}">Show Game</a>
               </div>
        `;
    document.querySelector("#details").innerHTML = details;
  }
}

let detail = new Details();

$("#btnClose").on("click", function (event) {
  document.querySelector("main").classList.remove("d-none");
  document.querySelector(".details").classList.add("d-none");
});
