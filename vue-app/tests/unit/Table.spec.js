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

  it('replace first row with the second one', () => {
    const firstRowText = wrapper.find('tr').find('td').text();
    const secondRowText = wrapper.findAll('tr').at(1).find('td').text();
    wrapper.find('button').trigger('click');
    const newFirstRowText = wrapper.find('tr').find('td').text();
    const newSecondRowText = wrapper.findAll('tr').at(1).find('td').text();
    expect(newFirstRowText).toBe(secondRowText);
    expect(newSecondRowText).toBe(firstRowText);
  });

  it('remove all rows on click hide rows button', () => {
    expect(wrapper.findAll('tr').length).toBe(5000);
    wrapper.findAll('button').at(1).trigger('click');
    expect(wrapper.findAll('tr').length).toBe(0);
  });

  it('change texts in all rows', () => {
    const numberOfRows = 5000;
    const texts = [];
    for (let i = 0; i < numberOfRows; i++) {
      texts.push(wrapper.findAll('tr').at(i).text());
    }
    wrapper.findAll('button').at(2).trigger('click');
    const newTexts = [];
    for (let i = 0; i < numberOfRows; i++) {
      newTexts.push(wrapper.findAll('tr').at(i).text());
    }
    const areNotEqual = newTexts.every((newText, index) => newText !== texts[index]);
    expect(areNotEqual).toBe(true);
  });

  it('change texts in every 10 rows', () => {
    const numberOfRows = 5000;
    const texts = [];
    for (let i = 0; i < numberOfRows; i++) {
      texts.push(wrapper.findAll('tr').at(i).text());
    }
    wrapper.findAll('button').at(3).trigger('click');
    const newTexts = [];
    for (let i = 0; i < numberOfRows; i++) {
      newTexts.push(wrapper.findAll('tr').at(i).text());
    }
    const areEqual = newTexts.every((newText, index) => {
      if (index % 10 === 0) {
        return newText !== texts[index];
      }
      return newText === texts[index];
    });
    expect(areEqual).toBe(true);
  });

  it('remove one row on click remove row button', () => {
    const rowsLength = wrapper.findAll('tr').length;
    wrapper.findAll('button').at(4).trigger('click');
    const newRowsLength = wrapper.findAll('tr').length;
    expect(newRowsLength).toBe(rowsLength - 1);
  });

  it('add one row on click add row button', () => {
    const rowsLength = wrapper.findAll('tr').length;
    wrapper.findAll('button').at(5).trigger('click');
    const newRowsLength = wrapper.findAll('tr').length;
    expect(newRowsLength).toBe(rowsLength + 1);
  });
});
