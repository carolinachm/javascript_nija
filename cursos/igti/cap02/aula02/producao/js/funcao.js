function sum(a , b){
    return a + b;
}

console.log(sum(1,2))

function compareNumbers(a ,b){
    return a>b?1: a<b?-1:0;
}
console.log(compareNumbers(1,1));
console.log(compareNumbers(1,2));
console.log(compareNumbers(2,1));

function somatorio(from, upTo){
    var sum = 0;
    for (var i = from; i <= upTo; i++){
        sum +=1;
    }
    return sum;
}

console.log(somatorio(1,10))
console.log(somatorio(11,100))
console.log(somatorio(101,1000))