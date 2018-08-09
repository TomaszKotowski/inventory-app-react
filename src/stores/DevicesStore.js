import { observable, action } from 'mobx';
import { find } from 'lodash';
import DeviceService from '../services/DeviceService';

class DevicesStore {

  @observable devicesList = [];

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
   * @param {Array} devicesList
   */
  addDeviceList(devicesList) {
    this.devicesList = devicesList;
  }

  async getAllDevices() {
    if (this.devicesList.length < 2) {
      const deviceList = await DeviceService.getAllDevices();
      this.addDeviceList(deviceList);
    }

    return this.devicesList;
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
  @action
  async findDeviceById(deviceId) {
    const result = await find(this.devicesList, el => el.id === deviceId);

    if (!result) {
      const newDevices = await DeviceService.findByDeviceId(deviceId);
      this.setToDeviceList(newDevices)
      // console.log(newDevices);
      // console.log(newDevices.belongsToId);
      return newDevices;
    }

    return result;
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

  setToDeviceList(data) {
    const device = find(this.devicesList, item => item.id === data.id);
    if (!device) {
      this.devicesList.push(data);
    }
  }
}

export default new DevicesStore();