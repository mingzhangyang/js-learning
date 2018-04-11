"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Neuron = /** @class */ (function () {
    function Neuron(n) {
        this.numOfWeights = n;
        this.weights = (new Array(n));
        for (var i = 0; i < this.weights.length; i++) {
            this.weights[i] = (Math.random() - 0.5) * 2;
        }
        this.bias = Math.random();
    }
    // given an input vector, compute the result
    Neuron.prototype.compute = function (input) {
        var res = 0;
        for (var i = 0; i < input.length; i++) {
            res += (input[i] * this.weights[i]);
        }
        return res + this.bias;
    };
    // update weights
    Neuron.prototype.update = function () {
    };
    return Neuron;
}());
exports.Neuron = Neuron;
