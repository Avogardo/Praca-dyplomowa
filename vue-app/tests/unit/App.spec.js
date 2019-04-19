import { shallowMount } from '@vue/test-utils'
import App from '../../src/App';
import Navigation from '../../src/views/Navigation';

describe('App.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App);
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
    expect(wrapper.find('router-view').exists()).toBe(true);
  });
});
