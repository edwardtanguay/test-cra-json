import './App.css';
import data from './data.json';

const events = ["Berlin Conference", "Hamburg Conference", "Leipzig Meeting", "Munich Party", "Hannover Book Fair"];

function App() {
  return (
    <div className="App">
		  <h2>There are {data.events.length} events.</h2>
		  {data.events.map(event => {
			  return (
				  <div>{event.title} = {event.signups} signups</div>
			  )
		  })}
    </div>
  );
}

export default App;
