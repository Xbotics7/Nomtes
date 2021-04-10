
// var selectedSem = [];

let params = (new URL(document.location)).searchParams;
let name = params.get("id");


// switch (name) {
//     case "sem1":
//         selectedSem = sem1;
//         document.getElementById("sem-title").innerText = "Semester 1";
//         break;
//     case "sem2":
//         selectedSem = sem2;
//         document.getElementById("sem-title").innerText = "Semester 2";
//         break;
//     case "sem3":
//         selectedSem = sem3;
//         document.getElementById("sem-title").innerText = "Semester 3";
//         break;
//     case "sem4":
//         selectedSem = sem4;
//         document.getElementById("sem-title").innerText = "Semester 4";
//         break;
//     case "sem5":
//         selectedSem = sem5;
//         document.getElementById("sem-title").innerText = "Semester 5";
//         break;
//     case "sem6":
//         selectedSem = sem6;
//         document.getElementById("sem-title").innerText = "Semester 6";
//         break;
//     default:
//         selectedSem = sem1;
//         break;
// }

var notesData = {};

$.getJSON("https://raw.githubusercontent.com/Xbotics7/NomtesTest/master/assets/nomtes7.json", function (data) {

    notesData = data.BCA[name]
    console.log(notesData["Akash_url"])
  
    document.getElementById("notes").innerHTML += ` <a class="notesBtn" href='${notesData["Akash_url"]}'>
    Akash
    </a>`
    document.getElementById("notes").innerHTML += ` <a class="notesBtn" href='${notesData["Book_url"]}'>
    Book
    </a>`
    document.getElementById("notes").innerHTML += ` <a class="notesBtn" href='${notesData["Paper_analysis_url"]}'>
    Paper Analysis
    </a>`
   
}
)
