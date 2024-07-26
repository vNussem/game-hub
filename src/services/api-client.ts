import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api", 
    params: {
        key: "9786b207a5414272bab8d0a49e88cd8c"
    }
})