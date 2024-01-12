import { recordEffectScope } from "./effectScope";
export let activeEffect = undefined;

function cleanUpEffect(effect) {
    let deps = effect.deps;
    for(let i=0; i<deps.length;i++) {
        deps[i].delete(effect);
    }
}
export class ReactiveEffect {
    parent = null;
    active = true;
    deps = [];
    constructor(public fn,public scheduler) {
        recordEffectScope(this);
    }
    run() {
        if(!this.active) {
            return this.fn();
        }
        try {
            this.parent = activeEffect;
            activeEffect = this;
            cleanUpEffect(this);
            return this.fn();

        } finally {
            activeEffect = this.parent;
        }
    }
    stop() {
        if(this.active) {
            this.active = false;
            cleanUpEffect(this);
        }
    }
}
export function effect(fn,options: any = {}) {
    const _effect = new ReactiveEffect(fn,options.scheduler);
    _effect.run();
    const runner = _effect.run.bind(_effect);
    return runner;
}
