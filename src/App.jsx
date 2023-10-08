import { useEffect, useState } from 'react';
import axios from 'axios';
import './app.css'

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get('https://api.sampleapis.com/coffee/hot')
      .then(response => {
        setDatas(response.data);
      })
      .catch(error => {
        alert(error);
      });
  }, []);

  return (
    <div>
      {datas.map((data) => (
        <div className='box'>
          <div className='boxContent'>
            <h1>{data.title}</h1>
            <h3>{data.description}</h3>
            <img src={data.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
