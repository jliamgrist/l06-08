
'use strict';

// GLOBAL VARIABLES
let storeHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let allStoreObjects = [];

// Window to the DOM
// let storesSelection = document.getElementById('storeProfiles');
let storesSelection = document.getElementById('storeProfilesTable');

// HELPER FUNCTIONS

function randomSalesPerHour(min, max) {
  min = this.min;
  max = this.max;
  return Math.floor(Math.random() * (max - min) + min);
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderAll() {
  for (let i = 0; i < allStoreObjects.length; i++) {
    allStoreObjects[i].getNumOfCookiesPerHour();
    allStoreObjects[i].render();

    console.log(allStoreObjects);
  }
}

// console.log(randomSalesPerHour);

function Store(name, min, max, avgCookiesPerSale) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.numOfCookiesPerHour = [];
  this.numOfSales = [];
  this.totalNeededDailyPerStore = 0;

}

// MOVE ALL METHODS INTO PROTOTYPE OBJECT



Store.prototype.calculateSalesPerHour = function () {
  for (let index = 0; index < storeHours.length; index++) {
    this.numOfSales.push(random(this.min, this.max));
  }
};
Store.prototype.getNumOfCookiesPerHour = function () {
  this.calculateSalesPerHour();
  for (let index = 0; index < storeHours.length; index++) {
    let hourlyCookies = Math.floor(this.numOfSales[index] * this.avgCookiesPerSale);
    this.numOfCookiesPerHour.push(hourlyCookies);
    this.totalNeededDailyPerStore += hourlyCookies;
  }
}

Store.prototype.render = function () {
  // const article = document.createElement('article');
  // storesSelection.appendChild(article);

  // const h2 = document.createElement('h2');
  // h2.textContent = this.name;
  // article.appendChild(h2);

  // const p = document.createElement('p');
  // p.textContent = 'This store is located in: ' + this.name;
  // article.appendChild(p);

  // const ul = document.createElement('ul');
  // article.appendChild(ul);

  // for (let i = 0; i < this.numOfCookiesPerHour.length; i++) {
  //   const li = document.createElement('li');
  //   li.textContent = this.numOfCookiesPerHour[i];
  //   ul.appendChild(li);
  // }
  // const total = document.createElement('li');
  // total.textContent = this.totalNeededDailyPerStore;
  // ul.appendChild(total);

  // TABLE

  // const row1 = document.createElement('th');
  // row1.textContent = this.storeHours;
  // storesSelection.appendChild(row1);
    


  const row1 = document.createElement('tr');
  storeProfilesTable.appendChild(row1);

  const row1TH = document.createElement('th');
  row1TH.textContent = "Location"
  row1.appendChild(row1TH);

  const row1TH2 = document.createElement('th');
  row1TH2.textContent = "6am";
  row1.appendChild(row1TH2);

  const row1TH3 = document.createElement('th');
  row1TH3.textContent = "7am";
  row1.appendChild(row1TH3);

  const row1TH4 = document.createElement('th');
  row1TH4.textContent = "8am";
  row1.appendChild(row1TH4);

  const row2 = document.createElement('tr');
  storeProfilesTable.appendChild(row2);

  const locations = document.createElement('th');
  locations.textContent = this.name;
  row2.appendChild(locations);



}


// EXECUTABLE CODE

let seattle = new Store("Seattle", 23, 65, 6.3);
let tokyo = new Store("Tokyo", 3, 24, 1.2);
console.log(seattle.numOfCookiesPerHour[0]);

// push new object in that array - for easy storage - this will help with labs this week
allStoreObjects.push(seattle, tokyo);

renderAll();