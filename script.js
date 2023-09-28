let btn = document.querySelector('#btn-color')
let color = document.querySelector('#color')
let body = document.querySelector('body');
let cod = [];
let letter = ['a','b','c','d','e','f']

btn.addEventListener("click", change)
color.innerText = "#faebd7";
function change(){
    //console.log('ale', ale)
        for(let i = 0; i<6;i++){
            let ale;
            let aleLetter = parseInt(Math.random() * 2)
            if(aleLetter==0){
                ale = parseInt(Math.random() * 9)
                cod[i] = ale;
            }else if(aleLetter==1){
                let aleInside =  parseInt(Math.random() * 6)
                cod[i] = letter[aleInside]
            }
        }
    body.style.backgroundColor=`#${cod[0]}${cod[1]}${cod[2]}${cod[3]}${cod[4]}${cod[5]}`;
    color.innerText = `#${cod[0]}${cod[1]}${cod[2]}${cod[3]}${cod[4]}${cod[5]}`;
}