import { TheaterContainer } from './containers/theater/theater.container';
import { TheaterService } from './services/theater.service';
import { FilmCard } from './containers/film/filmCard.container';
import { Transition } from '@uirouter/angularjs';
import { FilmList } from './containers/film/filmList.container';
import { PanelContainer } from './containers/panel/panel.container';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
    'ngInject';
    $stateProvider
        .state('panel', {
            parent: 'app',
            component: PanelContainer.selector,
            abstract: true,
        })
        .state('panel.theaters', {
            url: '/theaters',
            views: {
                section1: {
                    component: TheaterContainer.selector,
                }
            },
            resolve: {
                theaters: function(theaterService: TheaterService) {
                    return theaterService.all();
                }
            }
        })
        .state('panel.theater', {
            url: '/theater/:slug',
            views: {
                section1: {
                    component: TheaterContainer.selector,
                },
                section2: {
                    component: FilmList.selector,
                }
            },
            resolve: {
                theaters: function(theaterService: TheaterService) {
                    return theaterService.all();
                },
                films: function (theaterService: TheaterService, $transition$: Transition) {
                    return theaterService.get($transition$.params().slug);
                },
                theater: function ($transition$: Transition) {
                    return Promise.resolve($transition$.params().slug);
                }
            }
        })
        .state('panel.film', {
            url: '/show/:slug',
            views: {
                section1: {
                    component: FilmCard.selector,
                }
            }
        });
};
