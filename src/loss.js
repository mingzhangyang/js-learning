"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function crossEntropyForVector(prediction, label) {
    var r = 0;
    for (var i = 0; i < label.length; i++) {
        r += (label[i] * Math.log(prediction[i]));
    }
    return -r;
}
function crossEntropy(predictions, labels) {
    var sum = 0;
    for (var i = 0; i < labels.length; i++) {
        sum += crossEntropyForVector(predictions[i], labels[i]);
    }
    return sum;
}
exports.crossEntropy = crossEntropy;
