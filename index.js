
// 1-st

for (let i = 1; i< 11; i++) {
    if (i % 3 == 0) {
        console.log ('fizbuz', i) }
        else if (i % 2 == 0) {
            console.log ('fiz', i) }
            else {
                console.log ('buz', i)
            }
}


// 2-nd

let factorialNumber = 10;
let result = 1;
for (i = factorialNumber; i > 1; i--){
    result *= i;
}

console.log (factorialNumber + '!=' + result);

// 3-d

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
let minPaperBoxPerWeek = ((consumptionPerWeek * weeksAmount) / sheetsInReamPaper) - (((consumptionPerWeek * weeksAmount) % sheetsInReamPaper) / sheetsInReamPaper) + 1;
console.log(minPaperBoxPerWeek);

// 4-th

const roomsOnFloor = 3;
const floors = 9;
let roomNumber = prompt('Enter number of apartaments ');
if (roomNumber >= 100){
    let floor;
    let porch;
    if (roomNumber % roomsOnFloor == 0){
        floor = roomNumber / roomsOnFloor;
    } else {
        floor = (roomNumber / roomsOnFloor) - ((roomNumber % roomsOnFloor) / roomsOnFloor) + 1;
    }
    if (floor % floors == 0){
        porch = floor / floors
    } else {
        porch = (floor / floors) - ((floor % floors) / floors) + 1
    }
floor -= (porch-1)* floors;
console.log(`Number of porch is ${porch} and floor is ${floor}`)
} else {
    console.log('Enter three-digit number')
}

// 5-th

let q = 0,
    w = 0;
let medianNumber = prompt('Enter number of lines ');
let space = "",
    star = "";

while (q < medianNumber) {
  space = "";
  star = "";
  for (w = 0; w < medianNumber - q; w++) space += "-";
  for (w = 0; w < 2 * q + 1; w++) star += "#";
  console.log(space + star + space);
  q++;
}







