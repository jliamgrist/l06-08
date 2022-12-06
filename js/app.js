let storeHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm","3pm", "4pm", "5pm","6pm", "7pm"];

let objSeattle = {
  min: 23,
  max: 65,
  avgCookiesPerSale: 6.3,
  getNumOfCookiesPerHour: function () {
    for (let index = 0; index < storeHours.length; index++) {
      let calculateCookies = Math.floor(salesPerHour() * this.avgCookiesPerSale)
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

function salesPerHour(min, max) {
  min = objSeattle.min;
  max = objSeattle.max;
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
render(objSeattle);
console.log(render(objSeattle));
// console.log(dataArr);