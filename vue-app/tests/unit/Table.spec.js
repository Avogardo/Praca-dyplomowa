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
    });
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });
});
