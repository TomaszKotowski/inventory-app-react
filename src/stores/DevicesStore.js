import { observable } from 'mobx';
import { find } from 'lodash';

class DeviceStore {
  @observable devicesList;

  constructor() {
    this.devicesList = [];
  }

  /**
   * Reset devices list. 
   * BE CAREFUL!!! It delete all of them!
   */
  clearList() {
    this.devicesList.length = 0;
  }

  /**
   * Add new device to @observable device list
   * @param {Object} deviceData 
   */
  addNewDevice(deviceData) {
    this.devicesList.push(deviceData);
  }

  /**
   * Return device object form all devices list
   * @param {number} index 
   * @returns {Object} selectedDevice
   */
  getDevice(index){
    return this.devicesList[index];
  }

  /**
   * Find device by it's id. Return device object or empty string
   * @param {string} deviceId
   * @returns {Object}
   */
  findDeviceById(deviceId) {
    const result = find(this.devicesList, el => {
      el.id === deviceId
    });

    return (result === null) ? '' : result;
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

    return (result === null) ? '' : result;
  }
}

export default new DeviceStore();