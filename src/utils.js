"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function softmaxForVector(v) {
    var res = new Array(v.length);
    var sum = 0;
    for (var i = 0; i < v.length; i++) {
        res[i] = Math.pow(Math.E, v[i]);
        sum += res[i];
    }
    return res.map(function (d) { return d / sum; });
}
function softmax(predictions) {
    var res = new Array(predictions.length);
    for (var i = 0; i < predictions.length; i++) {
        res[i] = softmaxForVector(predictions[i]);
    }
    return res;
}
exports.softmax = softmax;
