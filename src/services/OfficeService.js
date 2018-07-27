class Office {
  getAllOffices() {
    this.axiosInstance.get('/api/offices')
      .then(result => {
        return result;
      })
      .catch(err => {
        console.log(err);
      });
  }
}