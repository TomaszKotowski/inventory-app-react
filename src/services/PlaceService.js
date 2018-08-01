import client from './AxiosClientService';
import PlaceModel from '../models/PlaceModel';
import PlacesStore from '../stores/PlacesStore';

class PlaceService {
  getAllPlaces() {
    return client.get('/api/places')
      .then(result => result.data.map(element => new PlaceModel(element)))
      .catch(err => console.log(err) );
  }

  postNewOffice(placeData) {
    const stringifyData = JSON.stringify(placeData);

    client.post('/api/places',
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
    client.delete(`/api/offices/${placeId}`)
      .catch((err) => {
        console.log(err);
      })
  }
}

export default new PlaceService();
