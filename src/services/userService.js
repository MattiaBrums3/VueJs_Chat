import axios from 'axios'

class userService {
    getAll() {
        return axios.get('http:localhost:8082/users')
    }

    getById(id) {
        return axios.get('http://localhost:8082/users/' + id)
    }

    insert(user) {
        return axios.post('http://localhost:8082/users', user)
    }
}
