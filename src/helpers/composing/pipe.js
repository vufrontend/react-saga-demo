// https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d
// usage: compose functions left to right
// pipe(add1, multiply2, minus2)(9) === 18

export default (...fns) => x => fns.reduce((v, f) => f(v), x)
