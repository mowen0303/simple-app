export default class IBMService {

    static getPostsData(){
        return fetch(`https://jsonplaceholder.typicode.com/posts`).then(res => res.json());
    }

}
