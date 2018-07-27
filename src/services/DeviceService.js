class Device {
  /**
 * Download all devices list
 */
  getAllDevices() {
    this.axiosInstance.get('/api/devices')
      .then(result => {
        return result;
      })
      .catch(err => {
        console.log(err);
      });
  }
}