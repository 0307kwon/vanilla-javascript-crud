import { ALERT, CONSTRAINT } from "../common/variable.js";
import Post from "./object/post.js";

export default class PostsModel {
  constructor() {
    this._maxID = 0;
    this._posts = [];
  }
  addNewPost({ postTitle, postContents }) {
    if (postTitle.length < CONSTRAINT.MIN_POST_TITLE_LENGTH) {
      throw ALERT.EMPTY_POST_TITLE;
    }
    if (postContents < CONSTRAINT.MIN_POST_CONTENTS_LENGTH) {
      throw ALERT.EMPTY_POST_CONTENTS;
    }
    this._posts.push(new Post(this._maxID, postTitle, postContents));
    this._maxID += 1;
  }
  getAllPosts() {
    return this._posts;
  }
}
