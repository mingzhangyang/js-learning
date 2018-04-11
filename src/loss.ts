function crossEntropyForVector(prediction: number[], label: number[]): number {
    let r: number = 0;
    for (let i = 0; i < label.length; i++) {
        r += (label[i] * Math.log(prediction[i]));
    }
    return -r;
}

function crossEntropy(predictions: Array<number[]>, labels: Array<number[]>): number {
    let sum: number = 0;
    for (let i = 0; i < labels.length; i++) {
        sum += crossEntropyForVector(predictions[i], labels[i]);
    }
    return sum;
}

export {
    crossEntropy
}