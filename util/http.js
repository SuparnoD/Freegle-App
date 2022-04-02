import axios from "axios";

const url =
  "https://freegle-server-default-rtdb.europe-west1.firebasedatabase.app";

export function storePost(postData) {
  axios.post(url + "/post.json", postData);
}

export async function fetchPost() {
  const response = await axios.get(url + "/post.json");

  const posts = [];

  for (const key in response.data) {
    const postObj = {
      id: key,
      description: response.data[key].description,
      quantity: response.data[key].quantity,
      title: response.data[key].title,
      type: response.data[key].type,
      user: response.data[key].user,
      img: response.data[key].img,
    };
    posts.push(postObj);
  }
  return posts;
}
