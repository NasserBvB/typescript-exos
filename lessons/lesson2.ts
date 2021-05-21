/**
 * Declarations des variables et explication du scope
 *
 * Write a function that using two variables and one constant
 * Write counter function 
 */

// With var
for (var i = 0; i < 10; i++) {
  setTimeout(function() { console.log(i); }, 100 * i);
}

// With let
for (let i = 0; i < 10 ; i++) {
  setTimeout(function() { console.log(i); }, 100 * i);
}

// With const
const maxTrainingsPerCart = 10;
const trainingCartRestrictions = {
  name: "DefaultCart",
  maxTrainingsPerCart: 10
}

// Error
// trainingCartRestrictions = {
//   name: "MyCart",
//   maxTrainingsPerCart: 10
// };

// Still works
trainingCartRestrictions.name = "ConsultancyCart";
trainingCartRestrictions.maxTrainingsPerCart--;

function lesson2() {
  /**
   * Your code here
   */
  
}
lesson2();
