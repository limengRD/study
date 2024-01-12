export let activeEffectScope;
class EffectScope {
    effects = [];
    scopes = [];
    parent = null;
    constructor() {
        if(activeEffectScope) {
            activeEffectScope.scopes.push(this);
        }
    }
    run(fn) {
        try {
            this.parent = activeEffectScope;
            activeEffectScope = this;
            return fn();
        } finally {
            activeEffectScope = this.parent;
        }
    }
    stop() {
        for(let i=0;i<this.effects.length;i++) {
            this.effects[i].stop();
        }
        if(this.scopes.length) {
            for(let i=0; this.scopes.length; i++) {
                this.scopes[i].stop();
            }
        }
    }
    
}
export function recordEffectScope(effect) {
    if(activeEffectScope) {
        activeEffectScope.effects.push(effect)
    }
}
export function effectScope() {
    return new EffectScope();
}