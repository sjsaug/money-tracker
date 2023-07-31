import { useState } from 'react';
import './App.css';

function App() {
  const [name,setName] = useState('');
  const [datetime,setDatetime] = useState('');
  const [description,setDescription] = useState('');
  function addNewTransaction(ev){
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL+'/transaction';
    fetch(url, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name,description,datetime})
    }).then(response => {
      response.json().then(json => {
        console.log("result", json);
      });
    });
  }
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <input type = "name" 
                value={name}
                onChange = {ev => setName(ev.target.value)}
                placeholder={"+200 new monitor"}/>
          <input value = {datetime} 
                onChange={ev => setDatetime(ev.target.value)} 
                type = "datetime-local"/>
        </div>
        <div className="description">
          <input type = "name" 
          value={description}
          onChange = {ev => setDescription(ev.target.value)}
          placeholder={"description"}/>
        </div>
        <button type="submit">
          Add new transaction
        </button>
      </form>
      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Monitor</div>
            <div className='description'>Upgraded from 60hz to 280hz</div>
          </div>
          <div className='right'>
            <div className='price negative'>-185$</div>
            <div className='datetime'>2022-12-18</div>
          </div>
        </div>
      <div className='transaction'>
          <div className='left'>
            <div className='name'>Sold old things</div>
            <div className='description'>Got rid of some old posessions of mine</div>
          </div>
          <div className='right'>
            <div className='price positive'>+300$</div>
            <div className='datetime'>2022-12-18</div>
          </div>
        </div>
      <div className='transaction'>
          <div className='left'>
            <div className='name'>MacBook</div>
            <div className='description'>New laptop for school</div>
          </div>
          <div className='right'>
            <div className='price negative'>-2800$</div>
            <div className='datetime'>2022-12-18</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
