import { useQuery } from "react-query";

function usePlanet(id = 1) {
  /**
   * We'll get the information for a specific planet here.
   * For this workshop, we want to use the id of the planet and request the data from https://swapi.dev/api/planets/{{id}}
   */

  const queryResponse = useQuery(["planet", id], () => {
    return fetch(`https://swapi.dev/api/planets/${id}`).then((response) => {
      return response.json();
    });
  });

  const planet = queryResponse.data;

  return {
    planet: planet // Here we'll return the data
  };
}

export default usePlanet;
