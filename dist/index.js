"use strict";
// type Goods = {
//   [key: string]: number | string;
// };
// const fruits: Goods = {
//   apples: 1,
//   orange: 2,
//   banana: 7,
// };
// const vegetables: Goods = {
//   onion: 2,
//   cucumber: 32,
//   potato: "42",
// };
/////GENERICS AND THEIR ABILITIES
///////////////////////////////////////////////////////////
// function indefy<string>(arg: string): string {        //
//   return arg;                                         //
// }                                                     //
function identity(arg) {
    //
    return arg; //
} //
//
let output1 = identity("srting"); //
let output2 = identity(1); //
//
///////////////////////////////////////////////////////////
// function reverse<T>(items: T[]): T[] {
//   return items.reverse();
// }
// let option1 = reverse<number>([1, 2, 3, 4, 5, 6, 7]);
// let option2 = reverse<string>(["g", "f", "e", "d", "c", "b", "a"]);
// console.log(option1);
// console.log(option2);
function lengthOfObject(obj) {
    return obj.duration;
}
lengthOfObject({
    name: "bob",
    duration: 12,
});
////////////////////////////////////
// Here we check if any key belongs to an object element
const students = {
    name: "Bob",
    age: 22,
};
// function getProperty<ObjectType, KeyType extends keyof ObjectType>(
//   obj: ObjectType,
//   key: KeyType
// ) {
//   return obj[key];
// }
// const info = getProperty(students, "age");
// console.log(info);
///////////////////////////////////////
// If we want to change the value of any object key, we must use "Partial"
// type Todo = {
//   title: string;
//   description: string;
//   complited: boolean;
// };
const todo1 = {
    title: "Learn TS",
    description: "Stydy basick ts",
    complited: false,
};
function updateField(todo, fieldToUpdate) {
    return { ...todo, ...fieldToUpdate };
}
const todo2 = updateField(todo1, { complited: true });
console.log(todo2);
const julianSummery = {
    name: "bob",
    age: 12,
    // address: "Lavanda" It does not work becouse wo took all types without address in //=>"type PromisWithOutAddress"<=\\
    //IT`S OMIT
};
//Task 1\\
