import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import Authprovider from './contexts/auth'
function App() {
  return (
    <Authprovider>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </Authprovider>
  );
}

export default App;
