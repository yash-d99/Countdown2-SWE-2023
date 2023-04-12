import React, { useState, useEffect } from 'react'
import Trivia from './components/Trivia'

function App() {

	const [data, setData] = useState([]);

  useEffect( () => {
    getData(setData);
  }, []);
  
  

  const getData = (setData) => {
  fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple')
  .then((result) => result.json())
  .then((data) => setData(data.results))
  console.log(data[0]);

  
};
	

	return (
		<>
			<div className="App">
				<Trivia name = {data} />
			</div>
		</>
	);
}

export default App;
