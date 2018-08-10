import ApiClient from './AxiosClientService';
import DeviceModel from "../models/DeviceModel";
import OfficeModel from "../models/OfficeModel";
import PlaceModel from "../models/PlaceModel";
import UserModel from "../models/UserModel";
class IdentifyService {

  findByIdAndPack(id) {
    return ApiClient.getInstance().get(`/api/identify/${id}`)
    .then((value) => {
      console.log(value.data);
      switch (value.data.objectType) {
        case 'device':
            return new DeviceModel(value.data.device);
          break;
        case 'user':
            return new UserModel(value.data.user);
          break;
          case 'place':
            return new PlaceModel(value.data.place);
          break;
          case 'office':
            return new OfficeModel(value.data.office);
          break;
      }
    })
      .catch((error) => {
      console.log(error);
        if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } 
    })
  }

  findById(id){
    return ApiClient.getInstance().get(`/api/identify/${id}`)
      .then((value) => value)
      .catch((error) => {
        console.log(error);
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      })
  }
}

export default new IdentifyService();