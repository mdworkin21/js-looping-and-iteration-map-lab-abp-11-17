// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(drivers){return drivers.toLowerCase()})
}


function nameToAttributes(drivers){
   let fistLast = drivers.map(function (driver){
    let fName = driver.split(" ")[0]
    let lName = driver.split(" ")[1]
      return {firstName: fName, lastName: lName}

})
  return firstLast
}

function attributesToPhrase(drivers){
  return drivers.map(function(drivers){return `${drivers['name']} is from ${drivers['hometown']}`
    }
)}
