
var sem1 = ["BCA 101", "BCA 103", "BCA 105", "BCA 107", "BCA 109", "MCAC 101","MCAC 102", "MCAC 103", "MCAC 104", "MCAC 105"];
var sem2 = ["BCA 102", "BCA 104", "BCA 106", "BCA 108", "BCA 110","MCAC 201","MCAC 202", "MCAC 203", "MCAC 204", "MCAE 201"];
var sem3 = ["BCA 201", "BCA 203", "BCA 205", "BCA 207", "BCA 209","MCAC 301","MCAC 302", "MCAE 302", "MCAE 303", "MCAE 309"];
var sem4 = ["BCA 202", "BCA 204", "BCA 206", "BCA 208", "BCA 210","MCAC 401"];
var sem5 = ["BCA 301", "BCA 303", "BCA 305", "BCA 307", "BCA 309", "BCA 311", "BCA 313", "BCA 315"];
var sem6 = ["BCA 302", "BCA 304", "BCA 306", "BCA 308", "BCA 310", "BCA 312", "BCA 314", "BCA 316"];
var selectedSem = [];

let params = (new URL(document.location)).searchParams;
sem_id = params.get("id");
course_id = params.get("course");
console.log(sem_id);
console.log(course_id);
if (course_id == "MCA") {
    document.getElementById("CourseName").innerText = "Master Of Computer Applications";
    document.getElementById("bcaSems").style.display="none"; 
    document.getElementById("semSyllabus").style.display="none";  
}
else{
    document.getElementById("mcaSems").style.display="none";
}

switch (sem_id) {
    case "sem1":
        selectedSem = sem1;
        document.getElementById("sem-title").innerText = "Semester 1";
        document.getElementById("sem-syllabus").href = "https://drive.google.com/file/d/1NHEBDX6abXhIr_LQ9_7bxFPUZaANIRQV/view";
        document.getElementsByClassName("sem-drop-menu")[0].getElementsByClassName("dropdown-item")[0].className += " active";
        break;
    case "sem2":
        selectedSem = sem2;
        document.getElementById("sem-title").innerText = "Semester 2";
        document.getElementById("sem-syllabus").href = "https://drive.google.com/file/d/1z_806K8prZ1XkiHzHJDN1h78YwIflwHt/view";
        document.getElementsByClassName("sem-drop-menu")[0].getElementsByClassName("dropdown-item")[1].className += " active";
        break;
    case "sem3":
        selectedSem = sem3;
        document.getElementById("sem-title").innerText = "Semester 3";
        document.getElementById("sem-syllabus").href = "https://drive.google.com/file/d/18Ztc2JiHaPN08dQOLFaCEjebiKSLEorw/view";
        document.getElementsByClassName("sem-drop-menu")[0].getElementsByClassName("dropdown-item")[2].className += " active";
        break;
    case "sem4":
        selectedSem = sem4;
        document.getElementById("sem-title").innerText = "Semester 4";
        document.getElementById("sem-syllabus").href = "https://drive.google.com/file/d/13z2ldJHVl6OgvuBfNmJ4qEUcJaYVuLzF/view";
        document.getElementsByClassName("sem-drop-menu")[0].getElementsByClassName("dropdown-item")[3].className += " active";
        break;
    case "sem5":
        selectedSem = sem5;
        document.getElementById("sem-title").innerText = "Semester 5";
        document.getElementById("sem-syllabus").href = "https://drive.google.com/file/d/1eTM8sC2TeZkhZbpgdGfqUtVokICH3yeA/view";
        document.getElementsByClassName("sem-drop-menu")[0].getElementsByClassName("dropdown-item")[4].className += " active";
        break;
    case "sem6":
        selectedSem = sem6;
        document.getElementById("sem-title").innerText = "Semester 6";
        document.getElementById("sem-syllabus").href = "https://drive.google.com/file/d/1ncmOwCpqmfWrRL2UTg_C5gN7cWB2HJOv/view";
        document.getElementsByClassName("sem-drop-menu")[0].getElementsByClassName("dropdown-item")[5].className += " active";
        break;
    default:
        selectedSem = sem1;
        document.getElementById("sem-title").innerText = "Semester 1";
        document.getElementById("sem-syllabus").href = "https://drive.google.com/file/d/1NHEBDX6abXhIr_LQ9_7bxFPUZaANIRQV/view";
        document.getElementsByClassName("sem-drop-menu")[0].getElementsByClassName("dropdown-item")[0].className += " active";
        break;
}


var notesData = {};
if(course_id=="BCA"){
    
    $.getJSON("https://raw.githubusercontent.com/Xbotics7/Nomtes/master/assets/nomtes7.json", function (data) {
    
        notesData = data.BCA
        selectedSem.forEach(function (sub) {
            
            document.getElementById("subjects-cont").innerHTML += ` <a class="subject" href='./notes.html?id=${sub}'>
                ${notesData[sub].SubjectName}
                </a>`
                console.log(`${sub}`);
        })
    }
    )
}
else{
    $.getJSON("https://raw.githubusercontent.com/Xbotics7/Nomtes/master/assets/MCA.json", function (data) {

        notesData = data.MCA
        selectedSem.forEach(function (sub) {
            if(notesData[sub]!= null)
            document.getElementById("subjects-cont").innerHTML += ` <a class="subject" href='./notes.html?id=${sub}'>
                ${notesData[sub].SubjectName}
                </a>`
                console.log(`${sub}`);
        })
    }
    )
   
}
