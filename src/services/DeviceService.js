import ApiClient from './AxiosClientService';
import DeviceModel from '../models/DeviceModel';

class DeviceService {
  /**
   * Download all devices list
  */
  getAllDevices() {
    return ApiClient.getInstance().get('/api/devices')
      .then(result => result.data.map(element => new DeviceModel(element)))
      .catch(err => console.log(err) );
  }

  postNewDevice(deviceData) {
    const stringifyData = JSON.stringify(deviceData);

    ApiClient.getInstance().post('/api/devices', 
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
    ApiClient.getInstance().delete(`/api/devices/${deviceId}`)
    .catch((err) => {
      console.log(err);
    })
  }

  findDevicesAllocatedToUser(userId) {
    return ApiClient.getInstance().get(`/api/devices?belongsToId=${userId}`)
    .catch((err) => {
      console.log(err);
    }) 
  }
}

export default new DeviceService();