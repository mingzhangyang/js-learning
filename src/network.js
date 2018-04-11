"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var layer_1 = require("./layer");
var utils_1 = require("./utils");
var loss_1 = require("./loss");
var Network = /** @class */ (function () {
    function Network(numOfFeature, arr) {
        this.layers = new Array(arr.length);
        var numOfWeights = numOfFeature;
        for (var i = 0; i < arr.length; i++) {
            this.layers[i] = new layer_1.Layer(arr[i], numOfWeights);
            numOfWeights = arr[i];
        }
    }
    Network.prototype.FeedForward = function (input) {
        var r = input;
        for (var i = 0; i < this.layers.length; i++) {
            r = this.layers[i].computeForMatrix(r);
        }
        return r;
    };
    Network.prototype.ComputeLoss = function (input, labels) {
        var output = this.FeedForward(input);
        output = utils_1.softmax(output);
        return loss_1.crossEntropy(output, labels);
    };
    return Network;
}());
exports.Network = Network;
