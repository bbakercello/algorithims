//divid the array into sub arrays, each containing one element
// repeatedly merge the sub array to produce new sorted sub array until there is only one sub array 

//split array down the middle
// if subarray is length of 1, don't split again

//check for arrays with more than one element, divide those

//Step 2 merge arrays into sub arrays


var merge = function(nums1, m, nums2, n) {
    nums1.length = m
    nums2.length = n
    nums1.push(...nums2)
    nums1.sort(function (a,b){
        return a-b
    })
    console.log(nums1)
};