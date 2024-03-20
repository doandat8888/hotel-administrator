import { apigatewayAxios, baseAxios } from "../configs/axios"

const getAllType = () => {
    return baseAxios.get('/types');
}

export default {
    getAllType
}