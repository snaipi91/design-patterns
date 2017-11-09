const Singelton = (() => {
    let instance;
  
    function createInstance() {
      return {
        identificator: Math.floor(Math.random() * 1000000),
        page: null,
        getId: function() {
          return this.id;
        },
        setId: function(id) {
          this.id = id;
          return true;
        }
      }
    }
  
    return () => {
        if(!instance) { 
          instance = createInstance();
        }
        return instance;
    }
    
    
})();

console.log(new Singelton().setId(3));
console.log(new Singelton().setId(10));
console.log(new Singelton());
console.log(new Singelton());