// Displays your table number at the top of the screen.
//The original plan was to have the user scan a code to bring up their table number
// but our current abilities only allow us to have the user search for the number manually.

let tableNum = localStorage.getItem('tableNum')
window.onload = function(e) {
    e.preventDefault()
    document.getElementById('tableNum').innerHTML = tableNum
}