import service from '../plugins/request';

export class CoinsService {
    /**
     * @returns {Promise<.AxiosResponse<any>>}
     */
    static async getCoinsList() {
        return service.get('/api/Home/v1/coins');
    }

    static getCurrencyList(order) {
        return service.get('/api/Home/grafMainPage' + order);
    }

    async getCoinsList() {
        return service.get('/api/Home/v1/coins');
    }

    /**
     * @param query
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getCoinsRate(query) {
        return service.get('/api/Home/v1/rate' + query)
    }

    /**
     * @param query
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getLimits(query) {
        return service.get('/api/Home/getLimits' + query)
    }
}

export default new CoinsService();
