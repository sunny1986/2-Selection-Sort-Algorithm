// Program to implement selection sort algorithm. The algorithm uses two functions swap and indexOfMinimum
// swap function swaps the values of the array at firstIndex and the secondIndex
// indexOfMinimum function returns index of the minimum value found in the array passed to the function with a starting index


var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var selectionSort = function(array) {
    
    for(var i = 0 ; i < array.length ; i++){            // Loop to run and find min for each sub array and place
        var index = indexOfMinimum(array , i);          // it in the right order and continue the same in the next sub array.
        swap(array, i , index);                         // Swap value of the current index with that of the minimum found in the subarray.
    }

};

// Examples to check the implementation of algorithm 
// using both positive and negative integers and a 0.

var array = [22, 11, 99, 88, 9, 7, 42];
var array1 = [0, 22, 11, 99, 88, 9, 7, 42];
var array2 = [0, 22, -11, 99, -88, 9, 7, 42];
selectionSort(array);
selectionSort(array1);
selectionSort(array2);
println("Array after sorting:  " + array);
println("Array after sorting:  " + array1);
println("Array after sorting:  " + array2);

//Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);
//Program.assertEqual(array1, [0, 7, 9, 11, 22, 42, 88, 99]);
//Program.assertEqual(array2, [-88, -11, 0, 7, 9, 22, 42, 99]);
