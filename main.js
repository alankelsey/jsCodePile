const obj = {
    first: '1',
    second: '2',
    third: '3'
}

const arry = [
    'a',
    'b',
    'c',
    'd'
]

const namedParam = ({ first, second}) => {
    console.log("params: " +    first, second)
}

const pullOutKey = (myObject) => {
    const { first } = myObject
    console.log("MyObj: " + first)
    
}

const pullOutKey2 = (myArry) => {
    const [ first, second ] = myArry
    console.log("MyArry: " + first, second)
}

const reverseArray = (initArry) => {
    let newArry = []

    for(let i = initArry.length - 1; i >= 0; i--){
        newArry.push(initArry[i])
    }
    // console.log(newArry)
    return newArry
}

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

console.log(doubled);


// pullOutKey(obj)
// pullOutKey2(arry)
// namedParam(obj)
// reverseArray(arry)