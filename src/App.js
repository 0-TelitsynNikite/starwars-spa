import StarWarsApi from "./services/StarWarsApi";
import {useEffect, useState} from "react";

function App() {
  const [people, setPeople] = useState(null);

  const getResource = async () => {
      const res = await new StarWarsApi().getAllPeople();

      const peopleList = res.map(({name, url}) => {
          return {
              name: name,
              url: url
          }
      });

      setPeople(peopleList);
    }

  useEffect( () => {
      getResource();
  }, [])


  return (
    <div className="main">
        {people && (
            <ul>
                {people.map(({name, url}) => <li key={url}>{name}</li>)}
            </ul>
        )}
    </div>
  );
}

export default App;
