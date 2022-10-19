import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ElementUi from 'element-ui';
import App from '@/App.vue';

describe('App.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(ElementUi);

  let store;

  beforeEach(() => {
    store = new Vuex.Store({});
  });

  it('render App component', () => {
    const wrapper = shallowMount(App, {
      localVue,
      store,
    });

    expect(wrapper).toBeTruthy();
  });
});
