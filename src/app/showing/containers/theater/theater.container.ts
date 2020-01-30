import './theater.container.scss';

export class TheaterContainer implements angular.IComponentOptions {
    static selector = 'theaterContainer';
    static bindings = { theaters: '<' };
    static template = require('./theater.container.html');
}
