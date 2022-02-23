import axios from "axios"

const callApi = (url, method = "GET", data = null) => {
    return axios({
        url,
        method,
        data,
    })
}

export default callApi