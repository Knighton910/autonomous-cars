//var xhr = new XMLHttpRequest();
//xhr.onreadystatechange = function(){
//    if(xhr.readyState === 4 && xhr.status === 200){
//        var cars = JSON.parse(xhr.responseText);
//        var statusHTML = '<ul class="bulleted">';
//        for (var i = 0; i = cars.length; i += 1){
//            if (cars[i].inRoute === true){
//                statusHTML += '<li class="parked">';
//            } else {
//                statusHTML += '<li class="on-task">';
//            }
//            statusHTML += cars[i].car;
//            statusHTML += '</li>';
//        }
//        statusHTML += '</ul>';
//        document.getElementById('carList').innerHTML = statusHTML;
//    }
//};
//xhr.open('GET', '../data/cars.json');
//xhr.send();
//
//// I am the breaker of code && code breaker  && code breaker
//
//var roomCheck = new XMLHttpRequest();
//roomCheck.onreadystatechange = function () {
//    if(xhr.readyState === 4 && roomCheck.status === 200) {
//        var rooms = JSON.parse(roomCheck.responseText);
//        var statusHTML = '<ul class="rooms">';
//        for (var i=0; i<rooms.length; i += 1) {
//            if (rooms[i].available === true) {
//                statusHTML += '<li class="empty">';
//            } else {
//                statusHTML += '<li class="full">';
//            }
//            statusHTML += rooms[i].room;
//            statusHTML += '</li>';
//        }
//        statusHTML += '</ul>';
//        document.getElementById('roomList').innerHTML = statusHTML;
//    }
//};
//roomCheck.open('GET', '../data/rooms.json');
//roomCheck.send();



var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
        var employees = JSON.parse(xhr.responseText);
        var statusHTML = '<ul class="bulleted">';
        for (var i=0; i<employees.length; i += 1) {
            if (employees[i].inoffice === true) {
                statusHTML += '<li class="in">';
            } else {
                statusHTML += '<li class="out">';
            }
            statusHTML += employees[i].name;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
};
xhr.open('GET', '../data/cars.json');
xhr.send();

//  code breaker ===   ======    =======  ======    =======

var roomCheck = new XMLHttpRequest();
roomCheck.onreadystatechange = function () {
    if(xhr.readyState === 4 && roomCheck.status === 200) {
        var rooms = JSON.parse(roomCheck.responseText);
        var statusHTML = '<ul class="rooms">';
        for (var i=0; i<rooms.length; i += 1) {
            if (rooms[i].available === true) {
                statusHTML += '<li class="empty">';
            } else {
                statusHTML += '<li class="full">';
            }
            statusHTML += rooms[i].room;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('roomList').innerHTML = statusHTML;
    }
};
roomCheck.open('GET', '../data/ports.json');
roomCheck.send();


//  challenge
//  we will be using this same file.

// 1. Repeat the same 4 steps of the ajax process.

// 2. the url for the json data is  /data/rooms.json

// 3.  finished product will resemble this

// 4.  The complete html goes inside a div with the id
// of "roomList"

//  if you need help go to teacher notes.

// <ul class = "rooms">
// <li class = full"> </li>
// <li class = empty"> </li>
// <li class = full"> </li>
// <li class = full"> </li>
// <li class = empty"> </li>
// <li class = empty"> </li>
// </ul>

