import callApi from "../utils/callApi";

const api = {
    dangKy(data) {
        return (callApi("http://127.0.0.1:8000/api/register","POST", data));
    }
}

export default api