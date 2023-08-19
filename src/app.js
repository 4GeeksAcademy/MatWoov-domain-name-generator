/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let htmlText = "";

  for (let pronouns of pronoun) {
    for (let adjs of adj) {
      for (let nouns of noun) {
        let element = "<li>" + pronouns + adjs + nouns + ".com" + "</li>";
        htmlText += element;
      }
    }
  }
  let myList = document.querySelector("#domain");
  myList.innerHTML = htmlText;
};
