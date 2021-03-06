
module.exports = function(__runtime__, scope){

    var __selector__ = __runtime__.selector(scope.__engine__);
    var __obj__ = new java.lang.Object();

    for(var method in __selector__){
        if(!__obj__[method] && !scope[method]){
            scope[method] = (function(method) {
                return function(){
                    var s = selector();
                    return s[method].apply(s, Array.prototype.slice.call(arguments));
                };
            })(method);
        }
    }

    return function(){
        var s = __runtime__.selector(scope.__engine__);
        return s;
    };
}

