export class FilmService {
    static selector = 'filmService';

    constructor(
        private $q: angular.IQService,
        private $http: angular.IHttpService
    ) {
        'ngInject';
    }

    get(slug: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.$http.get(`/api/film/${slug}`).then((resp) => {
                resolve(resp.data);
            }).catch((err) => {
                reject(err);
            });
        });
    }
}
