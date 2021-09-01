

function _interopDefaultLegacy(e) { 
  return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; 
}

let preview = require('./preview/index');

let preview_default = _interopDefaultLegacy(preview);

const components = [
  preview_default['default']
]

const install = (app) => {
  components.forEach(component => {
      app.component(component.name, component);
  });
};

// Object.defineProperty(exports, 'Preview', {
//   enumerable: true,
//   get: function () {
//     return preview_default['default'];
//   }
// });

export default install