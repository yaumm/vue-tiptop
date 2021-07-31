import Vue from 'vue';
import Material from './Material.vue';

const PageConstructor = Vue.extend(Material);
const VueMaterial = () => {
  const Page = new PageConstructor();
  Page.$mount();
  Page.getMaterialURL();
  document.body.appendChild(Page.$el);

  Vue.prototype.$material = async (options) => {
    Page.parseOptions(options);
    window.top.postMessage('openMask()', '*');
    Page.show = true;
    window.top.postMessage('openMask()', '*');
    const result = await Page.waitSuccess();
    return result;
  };

  return Page;
};

export default VueMaterial;
