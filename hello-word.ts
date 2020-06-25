let text: string = "Hellow World";
console.log(text);

// Annotations
const myNumber: number = 31;
let isOK: boolean = true;
let isNo: boolean = true;
let files: string[];
let human: { id: number; name: string; isHuman: boolean };
// Default value ? 
files = ["Hello day 1", "Hello dude"]
human = { id: 100.1, name: "Phuc HVT", isHuman: true };



isOK = human.isHuman ? true : false;
// isOK = isNo?: false;
let alertMessage: string = "Hello";
alertMessage = alertMessage + " This is alert";
// human.name = alertMessage?:"NOPE" ; 
// ==> Expression excepted


console.log(alertMessage);
files.pop();
console.log(files);
console.log(human);
