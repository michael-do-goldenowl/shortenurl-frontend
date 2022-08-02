import { useState, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ShortenInput from './components/ShortenInput';
import ShortenResult from './components/ShortenResult';

import API from './services/API';
import { validateURL } from './helpers/validators'

import logo from './logo.svg';
import './App.css';

function App() {
  const [originURL, setOriginURL] = useState('');
  const [oldOriginURL, setOldOriginURL] = useState('')
  const [shortenURL, setShortenURL] = useState('');
  const [loading, setLoading] = useState(false);

  const showError = (errMessage) => {
    toast(errMessage, {
      type: 'error',
      pauseOnHover: true,
      closeOnClick: false,
      autoClose: 6000,
      position: 'top-right',
      style: { fontSize: 14 },
    })
  }

  const handleShorten = async () => {
    try {
      setLoading(true);

      const { data } = await API.post('/shorten', { url: originURL });
      setShortenURL(data);
      setOldOriginURL(originURL)
      setOriginURL('');
    } catch (error) {
      showError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = () => {
    setShortenURL('');
    if (!originURL || !validateURL(originURL)) {
      return showError('Please enter a valid url')
    }
    handleShorten()
  }

  const renderHeader = useCallback(() => {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Golden Owl Shorten URL</h1>
        <p>Author: Michael</p>
      </header>
    )
  }, []);

  return (
    <div className="App">
      {renderHeader()}

      <main className='main'>
        <div className='input-container'>
          <ShortenInput
            loading={loading}
            value={originURL}
            onChange={setOriginURL}
            onClick={onSubmit}
          />

          {!!shortenURL && (
            <ShortenResult
              oldOriginURL={oldOriginURL}
              shortenURL={shortenURL}
            />
          )}
        </div>
        <ToastContainer />
      </main>
    </div>
  );
}

export default App;
