

function throughOnce(fn) {
    state={
        counter:1
    }

    return function () {
        if (state.counter%2!==0){
            state.counter++;
            fn(...arguments);
        }
        else {
            state.counter++;
        }

    }


}

var logThroughOnce = throughOnce(function(text) {
    console.log(text);
});

logThroughOnce("Hello World!"); // "Hello World!"
logThroughOnce("Hello World!"); //
logThroughOnce("Hello World!"); // "Hello World!"
logThroughOnce("Hello World!"); //
