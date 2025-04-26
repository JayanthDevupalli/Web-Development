const data = { a: "short", b: "longer string", c: 123, d: "very long string indeed" };
const filtered = filterObjectProperties(data, 6);
console.log(filtered); // Expected output: { b: 'longer string', d: 'very long string indeed' }

function filterObjectProperties(info, minlen){
    let result ={};
    let key = Object.keys(info);
    key.forEach(element => {
        if(typeof(info[element]) === 'string' && info[element].length >= minlen){
            result[element] = info[element]; 
        }  
    });
    return result;
}