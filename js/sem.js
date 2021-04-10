let params = (new URL(document.location)).searchParams;
let name = params.get("id");
console.log(name);

if(name=="BBA"){
    document.getElementById("CourseName").innerText = "Bachelor Of Business Administration";
}

function zoomsite(){
    window.open("https://zoomquilt.org/");
}