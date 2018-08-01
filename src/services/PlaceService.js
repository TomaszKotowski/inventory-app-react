import client from './AxiosClientService';
import PlaceModel from '../models/PlaceModel';
import PlacesStore from '../stores/PlacesStore';

class PlaceService {
  getAllPlaces() {
    return client.get('/api/places')
      .then(result => result.data.map(element => new PlaceModel(element)))
      .catch(err => console.log(err));
  }
}

export default new PlaceService();

