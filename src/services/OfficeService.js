import client from './AxiosClientService';
import OfficeModel from '../models/OfficeModel';
import OfficesStore from '../stores/OfficesStore';

class Office {
  getAllOffices() {
    client.get('/api/offices')
      .then(result => {
        console.log(result.data);
        result.data.forEach(element => {
          const office = new OfficeModel(element);
          OfficesStore.addOffice(office);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default new Office();