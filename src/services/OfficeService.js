import ApiClient from './AxiosClientService';
import OfficeModel from '../models/OfficeModel';

class OfficeService {
  getAllOffices() {
    return ApiClient.getInstance().get('/api/offices')
      .then(result => result.data.map(element => new OfficeModel(element)))
      .catch(err => console.log(err));
  }

  postNewOffice(officeData) {
    const stringifyData = JSON.stringify(officeData);

    ApiClient.getInstance().post('/api/offices',
      stringifyData,
      {
        headers: {
          'ContentType': 'application/json'
        },
      })
      .catch((err) => {
        console.log(err);
      })
  }

  deleteOffice(officeId) {
    ApiClient.getInstance().delete(`/api/offices/${officeId}`)
      .catch((err) => {
        console.log(err);
      })
  }

  getOfficeById(officeId) {
    return ApiClient.getInstance().get(`/api/offices?id=${officeId}`)
      .then(result => new OfficeModel(result.data[0]))
      .catch(err => {
        console.log(err);
      })
  }
}

export default new OfficeService();
