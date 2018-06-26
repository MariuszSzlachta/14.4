var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'images/harry.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'images/lion.jpg'
  },
  {
    id: 3,
    title: 'Szklana pułapka',
    desc: 'fajny film akcji',
    img: 'images/szklana.jpg'
  },
  {
    id: 4,
    title: 'Liga Niezwykłych Dżentelmenów',
    desc: 'Film fantasy',
    img: 'images/liga.jpg'
  }
];

// klasa movie desciption

var MovieDesc = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },

  render: movies.map(function(movie){
    return React.createElement('p', {key: movie.id}, movie.desc)
  })
});

// klasa movies title

var MovieTitle = React.createClass({
  propTypes: {
    movies: React.PropTypes.object.isRequired
  },

  render: movies.map(function(movie){
    return React.createElement('h2', {key: movie.id}, movie.title)
  })
});

// klasa movie image

var MovieImage = React.createClass({
  propTypes: {
    movies: React.PropTypes.object.isRequired
  },

  render: movies.map(function(movie){
    return React.createElement('img', {key: movie.id, src: movie.img})
  })
});

// klasa movie czyli nasz pojedyczny film

var Movie = React.createClass({

  propTypes: {
    movies: React.PropTypes.object.isRequired
  },
// nie wiem czy nie trzeba mapa użyć
  render: movies.map(function(movie){
    return React.createElement('li', {key: movie.id},
    React.createElement(MovieTitle, {key: movie.id}),
    React.createElement(MovieDesc, {key: movie.id}),
    React.createElement(MovieImage, {key: movie.id})
    );
  })
});
//klasa movies list 

var MoviesList = React.createClass({

  propTypes: {
    movies: React.PropTypes.array.isRequired,
  },

  render: function(){
    var moviesElements = this.props.movies.map(function(movie){
      return React.createElement(Movie, {movie, key: movie.id});
    });

    return (
      React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)

      )
    )
  }
});

var moviesList = React.createElement(MoviesList, {movies:movies});
ReactDOM.render(moviesList, document.getElementById('app'));