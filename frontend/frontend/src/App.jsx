import { useState } from 'react';
import axios from "axios";
import {useMutation } from '@tanstack/react-query';
import './App.css'
const makeRequestAPI = async (prompt) => {
  const res = await axios.post("http://localhost:8080/generate",{prompt});
  return res.data
};
//submit handler

function App() {
  const [prompt, setprompt] = useState("");
  const Mutation=useMutation(
    {
      mutationFn:makeRequestAPI,
      mutationKey:['chatbot-ai-request']
    }
  );
  const submithandler=(e)=>{
    e.preventDefault();
    Mutation.mutate(prompt);
  };
  console.log(Mutation)
  return (
    <div className='App'>
      <header className='app-header'>AI CONTENT GENERATOR</header>
      
      <form className='app-form' onSubmit={submithandler}>
      <label htmlFor='Enter your prompt'></label>
      <input type='text'
        placeholder='Enter your prompt'
        value={prompt}
        onChange={(e)=>setprompt(e.target.value)}
        className='app-input'
      />
      <button className='app-button' type='submit'>Generate content</button>
      <section className='app-response'>
        {
          Mutation.isPending&&<p>Generating content please wait</p>}
          {Mutation.isError&&<p>Generating content please wait</p>},
          {Mutation.isSuccess&&<p>{Mutation.data}</p>},
          
      </section>
      </form>
    </div>
    
  )

}

export default App
