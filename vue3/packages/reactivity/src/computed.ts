// import { isFunction } from "@vue/shared";
// import { ReactiveEffect, activeEffect } from "./effect";
// import { trackEffects, triggerEffects } from "./baseHandler";
// class ComputedRefImpl {
//     __v_isRef = true;
//     _value;
//     effect;
//     dep = new Set();
//     _dirty = true;
//     constructor(public getter,public setter) {
//         this.effect = new ReactiveEffect(getter,() => {
//             if(!this._dirty) {
//                 this._dirty = true;
//                 triggerEffects(this.dep);
//             }
//         });
//     }
//     get value() {
//         if(activeEffect) {
//             trackEffects(this.dep);
//         }
//         if(this._dirty) {
//             this._dirty = false;
//             this._value = this.effect.run();
//         }
//         return this._value;
//     }
//     set value(val) {
//         this.setter(val);
//     }
// }
// export function computed(getterOrOptions) {
//     const isGetter = isFunction(getterOrOptions);
//     let getter;
//     let setter;
//     if(isGetter) {
//         getter = getterOrOptions;
//         setter = () => {
//             console.warn("is readOnly");
//         }
//     } else {
//         getter = getterOrOptions.get;
//         setter = getterOrOptions.set;
//     }
//     return new ComputedRefImpl(getter,setter);
// }