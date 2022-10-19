import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ElementUi from 'element-ui';
import Activity from '@/components/ActivityComponent.vue';

describe('Activity.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(ElementUi);

  let store;
  let state;

  beforeEach(() => {
    state = {
      activities: () => [],
    };

    store = new Vuex.Store({
      state,
    });
  });

  it('render Activity component', () => {
    const wrapper = shallowMount(Activity, {
      localVue,
      store,
    });

    expect(wrapper).toBeTruthy();
  });
});
