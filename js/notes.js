var sem1 = ["BCA 101", "BCA 103", "BCA 105", "BCA 107", "BCA 109"];
var sem2 = ["BCA 102", "BCA 104", "BCA 106", "BCA 108", "BCA 110"];
var sem3 = ["BCA 201", "BCA 203", "BCA 205", "BCA 207", "BCA 209"];
var sem4 = ["BCA 202", "BCA 204", "BCA 206", "BCA 208", "BCA 210"];
var sem5 = ["BCA 301", "BCA 303", "BCA 305", "BCA 307", "BCA 309", "BCA 311", "BCA 313", "BCA 315"];
var sem6 = ["BCA 302", "BCA 304", "BCA 306", "BCA 308", "BCA 310", "BCA 312", "BCA 314", "BCA 316"];

let params = (new URL(document.location)).searchParams;
let sub_id = params.get("id");

document.getElementById("sub-code").innerText = sub_id;

if (sem1.includes(sub_id)) {
    document.getElementById("sem-title").innerText = "Semester 1";
}
else if (sem2.includes(sub_id)) {
    document.getElementById("sem-title").innerText = "Semester 2";
}
else if (sem3.includes(sub_id)) {
    document.getElementById("sem-title").innerText = "Semester 3";
}
else if (sem4.includes(sub_id)) {
    document.getElementById("sem-title").innerText = "Semester 4";
}
else if (sem5.includes(sub_id)) {
    document.getElementById("sem-title").innerText = "Semester 5";
}
else {
    document.getElementById("sem-title").innerText = "Semester 6";
}


var notesData = {};
var notes_collec;
var notes_collec_object;

$.getJSON("https://raw.githubusercontent.com/Xbotics7/Nomtes/master/assets/nomtes7.json", function (data) {

    notesData = data.BCA[sub_id]
    document.getElementById("notes-cont").innerHTML += ` <a class="notesBtn" onclick="openNotes()" href="#">
    <i class="fa fa-sticky-note fa-lg mr-2"></i>
    Notes
    </a>`
    document.getElementById("notes-cont").innerHTML += ` <a class="notesBtn" href='${notesData["Akash_url"]}' target="_blank">
    <i class="fa fa-bookmark fa-lg mr-2"></i>
    Akash
    </a>`
    document.getElementById("notes-cont").innerHTML += ` <a class="notesBtn" href='${notesData["Book_url"]}' target="_blank">
    <i class="fa fa-book fa-lg mr-2"></i>
    Book
    </a>`
    document.getElementById("notes-cont").innerHTML += ` <a class="notesBtn" href='${notesData["Paper_analysis_url"]}' target="_blank">
    <i class="fa fa-file-text-o fa-lg mr-2"></i>
    Paper Analysis
    </a>`
    document.getElementById("notes-cont").innerHTML += ` <a class="notesBtn" onclick="openVideos()" href="#">
    <i class="fa fa-video-camera fa-lg mr-2"></i>
    Videos
    </a>`

    document.getElementById("sub-title").innerText = notesData["SubjectName"];
    notes_collec = notesData["Notes"]
    notes_collec_object = Object.keys(notes_collec);
})

function openNotes() {
    if (notes_collec_object.length <= 1) {

        window.open(notes_collec[notes_collec_object[0]]);
    }
}

