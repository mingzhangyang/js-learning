import { Layer } from "./layer";
import {softmax} from "./utils";
import {crossEntropy} from "./loss";

class Network {
    layers: Layer[];
    constructor (numOfFeature: number, arr: number[]) {
        this.layers = new Array<Layer>(arr.length);
        let numOfWeights = numOfFeature;
        for (let i = 0; i < arr.length; i++) {
            this.layers[i] = new Layer(arr[i], numOfWeights);
            numOfWeights = arr[i];
        }
    }
    FeedForward(input: Array<number[]>): Array<number[]> {
        let r: Array<number[]> = input;
        for (let i = 0; i < this.layers.length; i++) {
            r = this.layers[i].computeForMatrix(r);
        }
        return r;
    }
    ComputeLoss(input: Array<number[]>, labels: Array<number[]>): number {
        let output = this.FeedForward(input);
        output = softmax(output);
        return crossEntropy(output, labels);
    }
}

export { Network };