import axios from 'axios'

const viaCep = axios.create({
    baseURL: 'viacep.com.br/'
})

export default viaCep