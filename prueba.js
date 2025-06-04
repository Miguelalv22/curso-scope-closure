const numArray = [3, 3];
const tar = 6;

var twoSum = function (nums, target) {
    const newArray = []
    let result = 0
    for (let i = 1; i < nums.length; i++) {
        result = nums[i - 1] + nums[i];
        if (result == target) {
            newArray.push(i - 1);
            newArray.push(i);
        }
    }
    return newArray;
};
twoSum(numArray, tar);