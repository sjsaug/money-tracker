import { useEffect, useState } from 'react';
import './App.css';
import { set } from 'mongoose';

function App() {
  const [name,setName] = useState('');
  const [datetime,setDatetime] = useState('');
  const [description,setDescription] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []);
  async function getTransactions(){
    const url = process.env.REACT_APP_API_URL+'/transaction';
    const response = await fetch(url);
    return await response.json();
  }
  function addNewTransaction(ev){
    const url = process.env.REACT_APP_API_URL+'/transaction';
    ev.preventDefault();
    const price = name.split(' ')[0];
    fetch(url, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        price,
        name:name.substring(price.length+1),
        datetime, 
        description,
      })
    }).then(response => {
      response.json().then(json => {
        setName('');
        setDatetime('');
        setDescription('');
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
        {transactions.length > 0 && transactions.map(transaction => (
        <div className='transaction'>
          <div className='left'>
            <div className='name'>{transaction.name}</div>
            <div className='description'>{transaction.description}</div>
          </div>
          <div className='right'>
            <div className={'price ' + (transaction.price<0?"negative":"positive")}>{transaction.price}</div>
            <div className='datetime'>2022-12-18</div>
          </div>
        </div>
        ))}
      </div>
    </main>
  );
}

export default App;