import React from "react";
import "../styles/_index.scss"; // importa el archivo Sass

interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  poster: string;
}

const movies: Movie[] = [
  { id: 1, title: "Película 1", year: 2015, genre: "Animación", poster: "https://picsum.photos/200/300?random=1" },
  { id: 2, title: "Película 2", year: 2018, genre: "Comedia", poster: "https://picsum.photos/200/300?random=2" },
  { id: 3, title: "Película 3", year: 2020, genre: "Drama", poster: "https://picsum.photos/200/300?random=3" },
  { id: 4, title: "Película 4", year: 2021, genre: "Terror", poster: "https://picsum.photos/200/300?random=4" },
  { id: 5, title: "Película 5", year: 2022, genre: "Ciencia Ficción", poster: "https://picsum.photos/200/300?random=5" },
  { id: 6, title: "Película 6", year: 2019, genre: "Acción", poster: "https://picsum.photos/200/300?random=6" }
];

const Catalogo: React.FC = () => {
  return (
    <div>
      <h1 className="titulo">Catálogo de Películas</h1>
      <div className="grid">
        {movies.map((movie) => (
          <div className="card" key={movie.id}>
            <img src={movie.poster} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <p>Género: {movie.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
