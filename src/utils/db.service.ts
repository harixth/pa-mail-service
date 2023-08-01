import mongoose from 'mongoose';
import { WebhookData } from './type';

mongoose.connect(process.env.MONGO_URL);
const requestSchema = new mongoose.Schema(
  { event: String, payload: Object },
  { strict: false, autoCreate: true },
);
const Request = mongoose.model('Request', requestSchema);

export class DBService {
  async saveObjectToCollection(data: WebhookData) {
    const request = new Request(data);
    return request
      .save()
      .then((res) => console.log(`Request ${res._id} saved to DB`))
      .catch((err) => console.error(err));
  }
}
