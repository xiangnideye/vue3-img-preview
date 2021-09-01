import { createApp, h, render } from 'vue'


let vmInstance: any = '';

// 创建Vue实例
export const createInstance = (Component: any, props: any, onFunc: any) => {
  const app = createApp(Component, {
    src: props.src,
    onRemovePrev: onFunc.removePrev
  });

  const parent = document.createElement('div');
  const vm = app.mount(parent);

  vmInstance = app;
  return vm
};

// 把实例插入Body
export const appendChildBody = (vm: any) => {
  document.body.appendChild(vm.$el);
}
