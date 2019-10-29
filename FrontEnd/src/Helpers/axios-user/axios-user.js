import axios from 'axios'; // not tested yet 
export default axiosUser = (url, formData = null, token, methodType = 'get') => {
    
    if(methodType === 'get'){
        return axios.get('http://localhost:8001/api/' + url, formData, {
            Accept : 'application/json',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }
    if(methodType === 'post'){
        return axios.post('http://localhost:8001/api/' + url, formData, {
            Accept : 'application/json',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }

    if(methodType === 'put'){
        return axios.put('http://localhost:8001/api/' + url, formData, {
            Accept : 'application/json',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }

    if(methodType === 'delete'){
        return axios.delete('http://localhost:8001/api/' + url, {
            Accept : 'application/json',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }
}