function myMemo(cb) {
    // Cache to store computed results
    const cache = new Map();

    // The memoized function
    return function (...args) {
        // Create a key for the arguments
        const key = JSON.stringify(args);

        // Check if the result is already in the cache
        if (cache.has(key)) {
            console.log('Fetching from cache:', args);
            return cache.get(key);
        }

        // If not cached, compute the result
        console.log('Computing result:', args);
        const result = cb(...args); //const result = cb.call(context || this, ...args)

        // Store the result in the cache
        cache.set(key, result);

        return result;
    };
}

function test(a, b) {
    for(let i = 0; i < 10000000000000; i++) {
        return a * b;
    }
}
console.time('first call');
console.log(test(2131223233, 21322322123));
console.timeEnd('first call');

const memoizedTest = myMemo(test);

console.time('first call');
console.log(memoizedTest(2131223233, 21322322123));
console.timeEnd('first call');


function memoize(cb) {
    const dp = {};

    return function (...args) {
        const key = JSON.stringify(args);
        
        if (!dp[key]) {
            dp[key] = cb(...args); 
        }

        return dp[key]; 
    };
}

