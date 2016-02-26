/**
 * Created by ziling on 2/27/16.
 */


var foo1 = {
    _name: 'bar'
};

Object.defineProperty(foo1, 'name', {
    get: function(){
        return this._name;
    },
    set: function(NewName){
        this._name = NewName;
    }
});


var foo2 = function(){
    var _name = 'bar';

    var _get = function(){
        return _name;
    };
    var _set = function(NewName){
        _name = NewName;
    };

    return {
        get: _get,
        set: _set
    }

}();


function Foo(){
    var _name = 'bar';

    this.get = function(){
        return _name;
    };
    this.set = function(NewName){
        _name = NewName;
    };
};

// foo1
foo1.name;              // bar
foo1.name = 'shit';
foo1.name;              // shit

foo2.get();             // bar
foo2.set('shit');
foo2.get();             // shit

var foo3 = new Foo();
foo3.get();             // bar
foo3.set('shit');
foo3.get();             // shit