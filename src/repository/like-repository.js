import CrudRepository from "./crud-repository";
import Like from "../models/like.js";

class LikeRepository extends CrudRepository {
  constructor() {
    super(Like);
  }
}

export default LikeRepository;
