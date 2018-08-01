import client from './AxiosClientService';

import DeviceModel from '../models/DeviceModel';
import DevicesStore from '../stores/DevicesStore';

class DeviceService {
  /**
   * Download all devices list
  */
  getAllDevices() {
    client.get('/api/devices')
      .then(result => {
        result.data.forEach(element => {
          const device = new Device(result.data);
          DevicesStore.addNewDevice(device);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  postNewDevice(deviceData) {
    const stringifyData = JSON.stringify(deviceData);

    client.post('/api/devices', 
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

  deleteDevice(deviceId) {
    client.delete(`/api/devices/${deviceId}`)
    .catch((err) => {
      console.log(err);
    })
  }
}

export default new DeviceService();