import VuePreview from './src/preview.vue';

VuePreview.install = function(app: any) {
  app.component(VuePreview.name, VuePreview);
};

export default VuePreview;