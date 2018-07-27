class Place {
  getAllPlaces() {
    this.axiosInstance.get('/api/places')
      .then(result => {
        return result;
      })
      .catch(err => {
        console.log(err);
      });
  }
}