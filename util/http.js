import axios from 'axios';

const url = 'https://freegle-server-default-rtdb.europe-west1.firebasedatabase.app';

export function storePost(postData) {
    axios.post((url+'/post.json'), postData);
}