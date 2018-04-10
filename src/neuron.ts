class Neuron {
    numOfWeights: number;
    weights: number[];
    constructor(n: number) {
        this.numOfWeights = n;
        this.weights = (new Array<number>(n));
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] = Math.random();
        }
    }
    // given an input vector, compute the result
    compute(input: number[]): number {
        let res: number = 0;
        for (let i = 0; i < input.length; i++) {
            res += (input[i] * this.weights[i]);
        }
        return res;
    }
    // update weights
    update() {

    }
}

export { Neuron };