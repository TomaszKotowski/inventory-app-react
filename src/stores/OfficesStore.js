import { find } from 'lodash';
import { observable, action } from 'mobx';
import OfficeService from '../services/OfficeService';

class OfficesStore {
  @observable officesList = [];

  setOffices(officesList) {
    this.officesList = officesList;
  }
  /**
   * Add office to list of the stores 
   * @param {Object} data 
   */
  addOffice(data) {
    const office = find(this.officesList, item => item.id === data.id);
    if (!office) {
      this.officesList.push(data);
    }
  }

  async getAllOffices() {
    if (this.officesList.length < 2) {
      const officeList = await OfficeService.getAllOffices();
      this.addOfficesList(officeList);
    }

    return this.officesList;
  }

  addOfficesList(officesList) {
    this.officesList = officesList;
  }

  /**
   * Find and return office by it's id. 
   * If office not found return string 'Office not found'
   * @param {string} officeId 
   */
  findOfficeById(officeId) {
    const office = find(this.officesList, element => element.id === officeId);

    return (office === null) ? 'Office not found' : office;
  }

  @action
  async getOfficeById(id) {
    const office = find(this.officesList, item => item.id === id);

    if (!office) {
      const newOffice = await OfficeService.getOfficeById(id);
      this.addOffice(newOffice);
      return newOffice;
    }

    return office;
  }

  /**
   * Find and return office by it's id. 
   * If office not found return string 'Office not found'
   * @param {string} cityName 
   */
  findOfficeByCityName(cityName) {
    const office = find(this.officesList, element => {
      element.name === cityName
    });

    return (office === null) ? 'Office not found' : office;
  }

}

export default new OfficesStore();