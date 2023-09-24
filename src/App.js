import { BrowserRouter } from 'react-router-dom';
import { AuthWrapper } from './auth/AuthWrapper';
import { ToastContainer } from "react-toastify";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthWrapper />
        <ToastContainer />
      </BrowserRouter>      
    </div>
  );
}

export default App;

