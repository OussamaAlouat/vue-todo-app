import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ElementUi from 'element-ui';
import InformationSection from '@/components/InformationSection.vue';

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
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toBeTruthy();
  });
});
