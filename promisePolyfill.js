function PromisePolyFill(executor) {
    let onResolve
    let onReject

    function resolve(value) {
        onResolve(value)
    }

    function reject(value) {
        onReject(value)
    }

    this.then = function(cb) {
        onResolve = cb;
        return this;
    }

    this.catch = function(cb) {
        onReject = cb;
        return this;
    }

    executor(resolve, reject) 
}