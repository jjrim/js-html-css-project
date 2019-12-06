function filterByName() {
    document.getElementById('board').innerHTML = '<tr><th>Name</th><th>Area</th></tr>';
    db.collection("Restaurants").orderBy("Name", "desc").get().then((snapshot) => {
        snapshot.forEach((doc) => {
            let RestName = doc.data().Name;
            let url = "reservationform.html?" + RestName;
            document.getElementById('board').innerHTML += '<tr>' +
                '<td id=' + RestName + '>' + `<a href=${url}>` + doc.data().Name + '</button>' + '</td>' +
                '<td>' + doc.data().Area + '</td>' +
                '</tr>';
        })
    })
}
filterByName()