

function popup() {
    document.querySelector("#popup").style.display = "block";
    document.querySelector("body").style.backgroundColor = "grey";

}

function removePopup() {
    document.querySelector("#popup").style.display = "none";
    document.querySelector("body").style.backgroundColor = "white";
}

function checkForFiveBoxes() {
    let boxes = document.querySelectorAll('.master .box').length;

    if (boxes >= 5)
    {
        alert("You have exceeded the number of list items. Please refresh the page.")
        return
    }

}


function addNote() {

    let boxCounter = document.querySelectorAll('.master .box').length;
    if (boxCounter >= 5)
    {
        alert("You have exceeded the number of list items. Please refresh the page.")
        return
        stop
    }
    
    const master = document.querySelector('.master');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const box = document.createElement('p');
    const check = document.createElement('input');


    let note = document.getElementById("newnote").value
    if ( note == "")
    {
        alert('Please enter a message before adding a note.')
        return
    }

    check.className = "checkboxer"
    div1.className = "box";
    div2.className = "check";
    check.type = "checkbox";
    box.className = "todotext";

    

    // adds in HTML elements
    div1.appendChild(box);
    div2.appendChild(check);
    master.appendChild(div1);
    master.appendChild(div2);

    // deals with exiting the popup
    box.innerHTML = note;
    document.querySelector("#popup").style.display = "none";
    document.querySelector("body").style.backgroundColor = "white";
    document.getElementById("newnote").value = "";
    
}







// junkyard of previously attempted code. ==========================
// junkyard of previously attempted code. ==========================
// junkyard of previously attempted code. ==========================
// junkyard of previously attempted code. ==========================
// junkyard of previously attempted code. ==========================

// fix media queries add to website.
//Last thing to do is strikeout text everytime a button is pressed, because I already
//messed it up passed repair. Roll with the punches.

// if that doesn't work replace the checkbox with a checkmark. Call it a day.


//TRY THIS OUT!! 
// onclick="this.style.display='none'

// function emergency() {
//     alert("hey ho kids.")
// }





// const box = class Box {
//     constructor(content){
//         this.content = content;
//     }
// }


// function addBox() {
//     document.getElementById("box2").style.display = "grid";
//     document.getElementById("check2").style.display = "block";
//     document.querySelector("#popup").style.display = "none";
//     document.querySelector("body").style.backgroundColor = "white";
// }



// function removeNote() {
//     let box = document.querySelector(".box");
//     let check = document.querySelector(".check");
//     box.style.display = "none";
//     check.style.display = "none";
// }