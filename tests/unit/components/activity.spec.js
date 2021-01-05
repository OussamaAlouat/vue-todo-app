import { shallowMount, createLocalVue } from '@vue/test-utils'
import Activity from '@/components/Activity.vue';
import Vuex from 'vuex';
import ElementUi from 'element-ui';

describe('Activity.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(ElementUi);

  let store;
  let getters;


  beforeEach(() => {
    getters = {
      getActivities: () => {
        return [];
      }
    };

    store = new Vuex.Store({
      getters
    })
  })

  it('render Activity component', () => {
    const wrapper = shallowMount(Activity, {
      localVue,
      store
    });

    expect(wrapper).toBeTruthy();
  })
})