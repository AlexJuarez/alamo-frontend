const restify = require('restify');
const server = restify.createServer();

const get = (arr, o) => arr.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o);

const data = require('./data-mock');
const theaters = get(['data', 'market', 'cinemas'], data).map(d => ({
  id: d.id,
  slug: d.slug,
  name: d.name,
}));

const films = {};
get(['data', 'films'], data).forEach(film => {
  const { slug } = film;
  if (films[slug] == null) {
    films[slug] = film;
  }
});

const movies = {};
get(['data', 'sessions'], data).forEach(film => {
  const { cinemaId, filmSlug } = film;
  const theater = theaters.find(t => t.id === cinemaId);
  if (movies[theater.slug] == null) {
    movies[theater.slug] = new Set();
  }
  movies[theater.slug].add(filmSlug);
});

server.get('/api/theaters', (req, res, next) => {
  res.send(theaters);
  next();
});

server.get('/api/theater/:slug', (req, res, next) => {
  const showing = [];
  Array.from(movies[req.params.slug]).forEach(filmSlug => {
      showing.push(films[filmSlug]);
  });

  res.send(showing);
  next();
});

server.get('/api/film/:slug', (req, res, next) => {
  const film = films[req.params.slug];
  res.send(film);
  next();
});

server.listen(9001, function() {
  console.log('%s listening at %s', server.name, server.url);
});
