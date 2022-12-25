import React from 'react';
import logo from './logo192.png';
import './App.css';

const videoList = {
  day: [
    'QZj58gaWBQk',
    'NH61pgAJn6c',
    'jWfOxV7mvIs',
    'pQ9GnDx4Ozk',
    'JOA7k3ZyPQI',
    'J0xo0jIH-cQ',
    'GLjnjSlh5Ao',
    'ddTd7p8BcBU',
    'vS6JbYbq7x8',
    'aRaMS4WoVrI',
    'Mo_koDOKr1U',
    '-QiokIVg5UQ',
    'ZHoZVxrsCss',
    'oZzgfpYyP_I',
    'UUpW67zKRGA',
    'xxWHHydExo4',
    'pCEF3eVMcWA',
    '2hDKKZrVKm4',
    '9_WBQISVHnw',
    'G6L5YzyyLxw',
    '7C7NEISLR1U',
    'lwvsgcq80VI',
    'HVuDLRCcQts',
    'B41XCf2jWNI',
    'VYscqzSuL44',
    'WYzv8ozNHd0',
    'rxb6Bn5bThM',
    'Y7Zd5nmP01s',
    '2LUenIzSjQ0',
    'FA9ysZQNv2M',
    'aZd5D1o12pc'
  ],
  night: [
    'pCEF3eVMcWA',
    'BVupSeAWIaw',
    'vcKxZLQETgE',
    'cYBxKrvQw6Q',
    '9PBJ8itZcdM',
    'a4CDFyRCaM',
    'YdiGEjz5b0Q',
    'fj_z6zGQVyM',
    'FrmZeXf7ScU',
    'AuwAnBHix2U'
  ]
}

const YoutubeIframe = ({ video }) => {
  return (
    <iframe
      width="100%"
      height="315"
      src={`https://www.youtube.com/embed/${video}?controls=0&modestbranding=1&rel=0&playsinline=0`}
      frameborder="0"
      allowfullscreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    ></iframe>
  )
}

function App() {
  // const [hours, setHours]
  const d = new Date();
  let hour = d.getUTCHours();
  const isDay = hour < 18 && hour > 6;
  return (
    <div className="App">
      <header className="App-header">
        <h1>List of {isDay ? 'day' : 'night' } videos</h1>
        { isDay && videoList.day.map(item => <YoutubeIframe video={item} />) }
        { !isDay && videoList.night.map(item => <YoutubeIframe video={item} />) }
        </header>
    </div>
  );
}

export default App;
