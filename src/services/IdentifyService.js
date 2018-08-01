import client from './AxiosClientService';

class IdentifyService {

  findById(id) {
    return client.get(`/api/identify/${id}`)
    .catch((err) => {
      console.log(err);  
    })
  }
}

export default new IdentifyService();