import { isObject } from "@vue/shared";
import {mutableHanlders,ReactiveFlags} from './baseHandler';

export function reactive(target) {
    return createReactiveObject(target);
}

const reactiveMap = new WeakMap();
function createReactiveObject(target) {
    if(!isObject(target)) {
        return;
    }
    const reactiveing = reactiveMap.get(target);
    if(reactiveing) {
        return reactiveing;
    }
    if(target[ReactiveFlags.IS_REACTIVE]) {
        return target;
    }
    const proxy = new Proxy(target, mutableHanlders);
    reactiveMap.set(target,proxy);
    return proxy;
}

export function isReactive(source) {
    return !!(source && source[ReactiveFlags.IS_REACTIVE])
}

export function toReactive(source) {
    return isObject(source) ? reactive(source) : source;
}