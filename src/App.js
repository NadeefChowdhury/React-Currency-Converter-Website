import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [currency1, setCurrency1] = useState({from:''});
  const [currency2, setCurrency2] = useState({to:''});
  const [answer, setAnswer] = useState({answer:''});
  const fromChange=(e)=>{
    setCurrency1({from:e.target.value});
    
  }
  const toChange =(e) =>{
    setCurrency2({to:e.target.value})
  }
  const from_to = currency1.from + '_' + currency2.to;
  const handleSubmit = async(e) =>{
    e.preventDefault();
    const response = await axios.get(`http://free.currconv.com/api/v7/convert?q=${from_to}&compact=ultra&apiKey=[USE YOUR OWN API KEY HERE]`);
    
    setAnswer({answer:response.data[from_to]});
    
    console.log(response.data[from_to])
    
  }
  console.log(currency1.from);
  console.log(currency2.to)
  return (
    <div className="App">
      <div className='ui segment' style={{margin:'5%'}}>
      <h1 style={{marginLeft:'34%'}}>Currency Converter</h1>
      </div>
      <div className='ui segment' style={{marginTop:'5%', marginLeft:'5%', marginRight:'5%'}}>
      
      <form onSubmit={handleSubmit} className='ui form'>
      <div className='ui field'>
        <h1>From</h1>
        <select onChange={fromChange} value={currency1.from} style={{border:'1px solid blue'}}>
          <option value='null'></option>
          <option value='USD'>USD</option>
          <option value='BDT'>BDT</option>
          <option value='INR'>INR</option>
          <option value='PKR'>PKR</option>
          <option value='AUD'>AUD</option>
          <option value='AFN'>AFN</option>
          <option value='ALL'>ALL</option>
          <option value='DZD'>DZD</option>
          <option value='BTN'>BTN</option>
          <option value='BRL'>BRL</option>
          <option value='CAD'>CAD</option>
          <option value='CNY'>CNY</option>
          <option value='IDR'>IDR</option>
          <option value='IRR'>IRR</option>
          <option value='IQD'>IQD</option>
          <option value='JPY'>JPY</option>
          <option value='MYR'>MYR</option>
        </select>
        <h1>To</h1>
        <select onChange={toChange} value={currency2.to} style={{border:'1px solid red'}}>
          <option value='null'></option>
          <option value='USD'>USD</option>
          <option value='BDT'>BDT</option>
          <option value='INR'>INR</option>
          <option value='PKR'>PKR</option>
          <option value='AUD'>AUD</option>
          <option value='AFN'>AFN</option>
          <option value='ALL'>ALL</option>
          <option value='DZD'>DZD</option>
          <option value='BTN'>BTN</option>
          <option value='BRL'>BRL</option>
          <option value='CAD'>CAD</option>
          <option value='CNY'>CNY</option>
          <option value='IDR'>IDR</option>
          <option value='IRR'>IRR</option>
          <option value='IQD'>IQD</option>
          <option value='JPY'>JPY</option>
          <option value='MYR'>MYR</option>
        </select>
        <br></br>
        <button className='ui button primary' style={{marginLeft:'40%'}}>Submit</button>
        </div>
      </form>
      <h3 style={{marginLeft:'39%', marginTop:'4%', fontSize:'150%', color:'brown'}}>{answer.answer}</h3>
      
      </div>
    </div>
  );
}

export default App;
