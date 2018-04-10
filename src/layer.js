"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var neuron_1 = require("./neuron");
var Layer = /** @class */ (function () {
    function Layer(n, m) {
        this.numOfNeuron = n;
        this.numOfWeights = m;
        this.neurons = new Array(n);
        for (var i = 0; i < n; i++) {
            this.neurons[i] = (new neuron_1.Neuron(m));
        }
    }
    Layer.prototype.computeForVector = function (input) {
        var res = new Array(input.length);
        for (var i = 0; i < this.numOfNeuron; i++) {
            res[i] = this.neurons[i].compute(input);
        }
        return res;
    };
    Layer.prototype.computeForMatrix = function (input) {
        var res = new Array(input.length);
        for (var i = 0; i < res.length; i++) {
            res[i] = this.computeForVector(input[i]);
        }
        return res;
    };
    return Layer;
}());
exports.Layer = Layer;
