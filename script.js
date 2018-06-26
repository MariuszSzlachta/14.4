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
    desc: React.PropTypes.string.isRequired
  },

  render: function(){
    return React.createElement('p', {}, this.props.desc)
  }
});

// klasa movies title

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  render: function(){
    return React.createElement('h2', {}, this.props.title)
  }
});

// klasa movie image

var MovieImage = React.createClass({
  propTypes: {
    img: React.PropTypes.string.isRequired
  },

  render: function(){
    return React.createElement('img', {src: this.props.img})
  }
});

// klasa movie czyli nasz pojedyczny film

var Movie = React.createClass({

  propTypes: {
    movie: React.PropTypes.object.isRequired
  },

  render: function(){
    return React.createElement('li', {key: this.props.movie.id},
    React.createElement(MovieTitle, {title: this.props.movie.title}),
    React.createElement(MovieDesc, {desc: this.props.movie.desc}),
    React.createElement(MovieImage, {img: this.props.movie.img})
    );
  }
});
//klasa movies list 

var MoviesList = React.createClass({

  propTypes: {
    movies: React.PropTypes.array.isRequired,
  },

  render: function(){
    console.log(this.props);
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