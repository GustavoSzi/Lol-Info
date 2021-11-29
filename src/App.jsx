import './App.css';
import ChampionArea from './components/ChampionArea';
import Header from './components/Header';
import React, {useEffect, useState} from 'react';
import fetches from './fetchApi';

function App() {

  const [championList, setChampionList] = useState([])

  useEffect(() => {
    async function getChampions(){
      const response = await fetches.fetchChampions();
      setChampionList(response)
    }

    getChampions()
    
  }, [])


  return (
    <div>
      <Header/>
      <ChampionArea list={championList} />
    </div>
  );
}

export default App;
