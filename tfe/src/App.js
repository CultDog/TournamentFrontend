import './bootstrap.min.css';
import './App.css';
import LoginForm from "./components/forms/LoginForm/LoginForm";

function App() {
  const { buildHTML, buildCSS, buildJS } = require('./gulpfile');

  buildHTML();
  buildCSS();
  buildJS();
  
  return (
    <div className='App'>
      <LoginForm id="login-form" />
    </div>
    
  );
}

export default App;
