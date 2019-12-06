let tableNum = localStorage.getItem('tableNum')
window.onload = function(e) {
    e.preventDefault()
    document.getElementById('tableNum').innerHTML = tableNum
}