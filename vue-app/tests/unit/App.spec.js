import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router';
import App from '../../src/App';
import Navigation from '../../src/views';

describe('App.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter();
    wrapper = shallowMount(App, {
      localVue,
      router,
    });
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('always renders app wrapper', () => {
    expect(wrapper.find('#app').exists()).toBe(true);
  });

  it('always renders a Navigation component', () => {
    expect(wrapper.find(Navigation).exists()).toBe(true);
  });

  it('always renders a router view element', () => {
    expect(wrapper.find('router-view')).toBeDefined();
  });
});
