// controllers/postController.js

import { getAllPosts } from "../data/posts.js";

export function listPosts(req, res) {
  const posts = getAllPosts();
  return res.json({ posts });
}
