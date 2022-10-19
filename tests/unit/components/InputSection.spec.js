import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ElementUi from 'element-ui';
import InputSection from '@/components/InputSection.vue';

describe('InputSection.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(ElementUi);
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
    });
  });

  it('render InputSection component', () => {
    const wrapper = shallowMount(InputSection, {
      localVue,
      store,
    });

    expect(wrapper).toBeTruthy();
  });
});
