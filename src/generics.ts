const arrOfNum = [1, 2, 3, 4, 5, 6, 7];
const arr = ["a", "b", "c", "d", "e"];

function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}

const call1 = reverse<number>(arrOfNum);
const call2 = reverse<string>(arr);
console.log(call1);
console.log(call2);

function agreeByProperty<T extends { address: string }>(obj: T): string {
  return obj.address;
}

const results = agreeByProperty({
  putin: "huilo",
  slava: "Ukraini",
  address: "Hello world",
});
console.log(results);

//practice
const student = {
  name: "Jozef",
  age: 21,
};


function getProperty<ObjectType, KeyType extends keyof ObjectType>(obj:ObjectType, key:KeyType):ObjectType[KeyType] {
    return obj[key]
}

const student1 = getProperty(student, "age")
console.log(student1);
