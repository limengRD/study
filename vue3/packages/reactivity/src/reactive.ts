import { isObject } from "@vue/shared";
import {activeEffect} from './effect'

export function reactive(target) {
    return createReactiveObject(target);
}

// const reactiveMap = new WeakMap();
function createReactiveObject(target) {
    if(!isObject(target)) {
        return;
    }
    const mutableHanlders = {
        get(target,key,recevier) {
            console.log('get',key,recevier);
            // return target[key];
            return Reflect.get(target,key,recevier);
        },
        set(target,key,value,recevier) {
            target[key] = value;
            return true;
            // let flag = Reflect.set(target,key,value,recevier);
            // return flag;
        }
    };
    const proxy = new Proxy(target, mutableHanlders);
    return proxy;
}
