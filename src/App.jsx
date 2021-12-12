import React from "react";
import MovieBox from "./components/MovieBox";

class App extends React.Component {
  render() {
    return (
      <main className="main">
        <section className="content">
          {movies.map((movie) => {
            return <MovieBox movie={movie} />;
          })}
        </section>
      </main>
    );
  }
}

export default App;
