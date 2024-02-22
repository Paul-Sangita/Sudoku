var numSelected = null;
var tileSelected = null;
var errors = 0;
var flag = 0;
var board = [
    "--74916-5",
    "2---3-6-9",
    "-----7-1-",
    "-568----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution=[
    "387491625",
    "241538679",
    "569327418",
    "756819234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function(){
    setGame();
}

function setGame(){
    //digits 1- 9
   
    for(let i = 1; i<=9; i++){
        //<div id= "1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i;
        number.innerText=i;
        number.classList.add("number");
        number.addEventListener("click",selectNumber);
        //console.log(i)
        //const dg = document.getElementById("digits");
        document.getElementById("digits").appendChild(number); //careful
       
    }

    //board 9X9
    for(let r = 0;r<9;r++){
        for(let c=0;c<9;c++){
            let tile=document.createElement("div");
            tile.id=r.toString()+"-"+c.toString();
            if(board[r][c] != "-" && flag==0){
            tile.innerText = board[r][c];
            tile.classList.add("tile-start");
            }
            if(r == 2|| r == 5){
                tile.classList.add("horizontal-line");
            }
            if(c == 2|| c == 5){
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click",selectTile);
            tile.classList.add("tile");
            document.getElementById("board").appendChild(tile); //careful
        }
    }
}

function selectNumber(){
    if(numSelected != null){
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile(){
    if(numSelected){
        if(this.innerText != ""){
            return;
        }
        //splits from [0-1]
        let coords = this.id.split("-");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if(solution[r][c] == numSelected.id){
            this.innerText= numSelected.id;
        }
        else{
            errors += 1;
            document.getElementById("errs").innerText = errors;
        }
    }
}

function reset() { 
    location.reload(); 
    
} 

function autoSolve() { 
   //window.onload();
   helper();
} 
function helper() { 
    for(let r = 0;r<9;r++){
        for(let c=0;c<9;c++){
            console.log(flag);
            let tile=document.getElementById("board").firstElementChild;
            tile.id=r.toString()+"-"+c.toString();
            tile.innerText = solution[r][c];
            tile.classList.add("tile");
            document.getElementById("board").appendChild(tile); //careful
        }
    }
    
} 

