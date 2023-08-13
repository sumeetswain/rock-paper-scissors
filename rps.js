function input1(value) {
    a = value
}
function input2(value) {
    b = value
}

function winner() {
    if (a == "Rock") {
        if (b == "Rock") {
            alert("TIE")
        }
        else if (b == "Paper") {
            alert("Player 2 Wins")
        }
        else if(b=="Scissors"){
            alert("Player 1 Wins")
        }
    }
    if (a == "Scissors") {
        if (b == "Rock") {
            alert("Player 2 Wins")
        }
        else if (b == "Paper") {
            alert("Player 1 Wins")
        }
        else if(b=="Scissors"){
            alert("TIE")
        }
    }
    if (a == "Paper") {
        if (b == "Rock") {
            alert("Player 1 Wins")
        }
        else if (b == "Paper") {
            alert("TIE")
        }
        else if(b=="Scissors"){
            alert("Player 2 Wins")
        }
    }
    a = " "
    b = " "
    form1.style.display = 'grid';
    form2.style.display = 'none';

}
function hide() {

    if (form1.style.display != 'none') {
        form1.style.display = 'none';
        form2.style.display = 'grid';
    }
    else {
        form1.style.display = 'grid';
        form2.style.display = 'none';
    }
}