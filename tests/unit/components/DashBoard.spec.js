import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ElementUi from 'element-ui';

import DashBoard from '@/components/DashBoard.vue';
import Activity from '@/components/Activity.vue';
import InformationSection from '@/components/InformationSection'
import InputSection from '@/components/InputSection'
describe('DashBoard.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(ElementUi);

  let store;
  let getters;


  beforeEach(() => {
    getters = {
      getActivities: () => {
        return [];
      },
      getErrorMessage: () => {
        return '';
      }
    };

    store = new Vuex.Store({
      getters
    })
  })

  it('render DashBoard component', () => {
    const wrapper = shallowMount(DashBoard, {
      localVue,
      store,
      components: {
        Activity,
        InformationSection,
        InputSection
      }
    });

    expect(wrapper).toBeTruthy();
  })
})