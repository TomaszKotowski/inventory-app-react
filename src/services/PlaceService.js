import client from './AxiosClientService';
import PlaceModel from '../models/PlaceModel';
import PlacesStore from '../stores/PlacesStore';

class Place {
  getAllPlaces() {
    client.get('/api/places')
      .then(result => {
        result.data.forEach(element => {
          const place = new PlaceModel(element);
          PlacesStore.addPlace(place);
        });
      })
      .catch(err => {
        console.log(err);
      });
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