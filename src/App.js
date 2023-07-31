import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
        <div className='basic'>
          <input type = "name" placeholder={"+200 new monitor"}/>
          <input type = "datetime-local"/>
        </div>
        <div className="description">
          <input type = "name" placeholder={"description"}/>
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
            <div className='price'>185$</div>
            <div className='datetime'>2022-12-18</div>
          </div>
        </div>
      <div className='transaction'>
          <div className='left'>
            <div className='name'>New Monitor</div>
            <div className='description'>Upgraded from 60hz to 280hz</div>
          </div>
          <div className='right'>
            <div className='price'>185$</div>
            <div className='datetime'>2022-12-18</div>
          </div>
        </div>
      <div className='transaction'>
          <div className='left'>
            <div className='name'>New Monitor</div>
            <div className='description'>Upgraded from 60hz to 280hz</div>
          </div>
          <div className='right'>
            <div className='price'>185$</div>
            <div className='datetime'>2022-12-18</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
