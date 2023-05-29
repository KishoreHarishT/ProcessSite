import './App.css';

import { BrowserRouter } from "react-router-dom";
import RouterConfig from './Configs/RouterConfig';

import Menu from './Component/Menu';

function App() {
  return (
    <>
      <div className='app-parent'>

        <div className='header-parent'>
          <div className='header'>

            <div className='header-title'>
              <p>Team Mobility</p>
            </div>

            <div className='searchbar-parent'>
              <div className="searchbar">
                <svg className='search-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z" stroke="#C0C4CF" stroke-opacity="0.7" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <input className='search-text' type="text" placeholder='Search...' />
              </div>
            </div>

          </div>

          <div>
            <hr className='divider' />
          </div>
        </div>


        <div style={{display:'flex', flexDirection:'row', overflow:'auto', height:'100%'}}>
        <div style={{width:'8%', height:'100%'}}> 
          <Menu/>
        </div>       
        <div className='viewport'>
          <BrowserRouter>
            <RouterConfig />
          </BrowserRouter>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
