const root = document.getElementById('root');

function Board(background) {
  this.element = document.createElement('div');
  this.element.style['height'] = '50px';
  this.element.style['backgroundColor'] = background;
}

Board.prototype.getObservableElement = function() {
  
}

Board.prototype.render = function(root) {
  root.appendChild(this.element);
}

function Observable() {
  this.subscribers = [];
}

Observable.prototype.subscribe = function(subscriber) {
  this.subscribers.push(subscriber)
}

Observable.prototype.unscribe = function() {
  
}

Observable.prototype.publish = function(data) {
  this.subscribers.forEach((subscriber) => {
    console.log(subscriber);
  })
}

let board1 = new Board('#fc7');
let board2 = new Board('#c7d');
let board3 = new Board('#37d');

board1.render(root);
board2.render(root);
board3.render(root);

let observable = new Observable();
observable.subscribe(Board);
observable.publish();