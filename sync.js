var tableNum = document.getElementById('tableNum').value;
localStorage.setItem("tableNum", tableNum);
document.getElementById('tableinfo').addEventListener('submit', processForm);
function processForm(e) {
    e.preventDefault();
    var tableNum = document.getElementById('tableNum').value;
    localStorage.setItem("tableNum", tableNum);
    window.open('tabledetails.html')
}