import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ElementUi from 'element-ui';

import DashBoard from '@/components/DashboardComponent.vue';
import Activity from '@/components/ActivityComponent.vue';
import InformationSection from '@/components/InformationSection.vue';
import InputSection from '@/components/InputSection.vue';

describe('DashBoard.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(ElementUi);

  let store;
  let state;

  beforeEach(() => {
    state = {
      activities: () => [],
      errorMessage: () => '',
    };

    store = new Vuex.Store({
      state,
    });
  });

  it('render DashBoard component', () => {
    const wrapper = shallowMount(DashBoard, {
      localVue,
      store,
      components: {
        Activity,
        InformationSection,
        InputSection,
      },
    });

    expect(wrapper).toBeTruthy();
  });
});
