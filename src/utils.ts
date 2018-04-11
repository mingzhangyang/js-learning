function softmaxForVector(v: Array<number>): number[] {
    let res = new Array<number>(v.length);
    let sum: number = 0;
    for (let i = 0; i < v.length; i++) {
        res[i] = Math.pow(Math.E, v[i]);
        sum += res[i];
    }
    return res.map(d => d / sum);
}

function softmax(predictions: Array<number[]>): Array<number[]> {
    let res = new Array<number[]>(predictions.length);
    for (let i = 0; i < predictions.length; i++) {
        res[i] = softmaxForVector(predictions[i]);
    }
    return res;
}

export { softmax }