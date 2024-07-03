/// <reference types="../@types/jquery"/>
import { ui } from "./ui.js";
import { Details } from "./details.js";
let game = new ui();

let link = document.querySelectorAll(".nav-link");
let loading = document.querySelector(".spinnerr");

export class Games {
  constructor() {
    this.getgames("mmorpg");
    for (let i = 0; i < link.length; i++) {
      link[i].addEventListener("click", (eventInfo) => {
        document.querySelector(".active").classList.remove("active");
        eventInfo.target.classList.add("active");
        this.getgames(eventInfo.target.innerHTML);
      });
    }
  }

  async getgames(category) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    try {
      const response = await api.json();
      game.display(response);
      this.getId();
      loading.classList.replace("d-flex", "d-none");
    } catch (error) {
      console.error(error);
      loading.classList.replace("d-flex", "d-none");
    }
  }

  getId() {
    document.querySelectorAll(".card").forEach((item) => {
      item.addEventListener("click", () => {
         this.show($(item).attr("id"));
      });
   });
  }

  show(detId) {
    new Details(detId);
    document.querySelector("main").classList.add("d-none");
    document.querySelector(".details").classList.remove("d-none");
  }
}
