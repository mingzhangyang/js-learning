import { Neuron } from "../src/neuron";
import { Layer } from "../src/layer";

let n: Neuron = new Neuron(10);
// console.log(n);
let layer: Layer = new Layer(20, 10);
console.dir(layer, {depth: null, colors: true});
console.log(Array.isArray(layer.neurons));
console.log(layer.neurons.length);