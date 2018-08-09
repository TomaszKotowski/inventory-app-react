import ApiClient from './AxiosClientService';
import PlaceModel from '../models/PlaceModel';

class PlaceService {
  getAllPlaces() {
    return ApiClient.getInstance().get('/api/places')
      .then(result => result.data.map(element => new PlaceModel(element)))
      .catch(err => console.log(err) );
  }

  postNewPlace(placeData) {
    const stringifyData = JSON.stringify(placeData);

    ApiClient.getInstance().post('/api/places',
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

  deleteOffice(placeId) {
    ApiClient.getInstance().delete(`/api/offices/${placeId}`)
      .catch((err) => {
        console.log(err);
      })
  }
  
  getPlaceById(placeId){
    return ApiClient.getInstance().get(`/api/places?id=${placeId}`)
      .then(result => new PlaceModel(result.data))
      .catch(err => {
        console.log(err);
      })
  }
}

export default new PlaceService();
