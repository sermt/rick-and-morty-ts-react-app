import { useState } from "react";
import CharacterList from "./components/CharacterList";
import NavigationBar from "./components/NavigationBar";
import useFetch from "./hooks/useFetch";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const baseUrl = `https://rickandmortyapi.com/api/character?page=${currentPage}`;

  const { data, error, isLoading } = useFetch(baseUrl);
  const onNavigation = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1">Rick and Morty</h1>
      <NavigationBar
        currentPage={currentPage}
        handleNavigation={onNavigation}
      />
      <div className="container">
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>{error.message}</h2>}
        {data && <CharacterList characters={data} />}
      </div>
    </div>
  );
}

export default App;
