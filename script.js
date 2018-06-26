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

//klasa movies list 

var MoviesList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired
  },

  render: function(){
    return React.createElement(Movie, {movies:movies})
  }
})


// klasa movie czyli nasz pojedyczny film

var Movie = React.createClass({

  propTypes: {
    movies: React.PropTypes.array.isRequired
  },
// nie wiem czy nie trzeba mapa użyć
  render: movies.map(function(movie){
    // return React.createElement('li', {key: this.props.movie.id},
    // React.createElement(MovieTitle, {movies: movies}),
    // React.createElement(MovieDesc, {movies:movies}),
    // React.createElement(MovieImage, {movies:movies})
    // );
  }) 
})

// klasa movie desciption

var MovieDesc = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },

  render: movies.map(function(movie){
    return React.createElement('p', {key: this.props.movie.id}, this.props.movie.desc)
  })
});

// klasa movies title

var MovieTitle = React.createClass({
  propTypes: {
    movies: React.PropTypes.object.isRequired
  },

  render: movies.map(function(movie){
    return React.createElement('h2', {key: movie.id}, this.props.movie.title)
  })
});

// klasa movie image

var MovieImage = React.createClass({
  propTypes: {
    movies: React.PropTypes.object.isRequired
  },

  render: movies.map(function(movie){
    return React.createElement('img', {key: movie.id, src: this.props.movie.img})
  })
})



var moviesList = React.createElement(MoviesList, {movies:movies});
ReactDOM.render(moviesList, document.getElementById('app'));