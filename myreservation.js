var name = localStorage.getItem("name")
var guest = localStorage.getItem("guests")
var date = localStorage.getItem("date")
var time = localStorage.getItem("time")
var phone = localStorage.getItem("phone")
var req = localStorage.getItem("req")
var para1 = document.getElementById('para1')
var node1 = document.createTextNode(name);
var node2 = document.createTextNode(guest);
var node3 = document.createTextNode(date);
var node4 = document.createTextNode(time);
var node5 = document.createTextNode(phone);
var node6 = document.createTextNode(req);
var node7 = document.createElement("br")
var node8 = document.createElement("br")
var node9 = document.createElement("br")
var node10 = document.createElement("br")
var node11 = document.createElement("br")

para1.appendChild(node1)
para2.appendChild(node2)
para3.appendChild(node3)
para4.appendChild(node4)
para5.appendChild(node5)
para6.appendChild(node6)