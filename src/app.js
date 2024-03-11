/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  getRandomCard();
};

let nums = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["♦", "♥", "♠", "♣"];

function getRandomCard() {
  let numIndex = Math.floor(Math.random() * nums.length);
  let suitsIndex = Math.floor(Math.random() * suits.length);

  const cardElement = document.querySelector(".card");
  cardElement.classList = "card " + suits[suitsIndex];
  const suitsElement = suits[suitsIndex];
  const numElement = nums[numIndex];
  const header = cardElement.querySelector(".header-card");
  const footer = cardElement.querySelector(".footer-card");
  const value = cardElement.querySelector(".num-card");

  header.textContent = suitsElement;
  footer.textContent = suitsElement;
  value.textContent = numElement;
}
const button = document.querySelector("button");
button.addEventListener("click", function() {
  getRandomCard();
});

const timer = () => {
  getRandomCard();
};
setInterval(timer, 10000);
