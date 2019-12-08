
// Retreive data from the database about each restaurant and order it by
// the location of each restaurant.
function filterByLocation() {
    document.getElementById('board').innerHTML = '<tr><th>Name</th><th>Area</th></tr>';
    
    //Go through every restaurant document and collect it's name and location
    db.collection("Restaurants").orderBy("Area", "desc").get().then((snapshot) => {
        snapshot.forEach((doc) => {
            let RestName = doc.data().Name;
            let url = "reservationform.html?" + RestName;

            // Create a table displaying the restaurant name and location
            document.getElementById('board').innerHTML += '<tr>' +
                '<td id=' + RestName + '>' + `<a href=${url}>` + doc.data().Name + '</button>' + '</td>' +
                '<td>' + doc.data().Area + '</td>' +
                '</tr>';

        })
    })
}

// Call the function
filterByLocation();