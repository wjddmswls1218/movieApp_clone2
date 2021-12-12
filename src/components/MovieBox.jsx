import React from "react";

class MovieBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="moviebox">
        <div className="moviebox__left">
          <img src={this.props.movie.poster} alt="poster" />
        </div>
        <div className="movixbox__right mr">
          <article className="rm__title">{this.props.movie.title}</article>
          <article className="rm__score">{this.props.movie.score}</article>
          <article className="rm__summany">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            quo accusantium doloremque quas amet blanditiis accusamus, nesciunt
            officia ab quasi. Ullam, adipisci distinctio? Nesciunt doloribus et
            maxime sequi, iste quidem.
          </article>
        </div>
      </div>
    );
  }
}

export default MovieBox;
