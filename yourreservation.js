var email = localStorage.getItem("email", email);
db.collection("user").doc(email).get().then(function (e) {
    document.getElementById("data1").innerHTML = e.data().reservations.RestaurantName
    document.getElementById("data2").innerHTML = e.data().reservations.Name
    document.getElementById("data3").innerHTML = e.data().reservations.Guests
    document.getElementById("data4").innerHTML = e.data().reservations.Date
    document.getElementById("data5").innerHTML = e.data().reservations.Time
    document.getElementById("data6").innerHTML = e.data().reservations.Phone
    document.getElementById("data7").innerHTML = e.data().reservations.Requests
});