import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form'
import comp1 from './components/comp1/comp1'
function App() {
  return (
    <div className="Template">
      <header className="Header">
        
        <p>
          Finally revealed: The secret six-figure tool <br />
          that many gurus, and internet marketers are using to <br />
          sell to the masses and retire early…
        </p>
        <comp1 />
        <label>
         
        </label>
      </header>

      <div className="body">
        <Form />
        
        {/* <form>
          <label>Write a kick-ass headline:</label>
    
          
            
          <input type="text" name="name" />
          <button type="submit" value="Submit">Submit</button>

          <label>Open sentence:</label>
    
          
            
    <input type="text" name="name" />
    <button type="submit" value="Submit">Submit</button>




<label>Body Paragraph:</label>
    
          
            
          <input type="text" name="name" />
          <button type="submit" value="Submit">Submit</button>


<label>Self-Introduction:</label>
    
          
            
          <input type="text" name="name" />
          <button type="submit" value="Submit">Submit</button>

















        </form> */}
      </div>
    </div>

    
     

  );
}

export default App;
