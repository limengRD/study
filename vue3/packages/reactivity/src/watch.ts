// import { isFunction, isObject } from "@vue/shared";
// import { ReactiveEffect } from "./effect";
// import {isReactive} from './reactive';
// function traverse(source,seen = new Set()) {
//     if(!isObject(source)) {
//         return source;
//     }
//     if(seen.has(source)) {
//         return source;
//     }
//     for(let key in source) {
//         traverse(source[key],seen)
//     }
//     seen.add(source);
//     return source;
// }
// function doWatch(source,cb,options) {
//     let getter;
//     if(isReactive(source)) {
//         getter = () => traverse(source);

//     } else if (isFunction(source)){
//         getter = source;
//     };
//     let oldVal;
//     let clean;
//     const onCleanup = (fn) => {
//         clean = fn;
//     }
//     const job = () => {
//         if(cb) {
//             if(clean) clean();
//             const newVal = effect.run();
//             console.log(newVal==oldVal);
//             cb(newVal,oldVal,onCleanup);
//         } else {
//             effect.run();
//         }
//     }
//     const effect = new ReactiveEffect(getter,job);
//     if(options.immediate) {
//         job();
//     }
//     oldVal = effect.run();
//     console.log(oldVal)
// }
// export function watch(source,cb,options: any ={}) {
//     doWatch(source,cb,options);
// }

// export function watchEffect(source,options:any={}) {
//     doWatch(source,null,options);
// }