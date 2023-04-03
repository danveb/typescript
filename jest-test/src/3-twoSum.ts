/* Given an integer array "nums", and an integer "target", check if any two values in "nums" adds up to "target". Return pair in array format, in any order. 

nums = [2, 7, 11, 15] target = 9
output = [0, 1] because 2+7 = 9

*/ 

export function twoSum(nums: number[], target: number) {
    // edge case: if nums array is empty? return []
    if(nums.length === 0) return []; 
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j]; 
            // check: if sum === target? return the [i, j]
            if(sum === target) {
                return [i, j];
            }
        };
    };
};

console.log(twoSum([2, 7, 9, 11], 9)); // [0, 1]