import { baseAxiosToken } from "../configs/axios"
import { Transaction } from "../interfaces/Transaction"

const getCurrentUserTransaction = () => {
    return baseAxiosToken.get('/user/transactions')
}

const addTransaction = (transaction: Transaction) => {
    return baseAxiosToken.post('/transaction', {
        ...transaction
    })
}

const deleteTransaction = (transaction: Transaction) => {
    return baseAxiosToken.post('/transaction/delete', {
        ...transaction
    })
}

export default {
    getCurrentUserTransaction,
    addTransaction,
    deleteTransaction
}