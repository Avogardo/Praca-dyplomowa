import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Navigation from '../../src/views/Navigation';

describe('Navigation.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter();
    wrapper = shallowMount(Navigation, {
      localVue,
      router,
    });
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('always renders a nav element', () => {
    expect(wrapper.find('nav').exists()).toBe(true);
  });

  it('always renders a ul element', () => {
    expect(wrapper.find('ul').exists()).toBe(true);
  });

  it('always renders 5 Link components', () => {
    expect(wrapper.findAll('li')).toHaveLength(5);
  });
});
