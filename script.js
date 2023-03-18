'use strict'


let gridCell = document.querySelectorAll('.cell') ;

let icon = document.querySelectorAll('.fa-solid')   ;

let playerOneScore = document.querySelector('.score1') ; 


let playerTwoScore = document.querySelector('.score2') ; 


let tieScore = document.querySelector('.tieScore') ; 

let arrow = document.querySelector('.arrow')  ;

let reset = document.querySelector('.reset')  ;



/* Winner window */

let winnerWindow = document.querySelector('.winner-window') ; 

let closeWindow = document.querySelector('.fa-circle-xmark') ; 

let winnerText = document.querySelector('.winnerText') ; 



/* Change Arrow */

function changePlayerOne () {
arrow.style.left = "80%"  ;
arrow.style.right = "20%" ; 
}


function changePlayerTwo () {
arrow.style.left = "20%" ; 
arrow.style.right = "80%" ; 
}


/* remove all x and Os */
function clearGrid ()  {

  changePlayerTwo()  ;
  
  for(let i = 0 ;  i < gridCell.length ; i++) {
    icon[i].classList.remove('fa-x') ;
    icon[i].classList.remove('fa-o') ;
    gridCell[i].style.background = "white" ; 
  }
  
  clickcounter = 0 ; 

  x = true  ;
  o = false ; 
}



/* Reset Function */

function resetGame ()  {

  clearGrid() ; 

  playerOneScore.textContent = 0 ; 
  playerTwoScore.textContent = 0 ;
  tieScore.textContent = 0  ;

  playerOne = 0  ; 
  playerTwo = 0  ;
  tscore = 0 ; 

}


  
  
   /* Reset button */
  
  reset.addEventListener('click' , function() {

  resetGame() ;

  });



    let win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ] ; 


    let winnerX = false , winnerO = false  ,  playerOne = 0 , playerTwo = 0 ; 
  
    function xWinner () {

      for(let i = 0 ; i < win.length ; i++) {

        const [a , b , c] = win[i] ; 

        if(icon[a].classList.contains('fa-x') && icon[b].classList.contains('fa-x') && icon[c].classList.contains('fa-x') ) { 
          gridCell[a].style.background = "rgb(78, 217, 78)" ;   
          gridCell[b].style.background = "rgb(78, 217, 78)" ;   
          gridCell[c].style.background = "rgb(78, 217, 78)" ;  
          winnerX = true ; 
          playerOne++ ; 
      } 

      }
    }
    



function oWinner () {

  for(let i = 0 ; i < win.length ; i++) {

    const [a , b , c] = win[i] ; 

    if(icon[a].classList.contains('fa-o') && icon[b].classList.contains('fa-o') && icon[c].classList.contains('fa-o') ) { 
      gridCell[a].style.background = "rgb(78, 217, 78)" ;   
      gridCell[b].style.background = "rgb(78, 217, 78)" ;   
      gridCell[c].style.background = "rgb(78, 217, 78)" ;  
      winnerO = true ; 
      playerTwo++ ; 
      
  } 

  }

}



closeWindow.addEventListener('click' , function () {

winnerWindow.style.display = "none" ; 

});




let x = true , o = false , clickcounter = 0  , tscore = 0  ;

for (let i = 0; i < gridCell.length; i++) {


      gridCell[i].addEventListener('click', function () {

           


            /* put x  */
      if(x &&  !icon[i].classList.contains('fa-o') && !icon[i].classList.contains('fa-x')) {
         x =  false  ; 
         o = true ;
        icon[i].classList.add('fa-x');
        changePlayerOne() ; 
        clickcounter++ ;  /* counter for tie  */
      }

        /* put o */
      else if(o && !icon[i].classList.contains('fa-x') && !icon[i].classList.contains('fa-o')){
        o = false ; 
        x = true ; 
        icon[i].classList.add('fa-o')  ;
        changePlayerTwo() ; 
        clickcounter++ ;  /* counter for tie  */
      }


      /* Winning for X */

      xWinner()  ;
    
      /* Winning for O */
      
      oWinner()  ;


      /* Tie */

      if(clickcounter === 9 && !winnerO && !winnerX) {
        setTimeout(function () {
          tscore++ ;
          tieScore.textContent = tscore ; 
            
          winnerText.textContent = "This Game is a Tie !"  ;
          
          winnerWindow.style.display = "block" ; 
         
          clickcounter = 0  ; 

          clearGrid() ;   

        } , 150)  ;
      }

      

      /* if x wins */
      if(winnerX) {
        setTimeout(function () {
         
          playerOneScore.textContent = playerOne ; 

      

          winnerText.textContent = "Player One won !"  ;
          
          winnerWindow.style.display = "block" ; 
          
          clickcounter = 0  ;

          winnerX = false ; 
          clearGrid() ;   

        } , 150)  ;
      }


        /* if o wins */
        if(winnerO) {
          setTimeout(function () {

            playerTwoScore.textContent = playerTwo ; 

            winnerText.textContent = "Player Two won !"  ;
          
            winnerWindow.style.display = "block" ; 
          
            clickcounter = 0 ; 

            winnerO = false ; 

            clearGrid()  ;

          } , 150) ;
        }

      

  });

}














