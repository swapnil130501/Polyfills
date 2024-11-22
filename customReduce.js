Array.prototype.myReduce = function (cb, initialValue) {
    var accumulator = initialValue;

    for(let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }

    return accumulator;
}

const nums = [1, 2, 3, 4, 5];

const res = nums.myReduce((acc, curr, i, nums) => {
    return acc + curr;
});

console.log(res);