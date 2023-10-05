// Write your solution in this file!

var customerName = "bob"

function upperCaseCustomerName(){
  const capital = customerName.toUpperCase()
  customerName = capital
}

function setBestCustomer(){
  bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob'
}

const leastFavouriteCustomer = 'bob'
function changeLeastFavoriteCustomer(){
  leastFavouriteCustomer = 'jim'
}