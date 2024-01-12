import { isObject } from '@vue/shared';
import {activeEffect} from './effect'
import {reactive} from './reactive'
export const enum ReactiveFlags {
    "IS_REACTIVE" = "__v_isReactive"
}
export const mutableHanlders = {
    get(target,key,recevier) {
        
        if(key == ReactiveFlags.IS_REACTIVE) {
            return true;
        }
        track(target,key);
        let result = Reflect.get(target,key,recevier);
        if(isObject(result)) {
            return reactive(result);
        }
        return result;
    },
    set(target,key,value,recevier) {
        let oldValue = target[key];
        let flag = Reflect.set(target,key,value,recevier);
        if(oldValue !== value) {
            trigger(target,key,value,oldValue);
        }
        return flag;
    }
};
const targetMap = new WeakMap();
function track(target,key) {
    if(activeEffect) {
        let depsMap = targetMap.get(target);
        if(!depsMap) {
            targetMap.set(target, depsMap = new Map());
        }
        let dep = depsMap.get(key);
        if(!dep) {
            depsMap.set(key,dep = new Set());
        }
        trackEffects(dep);
    }
}
function trigger(target,key,value,oldValue) {
    const depsMap = targetMap.get(target);
    if(!depsMap) {
       return; 
    }
    let effects = depsMap.get(key);

    triggerEffects(effects);
}

export function trackEffects(dep) {
    let shouldTrack = dep.has(activeEffect);
    if(!shouldTrack) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
    }
}

export function triggerEffects(effects) {
    if(effects) {
        effects = [...effects];
        effects.forEach(effect => {
            if(activeEffect !== effect) {
                if(effect.scheduler) {
                    effect.scheduler();
                } else {
                    effect.run();
                }
            }
        })
    }
}