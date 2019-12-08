var queryString = decodeURIComponent(window.location.search);
var queries = queryString.split('?');
var restName = queries[1]
document.getElementById("restname").innerHTML = restName
    // Gets input values from reservation form and stores into Firebase database.
    // creates a new document in Reservations collection with reservation name and contents of number of guests,
    // time and date.

// Attach a function to the submit button that collects form data.
document.getElementById('ReservationForm').addEventListener('submit', processReservation)
var email = localStorage.getItem("email", email);


// Get information from form
function processReservation(e) {
    e.preventDefault();
    let resname = document.getElementById('name').value
    let guests = parseInt(document.getElementById('guests').value)
    let date = document.getElementById('date').value
    let time = document.getElementById('time').value
    let phone = document.getElementById('phone').value
    let req = document.getElementById('req').value


    //Put information into local storage.
    localStorage.setItem("name", resname);
    localStorage.setItem("guests", guests);
    localStorage.setItem("date", date);
    localStorage.setItem("time", time);
    localStorage.setItem("phone", phone);
    localStorage.setItem("req", req);
    localStorage.setItem('email', email)


    // Store information in database
    db.collection('user').doc(email).set({
        name: name,
        email: email,
        reservations: {
            RestaurantName: restName,
            Name: resname,
            Guests: guests,
            Time: time,
            Date: date,
            Requests: req,
            Phone: phone,
        }
    })

    // Automatically redirect to a confirmation page
    document.location.href='myreservation.html'
}