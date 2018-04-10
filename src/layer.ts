import {Neuron} from "./neuron";

class Layer {
    numOfNeuron: number;
    numOfWeights: number;
    neurons: Neuron[];
    constructor (n: number, m: number) {
        this.numOfNeuron = n;
        this.numOfWeights = m;
        this.neurons = new Array<Neuron>(n);
        for (let i = 0; i < n; i++) {
            this.neurons[i] = (new Neuron(m));
        }
    }
    computeForVector(input: number[]): number[] {
        let res: number[] = new Array<number>(input.length);
        for (let i = 0; i < this.numOfNeuron; i++) {
            res[i] = this.neurons[i].compute(input);
        }
        return res;
    }
    computeForMatrix(input: Array<number[]>): Array<number[]> {
        let res = new Array<number[]>(input.length);
        for (let i = 0; i < res.length; i++) {
            res[i] = this.computeForVector(input[i]);
        }
        return res;
    }
}

export { Layer };