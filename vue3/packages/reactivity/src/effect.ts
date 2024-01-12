export let activeEffect = undefined;
class ReactiveEffect {
    constructor(public fn) {
    }
    run() {
        try {
            activeEffect = this;
            this.fn();

        } finally {
            activeEffect = undefined;
        }
    }
}
export function effect(fn) {
    const _effect = new ReactiveEffect(fn);
    _effect.run();
}