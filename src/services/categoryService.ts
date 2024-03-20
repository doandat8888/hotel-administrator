import { baseAxios, apigatewayAxios } from "../configs/axios"

const getAllCategory = () => {
    return baseAxios.get('/categories');
}

export default {
    getAllCategory
}