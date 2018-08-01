import { find } from 'lodash';
import { observable } from 'mobx';
import Office from '../services/OfficeService';
// import Office2 from './OfficeService';


class OfficesStore {
  @observable officesList;

  constructor() {
    this.officesList = [];
    Office.getAllOffices().then(response => this.setOffices(response));
  }

  setOffices(officesList) {
    this.officesList = officesList;
  }
  /**
   * Add office to list of the stores 
   * @param {Object} data 
   */
  addOffice(data) {
    this.officesList.push(data);
  }

  /**
   * Find and return office by it's id. 
   * If office not found return string 'Office not found'
   * @param {string} officeId 
   */
  findOfficeById(officeId) {
    const office = find(this.officesList, element => {
      element.id === officeId
    });

    return (office === null) ? 'Office not found' : office;
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