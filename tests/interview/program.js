// const students = [
//   { name: "Quincy", grade: 96 },
//   { name: "Jason", grade: 84 },
//   { name: "Alexis", grade: 100 },
//   { name: "Sam", grade: 65 },
//   { name: "Katie", grade: 90 },
// ]
// const abc =()=>{ 
// const studentGrades = students.filter((student) => student.grade >= 90);
// return studentGrades;
// };
// console.log("arrow function : ",abc());

// const ss=[
//     {
//         "discription": "asda",
//         "data": {
//         "name": "John Doe",
//         "email": "john.doe@example.com",
//         "phone": "1234567890",
//         "address": "123 Main St"
//       },
//       "expected": {
//         "success": true,
//         "message": "successfully"
//       }

//     }
// ]

// const fetchingData=()=>{
//     ss.forEach((currV)=> console.log(currV.data));
// }
// fetchingData();


function table(s){
    let x;
    let y=10;
    for(let i=1; i<=y; i++){
         x= s*i;
        console.log(x);
    }
}

table(8);