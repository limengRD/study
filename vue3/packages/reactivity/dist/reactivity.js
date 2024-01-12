// packages/reactivity/src/effect.ts
var activeEffect = void 0;
var ReactiveEffect = class {
  constructor(fn) {
    this.fn = fn;
  }
  run() {
    try {
      activeEffect = this;
      this.fn();
    } finally {
      activeEffect = void 0;
    }
  }
};
function effect(fn) {
  const _effect = new ReactiveEffect(fn);
  _effect.run();
}

// packages/shared/src/index.ts
function isObject(val) {
  return typeof val === "object" && val !== null;
}

// packages/reactivity/src/reactive.ts
function reactive(target) {
  return createReactiveObject(target);
}
function createReactiveObject(target) {
  if (!isObject(target)) {
    return;
  }
  const mutableHanlders = {
    get(target2, key, recevier) {
      console.log("get", key, recevier);
      return Reflect.get(target2, key, recevier);
    },
    set(target2, key, value, recevier) {
      target2[key] = value;
      return true;
    }
  };
  const proxy = new Proxy(target, mutableHanlders);
  return proxy;
}
export {
  activeEffect,
  effect,
  reactive
};
//# sourceMappingURL=reactivity.js.map
