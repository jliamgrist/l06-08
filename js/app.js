let storeHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm","3pm", "4pm", "5pm","6pm", "7pm"];

let objSeattle = {
  name: "Seattle",
  min: 23,
  max: 65,
  avgCookiesPerSale: 6.3,
  getNumOfCookiesPerHour: function () {
    for (let index = 0; index < storeHours.length; index++) {
      let calculateCookies = Math.floor(seattleSalesPerHour() * this.avgCookiesPerSale)
      this.numOfCookiesPerHour.push(calculateCookies)
      // console.log(calculateCookies)
    }
  },
  numOfCookiesPerHour: []

}
// console.log(objSeattle.numOfCookiesPerHour);

objSeattle.getNumOfCookiesPerHour();
// console.log(objSeattle);

// random number of customers per hour

function seattleSalesPerHour(min, max) {
  min = objSeattle.min;
  max = objSeattle.max;
  return Math.floor(Math.random() * (max - min) + min);
} 

let objTokyo = {
  name: "Tokyo",
  min: 3,
  max: 24,
  avgCookiesPerSale: 1.2,
  getNumOfCookiesPerHour: function () {
    for (let index = 0; index < storeHours.length; index++) {
      let calculateCookies = Math.floor(tokyoSalesPerHour() * this.avgCookiesPerSale)
      this.numOfCookiesPerHour.push(calculateCookies)
      // console.log(calculateCookies)
    }
  },
  numOfCookiesPerHour: []

}
// console.log(objSeattle.numOfCookiesPerHour);

objTokyo.getNumOfCookiesPerHour();
// console.log(objSeattle);

// random number of customers per hour

function tokyoSalesPerHour(min, max) {
  min = objTokyo.min;
  max = objTokyo.max;
  return Math.floor(Math.random() * (max - min) + min);
} 

// console.log(salesPerHour());

// calculate and store simulated amounts of cookies purchase for each hour

// store the results for each location in a separate array in location object


// display the values of each array to the DOM
// let arrayOfStores = [objSeattle, objTokyo, objDubai, objParis, objLima];
// for (let index = 0; index < arrayOfStores.length; index++) {
//   const element = array[index];
  

function render (storeObject) {
  dataArr = [];
  for (let index = 0; index < storeHours.length; index++) {
    let data = `${storeHours[index]}: ${storeObject.numOfCookiesPerHour[index]}`;
    dataArr.push(data);
  }
  return dataArr;
}
let seattleListItems = render(objSeattle);
let tokyoListItems = render(objTokyo);
console.log(render(objSeattle));
console.log(render(objTokyo));
// console.log(dataArr);


// we need to:
// get (from the DOM) who the parent element is going to be. where am I attaching this new element
const parentElement = document.getElementById('storeProfiles');

// create a new element, or elements, that represent each store
// article
// inside that article, h2 for the name, paragraph with their age, ul and some lis with their interests, image
const article = document.createElement('article');
parentElement.appendChild(article);

const h2 = document.createElement('h2');
h2.textContent = objSeattle.name;
article.appendChild(h2);

const p = document.createElement('p');
p.textContent = 'This store is located in: ' + objSeattle.name;
article.appendChild(p);

const ul = document.createElement('ul');
article.appendChild(ul);

for (let i = 0; i < seattleListItems.length; i++) {
  const li = document.createElement('li');
  li.textContent = seattleListItems[i];
  ul.appendChild(li);
}

// TOKYO

const h2b = document.createElement('h2');
h2b.textContent = objTokyo.name;
article.appendChild(h2b);

const pb = document.createElement('p');
pb.textContent = 'This store is located in: ' + objTokyo.name;
article.appendChild(pb);

const ulb = document.createElement('ul');
article.appendChild(ulb);

for (let i = 0; i < tokyoListItems.length; i++) {
  const lib = document.createElement('li');
  lib.textContent = tokyoListItems[i];
  ulb.appendChild(lib);
}




