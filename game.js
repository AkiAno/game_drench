class Game {
    constructor(x, y){
        this.colors = [
            {name: 'red', color: '#ff0000'},
            {name: 'yellow', color: '#ffff00'},
            {name: 'purple', color: '#800080'},
            {name: 'green', color: '#008000'},
            {name: 'blue', color: '#0000ff'},
            {name: 'black', color: '#000000'}
        ];
        this.x = x;
        this.y = y;
        this.turn = 30;
        this.randomColors = [];
    }

    chooseColor() {
        for(let i = 0; i < 196; i++){
            let random = Math.floor(Math.random()*6);
            this.randomColors.push(
                {name: this.colors[random].name,color: this.colors[random].color})
        }
    }

    createBox(){
        let container = document.getElementById('box');
        this.chooseColor();
        container.innerHTML = '';
        for (let i = 0; i < this.x*this.y; i++) {
            container.innerHTML += `<div id='box${i}' class='small_box' style='background-color: ${this.randomColors[i].color}'></div>`; 
        }
    }
    color(button){
        let index = 0;
        if(button.classList.contains('colorRed')){
            //this.checkNeighbour('red');
            this.randomColors[index].color = '#ff0000';
            let i = 1;
                if(this.randomColors[i].name === 'red' && this.randomColors[i-1].name === 'red'){
                    this.randomColors[i].color = '#ff0000';
                    index = i;
                }
            this.createBox();
            console.log('red');
            
        } else if(button.classList.contains('colorBlack')) {
            this.randomColors[index].color = '#000000';
            let i = 1;
                if(this.randomColors[i].name === 'black' && this.randomColors[i-1].name === 'black'){
                    this.randomColors[i].color = '#000000';
                    index = i;
                }
            
            this.createBox();
        } else if(button.classList.contains('colorYellow')) {
            this.randomColors[index].color = '#ffff00';
            let i = 1;
                if(this.randomColors[i].name === 'yellow' && this.randomColors[i-1].name === 'yellow'){
                    this.randomColors[i].color = '#ffff00';
                    index = i;
                }
            
            this.createBox();
        } else if(button.classList.contains('colorGreen')) {
            this.randomColors[index].color = '#008000';
            let i = 1;
                if(this.randomColors[i].name === 'green' && this.randomColors[i-1].name === 'green'){
                    this.randomColors[i].color = '#008000';
                    index = i;
                }
            
            this.createBox();
        } else if(button.classList.contains('colorBlue')) {
            this.randomColors[index].color = '#0000ff';
            let i = 1;
                if(this.randomColors[i].name === 'blue' && this.randomColors[i-1].name === 'blue'){
                    this.randomColors[i].color = '#0000ff';
                    index = i;
                }
            
            this.createBox();
        } else if(button.classList.contains('colorPurple')) {
            this.randomColors[index].color = '#800080';
            let i = 1;
                if(this.randomColors[i].name === 'purple' && this.randomColors[i-1].name === 'purple'){
                    this.randomColors[i].color = '#800080';
                    index = i;
                }
            this.createBox();
        }
    }
    colorNeighbour() {
        
    
    }
    checkColor(button){
        let counter = document.getElementById('counter');
        button.addEventListener('click', () => {
            if(this.turn > 0){
                this.turn--;
                counter.innerHTML = this.turn;
                this.color(button);
                this.colorNeighbour();
                }
            });
        
    }
}