Array.prototype.myFilter = function(cb) {
    const res = [];

    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            res.push(this[i]);
        }
    }
    
    return res;
}

const nums = [1, 2, 3, 4, 5];

const res = nums.myFilter((it, i, nums) => {
    return it < 3;
})

console.log(res);