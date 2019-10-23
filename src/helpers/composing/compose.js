// https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d
// usage: compose functions right to left
// compose(add1, multiply2, minus2)(9) === 15

export default (...fns) => x => fns.reduceRight((v, f) => f(v), x)
