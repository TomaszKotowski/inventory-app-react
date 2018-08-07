import { observable } from 'mobx';
import { find } from 'lodash';
import DeviceService from '../services/DeviceService';

class DevicesStore {
  
  @observable devicesList = [];

  constructor() {
    DeviceService.getAllDevices().then((list) => this.addDeviceList(list));
  }


  /**
   * Reset devices list. 
   * BE CAREFUL!!! It delete all of them!
   */
  clearList() {
    this.devicesList = [];
  }

  setDevices(devicesList) {
    this.devicesList = devicesList;
  }

  /**
   * Add new device to @observable device list
   * @param {Object} deviceData 
   */
  addNewDevice(deviceData) {
    this.devicesList.push(deviceData);
  }

  /**
   * Add all device list
   * @param {Array} deviceList 
   */
  addDeviceList(deviceList) {
    this.devicesList = deviceList;
  }

  /**
   * Return device object form all devices list
   * @param {number} index 
   * @returns {Object} selectedDevice
   */
  getDevice(index) {
    return this.devicesList[index];
  }

  /**
   * Find device by it's id. Return device object or empty string
   * @param {string} deviceId
   * @returns {Object}
   */
  findDeviceById(deviceId) {
    const result = find(this.devicesList, el => el.id === deviceId);

   

    return (result === null) ? null : result;
  }

  /**
   * Find devices which one belongs to user described by his Id.
   * If any device not found return empty string.
   * @param {string} userId 
   */
  findDevicesBelongsTo(userId) {
    const result = find(this.devicesList, el => {
      el.belongsToId === userId
    });

    return (result === null) ? null : result;
  }
}

export default new DevicesStore();