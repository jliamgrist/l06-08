
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

function renderHeader() {
  const headerRow = document.createElement('tr');
  storeProfilesTable.appendChild(headerRow);

  const header = document.createElement('th');
  header.textContent = "Store Locations";
  headerRow.appendChild(header);

  for (let i = 0; i < storeHours.length; i++) {
    const headerHour = document.createElement('th');
    headerHour.textContent = storeHours[i];
    headerRow.appendChild(headerHour);  
  }

  const headerTotal = document.createElement('th');
  headerTotal.textContent = "Totals";
  headerRow.appendChild(headerTotal);
}
renderHeader();

function renderAll() {
  for (let i = 0; i < allStoreObjects.length; i++) {
    allStoreObjects[i].getNumOfCookiesPerHour();
    allStoreObjects[i].render();

  }
}



function Store(name, min, max, avgCookiesPerSale) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.numOfCookiesPerHour = [];
  this.numOfSales = [];
  this.totalNeededDailyPerStore = 0;

}

// Form

let form1 = document.getElementById("form1");
form1.addEventListener('submit', handleSubmit);


function handleSubmit(event) {
  event.preventDefault();
  let storeNameInput = event.target.storeNameInput.value;
  let minInput = event.target.minCustomers.value;
  let maxInput = event.target.maxCustomers.value;
  let avgCookiesInput = event.target.avgCookiesInput.value;
  let newStore = new Store(storeNameInput, minInput, maxInput, avgCookiesInput);
console.log(newStore);
allStoreObjects.push(newStore);
newStore.getNumOfCookiesPerHour();
newStore.render();
renderFooterTotal();
form1.reset();
}

function renderFooterTotal() {
  const footerRow = document.createElement('tr');
  storeProfilesTable.appendChild(footerRow);

  const footerTitle = document.createElement('td');
  footerTitle.textContent = "Hourly Totals:";
  footerRow.appendChild(footerTitle);

  for (let i = 0; i < storeHours.length; i++) {
    let totalHourly = 0;
    for (let j = 0; j < allStoreObjects.length; j++) {
      totalHourly += allStoreObjects[j].numOfCookiesPerHour[i];
      
    } 
   const footerTotal = document.createElement('td');
   footerTotal.textContent = totalHourly;
   footerRow.appendChild(footerTotal);
  }


  
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

  const rowElem1 = document.createElement('tr');
  storeProfilesTable.appendChild(rowElem1);

  const rowTDlocation = document.createElement('td');
  rowTDlocation.textContent = this.name;
  rowElem1.appendChild(rowTDlocation);

  for (let index = 0; index < this.numOfCookiesPerHour.length; index++) {
    const rowTDhourly = document.createElement('td');
    rowTDhourly.textContent = this.numOfCookiesPerHour[index];
    rowElem1.appendChild(rowTDhourly);
    
  }
  const rowTDtotal = document.createElement('td');
  rowTDtotal.textContent = this.totalNeededDailyPerStore;
  rowElem1.appendChild(rowTDtotal);

}


// EXECUTABLE CODE

let seattle = new Store("Seattle", 23, 65, 6.3);
let tokyo = new Store("Tokyo", 3, 24, 1.2);
let dubai = new Store("Dubai", 11, 38, 3.7);
let paris = new Store("Paris", 20, 38, 2.3);
let lima = new Store("Lima", 2, 16, 4.6);


// push new object in that array - for easy storage - this will help with labs this week
allStoreObjects.push(seattle, tokyo, dubai, paris, lima);


renderAll();
renderFooterTotal();