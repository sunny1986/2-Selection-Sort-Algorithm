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
    
    for(var i = 0 ; i < array.length ; i++){
        var index = indexOfMinimum(array , i);
        swap(array, i , index);
    }

};

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
