const root = document.getElementById('root');

const FabricButton = function(options) {
  
    this.element = document.createElement('button');
    this.element.innerHTML = (typeof options.text == 'string') ? options.text : 'there had to be text';
    this.element.style.color = (typeof options.color == 'string') ? options.color : 'blue';
    
    FabricButton.prototype.render = function() {
        root.appendChild(this.element);
    }
}

const FabricButtonPopup = function(options) { 
    FabricButton.call(this, options);
    this.element.addEventListener('click', this.popup);
}

FabricButtonPopup.prototype = Object.create(FabricButton.prototype);
FabricButtonPopup.prototype.constructor = FabricButtonPopup;

FabricButtonPopup.prototype.popup = function() {
  prompt('open window')
}

let button = new FabricButton({
  text: 'press here man',
  color: null
})

let buttonPopup = new FabricButtonPopup({
  text: 'press here man',
  color: 'red'
})

let buttonPopupNew = new FabricButtonPopup({
  text: 'press here man',
  color: 'green'
})

button.render()
buttonPopup.render()
buttonPopupNew.render()