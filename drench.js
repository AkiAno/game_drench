/*let colors = [
    {color: '#ff0000'},
    {color: '#ffff00'},
    {color: '#800080'},
    {color: '#008000'},
    {color: '#0000ff'},
    {color: '#000000'}
];
let randomColors = [];

class Color {
    constructor() {
        this.counter = 30;
        this.index = 0;
    }
    chooseColor() {
        let random = Math.floor(Math.random()*6);
        randomColors.push(colors[random].color);
        return colors[random].color;
    }
    colorNeighbour() {

    }
    checkNeighbour(color){
        let box = document.getElementById(`box${index}`);
        for(let i = 0; i < 14; i++){
            for(let j = 0; j < 14; j++){
                if(box.style.backgroundColor === ''){

                }
                break;
            }
            let neighbour = document.getElementById(`box${j}`);
            if(box.style.backgroundColor === neighbour.style.backgroundColor) {
                this.colorNeighbour();
            }
            
        }
      
    }
    colorBox(button) {
        let current = document.getElementById(`box${index}`);
        if(button.classList.contains('colorRed')){
            this.checkNeighbour('red');
            console.log('red');
            first.style.backgroundColor = colors[0].color;
            
        } else if(button.classList.contains('colorBlack')) {
            first.style.backgroundColor = colors[5].color;
            this.checkNeighbour();
        } else if(button.classList.contains('colorYellow')) {
            first.style.backgroundColor = colors[1].color;
            this.checkNeighbour();
        } else if(button.classList.contains('colorGreen')) {
            first.style.backgroundColor = colors[3].color;
            this.checkNeighbour();
        } else if(button.classList.contains('colorBlue')) {
            first.style.backgroundColor = colors[4].color;
            this.checkNeighbour();
        } else if(button.classList.contains('colorBlack')) {
            first.style.backgroundColor = colors[2].color;
            this.checkNeighbour();
        }
    } 

    start(button) {
        let counter = document.getElementById('counter');
        button.addEventListener('click', () => {
        if(this.counter > 0){
            this.counter--;
            counter.innerHTML = this.counter;
            this.colorBox(button);
            
            }
        });
    }
}

let boxColor = new Color();

function createBox() {
    let container = document.getElementById('box');
    for (let i = 0; i < 14; i++) {
        for (let j=0; j < 14; j++) {
            container.innerHTML += `<div id='box${(i*14)+j}' class='small_box' style='background-color: ${boxColor.chooseColor()}'></div>`; 
        }
    }
}
*/

let game = new Game(14, 14);

document.addEventListener('DOMContentLoaded', () => {
    let redButton = document.getElementById('red');
    let blackButton = document.getElementById('black');
    let yellowButton = document.getElementById('yellow');
    let greenButton = document.getElementById('green');
    let blueButton = document.getElementById('blue');
    let purpleButton = document.getElementById('purple');
    game.createBox();
    game.checkColor(redButton);
    game.checkColor(blackButton);
    game.checkColor(yellowButton);
    game.checkColor(greenButton);
    game.checkColor(blueButton);
    game.checkColor(purpleButton);
    
});