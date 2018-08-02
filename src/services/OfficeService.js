import client from './AxiosClientService';
import OfficeModel from '../models/OfficeModel';
import OfficesStore from '../stores/OfficesStore';

class OfficeService {
  getAllOffices() {
    return client.get('/api/offices')
      .then(result => result.data.map(element => new OfficeModel(element)))
      .catch(err => console.log(err) );
  }
}

export default new OfficeService();
