import { shallowMount } from '@vue/test-utils'
import App from '../../src/App';

describe('App.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });
});
