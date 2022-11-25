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
  let wrapper;
  let actions;

  beforeEach(() => {
    state = {
      activities: [],
    };
    actions = {
      initData: () => jest.fn(),
      changeActivityState: jest.fn(),
    };

    store = new Vuex.Store({
      state,
      actions,
    });

    wrapper = shallowMount(Activity, {
      localVue,
      store,
    });
  });

  it('render Activity component', () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it('On click on completeActivity, method changeActivityState will be called', () => {
    const spyed = jest.spyOn(actions, 'changeActivityState');
    wrapper.vm.completeActivity({});
    expect(spyed).toBeCalled();
  });

  it('When row is completed the color will be "success-row"', () => {
    const mockedData = {
      id: 'id1',
      name: 'Test activity',
      completed: true,
    };

    const color = wrapper.vm.tableRowColor({ row: mockedData });
    expect(color).toBe('success-row');
  });

  it('When row is not completed the color will be "warning-row"', () => {
    const mockedData = {
      id: 'id1',
      name: 'Test activity',
      completed: false,
    };

    const color = wrapper.vm.tableRowColor({ row: mockedData });
    expect(color).toBe('warning-row');
  });
});
