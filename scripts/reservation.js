const cafelist = document.querySelector('#cafe-list'); // How you target the HTML element with this ID
const form = document.querySelector("#reservation-form"); // How you target the form with this id
<script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-firestore.js"></script>
<script src="scripts/firebase_setup.js"></script>

// create element and render cafe
function renderCafe(doc){
  let li = document.createElement("li");
  let name = document.createElement('span'); 
  let city = document.createElement('span');
  let cross = document.createElement("div");

  li.setAttribute('data-id', doc.id)
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;
  cross.textContent = 'x'; // add x for removing data.

li.appendChild(name);
li.appendChild(city); // make the list using text made from the firebase data.
li.appendChild(cross);


cafelist.appendChild(li); // add the list to the HTML element


//Get all the data from the firestore database
// db.collection("cafe").get().then((snapshot) =>{
//   snapshot.docs.forEach(doc => { //loops through each document after the data has been retreived.
//     renderCafe(doc); // Function I made to display the data on the table
//   })
// })

// get some of the data
// db.collection("cafe").where("city", ">", "N" ).get().then((snapshot) =>{
//   snapshot.docs.forEach(doc => { //loops through each document after the data has been retreived.
//     renderCafe(doc); // Function I made to display the data on the table
//   })
// })

//Will throw an error message with a link to firebase asking you to make a new index first.
db.collection("cafe").where("city", "==", "Tokyo").orderBy("name").get().then((snapshot) =>{
  snapshot.docs.forEach(doc => { //loops through each document after the data has been retreived.
    renderCafe(doc); // Function I made to display the data on the table
  })
})

// allows you to enter data through a form.
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.getElementById('name').value
  let guests = parseInt(document.getElementById('guests').value)
  let date = document.getElementById('date').value
  let time = document.getElementById('time').value
  let phone = document.getElementById('phone').value
  let req = document.getElementById('req').value
  db.collection('user').doc(user.uid).add({
  name: name,
  guest:guests,
  date: date,
  time: time,
  phone: phone,
  req: req,
});
form.name.value = "";
form.city.value = "";
})

//Allows real time updates of the page
// db.collection("cafe").orderBy('city').onSnapshot(snapshot => {
//   let changes = snapshot.docChanges();
//   changes.forEach(change => {
//     if(change.type == 'added'){
//       renderCafe(change.doc)
//     } else if (change.type == 'removed'){
//       let li = cafelist.querySelector('[data-id=' + change.doc.id + ']');
//       cafelist.removeChild(li);
//     }
//   })
  
// })

// document.getElementById('ReservationForm').addEventListener('submit', processReservation)
// function processReservation(e) {
//   e.preventDefault();
  let name = document.getElementById('name').value
  let guests = parseInt(document.getElementById('guests').value)
  let date = document.getElementById('date').value
  let time = document.getElementById('time').value
  let phone = document.getElementById('phone').value
  let req = document.getElementById('req').value

//   localStorage.setItem("name", name);
//   localStorage.setItem("guests", guests);
//   localStorage.setItem("date", date);
//   localStorage.setItem("time", time);
//   localStorage.setItem("phone", phone);
//   localStorage.setItem("req", req);
