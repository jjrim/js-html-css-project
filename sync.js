// document.getElementById("restaurantbutton").onclick= function(){setTable()};
// function setTable(){
// num = document.getElementById("restaurantsync").value
// localStorage.setItem("tableNum", num)
// document.location.href="tabledetails.html";
// }


// Get imput value and store it in local storage.
  document.getElementById("restaurantbutton").onclick= function(){setTable()};
  function setTable(){
  num = document.getElementById("restaurantsync").value
localStorage.setItem("tableNum", num)
document.location.href="tabledetails.html";
  }

  