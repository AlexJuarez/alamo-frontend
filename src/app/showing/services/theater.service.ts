export class TheaterService {
    static selector = 'theaterService';

    constructor(
        private $http: angular.IHttpService
    ) {
        'ngInject';
    }

    all(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.$http.get('/api/theaters').then((resp) => {
                resolve(resp.data);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    get(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.$http.get(`/api/theater/${id}`).then((resp) => {
                resolve(resp.data);
            }).catch((err) => {
                reject(err);
            });
        });
    }
}
