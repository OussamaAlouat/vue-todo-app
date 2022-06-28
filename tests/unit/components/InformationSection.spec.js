import { shallowMount, createLocalVue } from '@vue/test-utils';
import InformationSection from '@/components/InformationSection.vue';
import Vuex from 'vuex';
import ElementUi from 'element-ui';

describe('InformationSection.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(ElementUi);

  let store;
  let state;

  beforeEach(() => {
    state = {
      activities: [],
    };

    store = new Vuex.Store({
      state,
    });
  });

  it('render InformationSection component', () => {
    const wrapper = shallowMount(InformationSection, {
      localVue,
      store,
    });

    expect(wrapper).toBeTruthy();
  });
});
