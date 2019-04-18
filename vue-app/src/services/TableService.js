import api from './Api';

export default {
  fetchTableData() {
    return api.get('/table');
  },
}
