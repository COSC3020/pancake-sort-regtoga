function flip(array, n) {
    var myArray = new Array(n);
    var counter = 0;
    for (var i = n-1; i >= 0; i--) {
        myArray[counter] = array[i];
        counter++;
    }
    for (var i = 0; i < n; i++){
        array[i] = myArray[i];
    }
    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    var sorted = false;
    var counter = 0;
    while(!sorted){
        var spatula = 2;
        while (spatula <= array.length-1){
            var startarr = array[0];
            var beforespatula = array[spatula-1];
            var spatulavalue = array[spatula];
            
            //if left is larger than right and ( left and right are both larger than the value), flip
            if ((beforespatula > spatulavalue && spatulavalue <= startarr) && beforespatula > startarr){
                flip(array, spatula);
            //if the value is less than left and bigger than right, flip
            }else if (beforespatula > spatulavalue && spatulavalue > startarr){
                flip(array, spatula);
            //if left is smaller than right and (left and right are less than value)
            }else if ((beforespatula < spatulavalue && spatulavalue >= startarr) && beforespatula < startarr){
                flip(array, spatula);
            }
            spatula++;
        }

        //if the array is oposite of sorted... flip it
        if (array[0] > array[array.length - 1]){
            flip(array, array.length)
        }
        
        //check if its sorted yet...
        sorted = true;
        for (var i = 1; i < array.length; i++){
            if (!(array[i-1] <= array[i])){
                sorted = false;
                break;
            }
        }
        counter++;
    }
    
    console.log(counter);

    return array;
}


//var longArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 1001));

//console.log(pancakeSort(longArray));
//var array1 = [1,2,3,4,5,6,7,8,9,10];
//var array2 = [1,7,5,12,2,3,4];
//var array3 = [100,77,88,101,66,78]; //works
//console.log(pancakeSort(array1))
//console.log(pancakeSort(array2))
//console.log(pancakeSort(array3))

//console.log(pancakeSort([3, 0, 3]))