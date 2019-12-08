
// Create a function for searching for a restaurant by name, 
// we get the information about each restaurant stored in our database.
// The information is displayed on a table that you can click on to bring you to a reservation form.
function filterByName() {
    //Create a table with two collumns, one for name of restaurant, and one for area.
    document.getElementById('board').innerHTML = '<tr><th>Name</th><th>Area</th></tr>';
    
    //Get restaurant information
    db.collection("Restaurants").orderBy("Name", "desc").get().then((snapshot) => {
        
        // Go through each restaurant document in the database and collect its name and location
        snapshot.forEach((doc) => {
            let RestName = doc.data().Name;
            let url = "reservationform.html?" + RestName;

            // Add rows to the table with the each restaurant's information.
            document.getElementById('board').innerHTML += '<tr>' +
                '<td id=' + RestName + '>' + `<a href=${url}>` + doc.data().Name + '</button>' + '</td>' +
                '<td>' + doc.data().Area + '</td>' +
                '</tr>';
        })
    })
}

// Call the function
filterByName()