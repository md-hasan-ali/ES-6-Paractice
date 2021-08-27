// Task Number One ...
const name = 'Md Hasan Ali (Ringku)';
let apple = '2 pice Apple';

// Task Number Two..
const templateString = `This is laptop of ${name} and brand name ${apple}`;
// console.log(templateString);

// Task Number Three ..
const multiply = num => num * 5;
const result = multiply(10);
// console.log(result);

// Task Number 4
const even = (num1, num2) => (num1 + 2) * (num2 + 2);
const sendNumber = even(2, 2);
// console.log(sendNumber);

// Task Number 5
const three = (num1, num2, num3) => num1 * num2 * num3;
const tin = three(2, 2, 2);
// console.log(tin);

// Task Number 6 ..
const multiline = (x, y) => {
    const result1 = x + 2;
    const result2 = y + 2;
    const finale = result1 * result2;
    return finale;
}
const output = multiline(5, 5);
// console.log(output);

// Task Number 6
const numbers = [2, 3, 4, 5];
const sum = numbers.map(x => x * 5);
// console.log(sum);

// Task Number 7 ..
const array = [10, 52, 1, 3, 5, 6, 50, 60, 70, 55, 66];
const odd = array.filter(x => x % 2); // true de value or falsei value ..
// console.log(odd);

// Task Number 8 ..
const object1 = [
    {name: 'walton mobile',price: 5500,color:'red'},
    {name : 'vivo mobile',price : 22200, color :'yellow'},
    {name: 'xiomi mobile',price : 5000, color: 'blue'},
    {name: 'xiomi mobile',price : 7000, color: 'blue'},
    {name: 'xiomi mobile',price : 5000, color: 'blue'},

];
const output2 = object1.filter(product => product.price == 5000);
// console.log(output2);
// object1.forEach(product => console.log(product.color));

// Task Number 9...
const newObject = {
    name2: 'abul',
    Id: 20,
    class : 10,
    long : 5,
}
const {name2} = newObject;
// console.log(name2);

// Task Number 10 ...
const array5 = [10,52,48,62,32,14,52];
const [,,three3] = array5;
console.log(three3);

// Task Number 11 ...
// function add3(num1 , num2 , num3 = 7) {
//     return num1 + num2 + num3 ;
// }
const add3 = (num1 , num2 , num3 = 7) => {
    return num1 + num2 + num3 ;
}
// console.log(add3(10,20));

// Task Number 12 ...
const nestedObject = {
    name: 'hasan ali',
    address: 'Bangladesh',
    company: {
        name : 'software it',
        id: 25,
        address: 'Gulshan, Dhaka',
        Support: {
            suppot1 : 'abul hossain',
            support2 : 'ringku',
        }
    }
}
const support2 = nestedObject?.company?.Suppor;
console.log(support2);