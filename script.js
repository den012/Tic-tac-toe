let cells = document.querySelectorAll('.cell');
cells = Array.from(cells);

console.log(cells);

let currentPlayer = "X";

let winCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

var win=false;

let button = document.getElementById('btnr');
button.addEventListener('click',function(){
    win=false;
    cells.forEach(function(cell){
        cell.innerText = "";
        cell.classList.remove("winner");
    })
})

function checkWinner(){
    winCombo.forEach(function(combo){
        let check = combo.every(idx => cells[idx].innerText.trim() == currentPlayer);
        if(check){
            drawWinner(combo);
            win=true;
           // cells.forEach(function(cel){
            //    cel.classList.add('winCell');
           // })
        }
    })
}

function drawWinner(combo){
    combo.forEach(function(idx){
        cells[idx].classList.add("winner");
    })
}

cells.forEach(function(cell){
    cell.addEventListener('click', function(){
        if(win==false){
            if(cell.innerText.trim() != "")
                return;
            cell.innerText = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer == "X" ? "O" : "X";
        }
    })
})


//dark mode

var home = document.getElementById('home');
var about = document.getElementById('about');
var resetButton = document.getElementById('btnr');
function darkMode() {
    document.body.classList.toggle('dark');
    home.classList.toggle('menuDark');
    about.classList.toggle('menuDark');
    resetButton.classList.toggle('resetDark');
    cells.forEach(function(element){
        element.classList.toggle('darkCell');
    });
  }