import client from './AxiosClientService';
import OfficeModel from '../models/OfficeModel';
import OfficesStore from '../stores/OfficesStore';

class Office {
  getAllOffices() {
    this.axiosInstance.get('/api/offices')
      .then(result => {
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