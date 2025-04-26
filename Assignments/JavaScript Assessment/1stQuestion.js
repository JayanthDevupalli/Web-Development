function createuniqueCounter(){
    let count = 0;

    function incrementCounter(){
        count++;
        console.log(count);
    }

    function getValue(){
        console.log(`The Current Count ${count}`);
    }

    return {incrementCounter, getValue};
}

const counter = createuniqueCounter();
counter.incrementCounter();
counter.incrementCounter();
counter.getValue();