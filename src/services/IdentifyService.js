import ApiClient from './AxiosClientService';

class IdentifyService {

  findById(id) {
    return ApiClient.getInstance().get(`/api/identify/${id}`)
    .catch((err) => {
      console.log(err);  
    })
  }
}

export default new IdentifyService();