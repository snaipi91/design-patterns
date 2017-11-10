var root = document.getElementById('root');

function FabricButton(options) {
  
    var element = document.createElement('button');
    
    function init() {
      element.innerHTML = (typeof options.text == 'string') ? options.text : 'there had to be text';
      element.style.color = (typeof options.color == 'string') ? options.color : 'blue';
    }
    
    FabricButton.prototype.render = function() {
        init();
        root.appendChild(element);
        console.log(element);
    }
}

function FabricButtonPopup() {
    
}

var button = new FabricButton({
  text: 'press here',
  color: null
})

button.render()