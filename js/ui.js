/// <reference types="../@types/jquery"/>

export class ui {
  display(res) {
    let games = "";
    for (let item = 0; item < res.length; item++) {
      games += `
            <div class="col-xl-3 col-lg-4 col-md-6 bg-transparent">
                <div title="${res[item].title}" id="${
        res[item].id
      }" class="h-100 card cord bg-transparent rounded wow flipInX " data-wow-offset="50" ">
                  <div class="card-body">
                    <img src="${
                      res[item].thumbnail
                    }" class="w-100 rounded" alt="${res[item].title}">
                <div class="pt-4 d-flex align-items-center justify-content-between">
                    <p class="m-0 text-white fw-bolder">${res[item].title}</p>
                    <button class="btn btn-primary py-1 px-2 btnMade">Free</button>
                </div>
                <div class="">
                    <p class="m-0 w-100 pt- fst-italic text-break text-center lead text-light text-opacity-50 fw-bold fs-6">${res[
                      item
                    ].short_description
                      .split(" ", 9)
                      .join()}</p>
                </div>
                                </div>
                <div class="card-footer  d-flex justify-content-between">
                    <p class="badge p-2 m-0 ">${res[item].genre}</p>
                    <p class="badge p-2 m-0 ">${res[item].platform}</p>
                </div>
            </div>
          </div>
            `;
    }
    document.querySelector(".games").innerHTML = games;
  }
}



