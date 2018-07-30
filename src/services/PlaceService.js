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
}