import './filmList.container.scss';

export class FilmList implements angular.IComponentOptions {
    static selector = 'filmList';
    static bindings = { films: '<', theater: '<' };
    static template = require('./filmList.container.html');
}
