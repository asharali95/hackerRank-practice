// Question 01 - Compare the triplet

// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.

// Example

// a = [1, 2, 3]
// b = [3, 2, 1]

// For elements *0*, Bob is awarded a point because a[0] .
// For the equal elements a[1] and b[1], no points are earned.
// Finally, for elements 2, a[2] > b[2] so Alice receives a point.
// The return array is [1, 1] with Alice's score first and Bob's second.

// SOLUTION

function compareTriplets(a, b) {
  let alice = 0,
    bob = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) alice++;
    else if (a[i] < b[i]) bob++;
  }
  return [alice, bob];
}

// QUESTION 02 - Diagonal Differences

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix arr  is shown below:
// 1 2 3
// 4 5 6
// 9 8 9

// The left-to-right diagonal 1 + 5 + 9 = 15 . The right to left diagonal 3 + 5 + 9 = 17 . Their absolute difference is |15 - 17 | = 2.

// |x| is the absolute value of x

// function diagonalDifference(arr) {
//   var left = 0,
//     right = 0,
//     index1 = 0,
//     index2 = arr.length - 1;
//   for (let i = 0; i < arr.length; i++) {
//     left += arr[i][index1];
//     for (let j = arr[i].length - 1; j >= 0; j--) {
//       right += arr[i][index2];
//       break;
//     }
//     index1++;
//     index2--;
//   }
//   let diagDiff = left - right;
//   return diagDiff < 0 ? (diagDiff = diagDiff * -1) : diagDiff;
// }

// ----------------------------------------------------------
// QUESTION 03 - Staircase
// Staircase detail

// This is a staircase of size n = 4 :
//    #
//   ##
//  ###
// ####

// function staircase(n) {
//   let stair = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = i; j < n; j++) {
//       stair += " ";
//     }
//     for (let k = 1; k <= i; k++) {
//       stair += "#";
//     }
//     stair += "\n";
//   }
//   console.log(stair);
// }
