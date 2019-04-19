import { shallowMount } from '@vue/test-utils'
import FormWithReferences from '../../src/components/FormWithReferences';
import FormTypes from "../../src/FormModel";
import FormModel from "../../src/FormModel";

describe('FormWithReferences.vue', () => {
  let wrapper;
  const formsWithReferences = [
    new FormModel(FormTypes.text, 'This is an input'),
    new FormModel(FormTypes.number, 0),
    new FormModel(FormTypes.submit, "Submit"),
  ];

  beforeEach(() => {
    wrapper = shallowMount(FormWithReferences,
      {
        propsData: {
          formsWithReferences,
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
    expect(wrapper.findAll('input')).toHaveLength(formsWithReferences.length);
  });

  it('always renders inputs with type as in form models', () => {
    formsWithReferences.forEach((form, index) => {
      expect(wrapper.findAll('input').at(index).attributes().type).toBe(form.type);
    });
  });
});
