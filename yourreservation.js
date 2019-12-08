// Script for displaying a receipt as confirmation after submitting you reservation
//Get email adress from local storage.
var email = localStorage.getItem("email", email);

//User that email to access unique reservation data stored under your account.
db.collection("user").doc(email).get().then(function (e) {

    //Change the cells inside the reservation-summary table to describe the latest reservation you made.
    document.getElementById("data1").innerHTML = e.data().reservations.RestaurantName
    document.getElementById("data2").innerHTML = e.data().reservations.Name
    document.getElementById("data3").innerHTML = e.data().reservations.Guests
    document.getElementById("data4").innerHTML = e.data().reservations.Date
    document.getElementById("data5").innerHTML = e.data().reservations.Time
    document.getElementById("data6").innerHTML = e.data().reservations.Phone
    document.getElementById("data7").innerHTML = e.data().reservations.Requests
});