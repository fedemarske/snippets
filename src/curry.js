export function curry(fn) {
  return function (...args) {
    if (args.length >= fn.length) {
      return fn.call(this, ...args);
    }
    const boundFn = fn.bind(this, ...args);
    return curry(boundFn);
  };
}
