import client from './AxiosClientService';

import DeviceModel from '../models/DeviceModel';
import DevicesStore from '../stores/DevicesStore';

class DeviceService {
  /**
   * Download all devices list
  */
  getAllDevices() {
    return client.get('/api/devices')
      .then(result => result.data.map(item => new DeviceModel(item)))
      .catch(err => {
        console.log(err);
      });
  }
}

export default new DeviceService();