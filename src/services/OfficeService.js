import client from './AxiosClientService';
import OfficeModel from '../models/OfficeModel';
class Office {
  getAllOffices() {
    return client.get('/api/offices')
      .then(result => result.data.map(item => new OfficeModel(item)))
      .catch(err => {
        console.log(err);
      });
  }
}

export default new Office();