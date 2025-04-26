const items = [
    { name: "Alpha", process: function () { console.log(`Processing: ${this.name}`); } },
    { name: "Beta", process: function () { console.log(`Task for ${this.name} done.`); } }
];

function processObjectsDelayed(array, delay) {
    array.forEach((element, index)=> {
        setTimeout(()=>{
            element.process();
        },(delay*(index)));

    });
}

processObjectsDelayed(items, 2000);