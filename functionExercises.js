//Positive Numbers
//Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.
// var numbers = [2, -5, 6, 89, 34, -34, 100, 16, -2, 65, -40]

// var posNum = numbers.filter(positive => positive > 0);
// console.log(posNum);

//Even Numbers
//Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.
// var evenNum = numbers.filter(even => even % 2 ==0);
// console.log(evenNum);

//Square the Numbers
//Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].
// var squareNum = numbers.map(square => square * square);
// console.log(squareNum);

//Cities 1
//Write a function which takes an array of city objects as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.
// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];

// var coolTemp = cities.filter(temp => temp.temperature > 70.0);
    
// console.log(coolTemp);

//Cities 2
//Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.
// var cityName = cities.map(city => city.name);
// console.log(cityName);

//Good Job!
//Given an array of people's names, print out 'Good Job, {{name}}!' for each person's name, one on a line.
//var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// var goodJob = people.map(name => `Good Job, ${name}!`);
// console.log(goodJob);

//Sort an array
//Given an array of strings such the array of names given in the previous problem, sort them by alphabetically order.
// var sortNames = people.sort();
//  console.log(sortNames);

 //Sort an array, 2
 //Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.
//  var sortNames = people.sort(function(a,b){
//      return a.length - b.length;
//  })
//  console.log(sortNames);

//Sum an array
//Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function sum(total, num){
//     return total + num;
// }
// console.log(arr.reduce(sum, 0));

//Sort an array, 3 Did not 
//Given an array of array of numbers, sort the array by the sum of each inner array. For the above example, the respective sums for each inner array is 8, 20, and 9.
var arrs = [[1, 3, 4],[2, 4, 6, 8],[3, 6] ];

function flatten(arr) {
    return arr.reduce(function(flat, arr) {
        return flat.concat(Array.isArray(arr) ? flatten(arr) : arr);
    }, []);
};
var sums = arrs.map(function(arr) {
    return flatten(arr).reduce(function(sum, item) {
        return sum + item;
    });
});
console.log(sums.sort());
