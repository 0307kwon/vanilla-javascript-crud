import Post from "./object/post.js";

export default class PostsModel {
  constructor() {
    this._maxID = 0;
    this._posts = [];
  }
  addNewPost({ postTitle, postContents }) {
    this._posts.push(new Post(this._maxID, postTitle, postContents));
    this._maxID += 1;
  }
  getAllPosts() {
    return this._posts;
  }
}
