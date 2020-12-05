/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

const simpleMultiplication = (number) => {
    let verdict = number % 2 === 0;
    return verdict === true ? number * 8 : number * 9;
}
