import { shallowMount } from '@vue/test-utils';
import FormWithBinding from '../../src/components/FormWithBinding';
import FormModel from '../../src/FormModel';
import FormTypes from '../../src/FormModel';

describe('FormWithBinding.vue', () => {
  let wrapper;
  const formsWithBinding = [
    new FormModel(FormTypes.text, 'This is an input'),
    new FormModel(FormTypes.number, 0),
    new FormModel(FormTypes.submit, "Submit"),
  ];

  beforeEach(() => {
    wrapper = shallowMount(
      FormWithBinding,
      {
        propsData: {
          formsWithBinding,
        },
      },
    );
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('always renders a form wrapper', () => {
    expect(wrapper.find('.form-wrapper').exists()).toBe(true);
  });

  it('always renders a form element', () => {
    expect(wrapper.find('form').exists()).toBe(true);
  });

  it('always renders as much inputs ad form prop contain', () => {
    expect(wrapper.findAll('input')).toHaveLength(formsWithBinding.length);
  });

  it('always renders inputs with type as in form models', () => {
    formsWithBinding.forEach((form, index) => {
      expect(wrapper.findAll('input').at(index).attributes().type).toBe(form.type);
    });
  });
});
