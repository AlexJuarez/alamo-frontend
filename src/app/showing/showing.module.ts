import * as angular from 'angular';

import { PanelContainer } from './containers/panel/panel.container';
import { TheaterContainer } from './containers/theater/theater.container';

import { TheaterService } from './services/theater.service';
import { FilmService } from './services/film.service';
import { routing } from './showing.routes';
import { HeroBanner } from './components/hero-banner/hero-banner.component';
import { FilmList } from './containers/film/filmList.container';
import { FilmCard } from './containers/film/filmCard.container';

export const moduleName = angular.module('applications.showing', [
    'ui.router',
])
    .component(PanelContainer.selector, PanelContainer)
    .component(HeroBanner.selector, HeroBanner)
    .component(TheaterContainer.selector, TheaterContainer)
    .component(FilmList.selector, FilmList)
    .component(FilmCard.selector, FilmCard)
    .service(TheaterService.selector, TheaterService)
    .service(FilmService.selector, TheaterService)
    .config(routing)
    .name;

