var sem1 = ["BCA 101", "BCA 103", "BCA 105", "BCA 107", "BCA 109"];
var sem2 = ["BCA 102", "BCA 104", "BCA 106", "BCA 108", "BCA 110"];
var sem3 = ["BCA 201", "BCA 203", "BCA 205", "BCA 207", "BCA 209"];
var sem4 = ["BCA 202", "BCA 204", "BCA 206", "BCA 208", "BCA 210"];
var sem5 = ["BCA 301", "BCA 303", "BCA 305", "BCA 307", "BCA 309", "BCA 311", "BCA 313", "BCA 315"];
var sem6 = ["BCA 302", "BCA 304", "BCA 306", "BCA 308", "BCA 310", "BCA 312", "BCA 314", "BCA 316"];

let params = (new URL(document.location)).searchParams;
let name = params.get("id");

document.getElementById("sub-code").innerText = name;

if(sem1.includes(name))
{
    document.getElementById("sem-title").innerText = "Semester 1"; 
}
else if(sem2.includes(name))
{
    document.getElementById("sem-title").innerText = "Semester 2"; 

}
else if(sem3.includes(name))
{
    document.getElementById("sem-title").innerText = "Semester 3"; 

}
else if(sem4.includes(name))
{
    document.getElementById("sem-title").innerText = "Semester 4"; 

}
else if(sem5.includes(name))
{
    document.getElementById("sem-title").innerText = "Semester 5"; 

}
else
{
    document.getElementById("sem-title").innerText = "Semester 6"; 

}


var notesData = {};

$.getJSON("https://raw.githubusercontent.com/Xbotics7/NomtesTest/master/assets/nomtes7.json", function (data) {

    notesData = data.BCA[name]
    console.log(notesData["Akash_url"])
  
    document.getElementById("notes-cont").innerHTML += ` <a class="notesBtn" href='${notesData["Akash_url"]}'>
    Akash
    </a>`
    document.getElementById("notes-cont").innerHTML += ` <a class="notesBtn" href='${notesData["Book_url"]}'>
    Book
    </a>`
    document.getElementById("notes-cont").innerHTML += ` <a class="notesBtn" href='${notesData["Paper_analysis_url"]}'>
    Paper Analysis
    </a>`
    
    document.getElementById("sub-title").innerText = notesData["SubjectName"];

}
)
