export default class PostsModel {
  constructor() {
    this._posts = [[1, 2, 3, 4]];
  }
  getAllPosts() {
    return this._posts;
  }
}
