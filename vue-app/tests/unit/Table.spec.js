import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router';
import Table from '../../src/components/Table';

describe('Table.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter();
    wrapper = shallowMount(Table, {
      localVue,
      router,
      propsData: {
        bigTable: true,
      },
    });
  });

  it('renders without crashing with server data', () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter();
    wrapper = shallowMount(Table, {
      localVue,
      router,
      propsData: {
        bigTable: false,
      },
    });
    expect(wrapper).toBeDefined();
  });

  it('renders without crashing with big static data', () => {
    expect(wrapper).toBeDefined();
  });

  it('always renders a table element', () => {
    expect(wrapper.find('table').exists()).toBe(true);
  });

  it('always renders a table element', () => {
    expect(wrapper.find('.table-wrapper').exists()).toBe(true);
  });

  it('always renders a 6 functional button elements', () => {
    expect(wrapper.findAll('button')).toHaveLength(6);
  });
});
