class Neuron {
    numOfWeights: number;
    weights: number[];
    bias: number;
    constructor(n: number) {
        this.numOfWeights = n;
        this.weights = (new Array<number>(n));
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] = (Math.random() - 0.5) * 2;
        }
        this.bias = Math.random();
    }
    // given an input vector, compute the result
    compute(input: number[]): number {
        let res: number = 0;
        for (let i = 0; i < input.length; i++) {
            res += (input[i] * this.weights[i]);
        }
        return res + this.bias;
    }
    // update weights
    update() {

    }
}

export { Neuron };
