let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let turnO = true;
let newgame = document.querySelector('#new-btn');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let count = 0; //to check draw
const winpaaterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame = ()=>{
    turnO = true;
    enablebox();
    msgcontainer.classList.add('hide');

}

const withdrow = ()=>{
    msg.innerText='Game was a Draw.';
    msgcontainer.classList.remove('hide');
    disablebox();
}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
         
        // console.log('box was click');
        if(turnO){
            box.innerText = 'O';
            turnO = false;

        }
        else{
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        checkwinner(); 
        count++;
        // let iswinner = checkwinner();
        if(count === 9 && !checkwinner()){
            withdrow();
        } 
        
    })
   
})
const disablebox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enablebox = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner=(winner)=>{
        msg.innerText = `Congratulations, winner is ${winner}`;
        msgcontainer.classList.remove('hide');
        disablebox();
        
}
const checkwinner = ()=>{
    for(let patterns of winpaaterns){
        // console.log(patterns[0],patterns[1],patterns[2]);
        // console.log(
        //     boxes[patterns[0]].innerText,
        //     boxes[patterns[1]].innerText,
        //     boxes[patterns[2]].innerText
        //     );
            let pos1val = boxes[patterns[0]].innerText
            let pos2val = boxes[patterns[1]].innerText
            let pos3val = boxes[patterns[2]].innerText
            if(pos1val != "" && pos2val != "" && pos3val != "")
            {
                if(pos1val === pos2val && pos2val === pos3val){
                    // console.log('winner',pos1val);
                    showwinner(pos1val);
                    
                }
               
                        
            }
                
            
                 
    }
};
newgame.addEventListener('click',resetgame);
resetbtn.addEventListener('click',resetgame);



