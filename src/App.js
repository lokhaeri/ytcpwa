import React from 'react';
import logo from './logo192.png';
import './App.css';

const videoList = [
  'QZj58gaWBQk',
  'NH61pgAJn6c',
  'jWfOxV7mvIs',
  'pQ9GnDx4Ozk',
  'JOA7k3ZyPQI',
  'J0xo0jIH-cQ',
  'GLjnjSlh5Ao',
  'ddTd7p8BcBU',
  'vS6JbYbq7x8'
]

const YoutubeIframe = ({ video }) => {
  return (
    <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${video}`} frameborder="0" allowfullscreen></iframe>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>List of videos</h1>
        { videoList.map(item => <YoutubeIframe video={item} />) }
        </header>
    </div>
  );
}

export default App;
