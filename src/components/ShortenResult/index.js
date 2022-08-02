import { memo } from 'react'
import copy from 'copy-to-clipboard'
import { Input } from 'semantic-ui-react'
import { toast } from 'react-toastify';

import './style.css'

const ShortenResult = ({ oldOriginURL, shortenURL }) => {
  const onClickCopy = () => {
    copy(shortenURL)
    toast('Copied to clipboard successfully!', {
      position: 'bottom-right',
      type: 'success',
      autoClose: 2000,
      style: { fontSize: 14 }
    });
  }

  const truncateString = (string = '', maxLength = 100) =>
    string.length > maxLength
      ? `${string.substring(0, maxLength)}…`
      : string

  return (
    <div className='result-container'>
      <h2> TADA... 🎉 🎉 🎉</h2>

      <Input
        fluid
        value={shortenURL}
        readOnly
        action={{
          color: 'teal',
          labelPosition: 'right',
          icon: 'copy',
          content: 'Copy',
          onClick: onClickCopy,
        }}
      />

      <div className='links'>
        <a
          className="App-link"
          href={oldOriginURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Origin URL: {truncateString(oldOriginURL)}
        </a>
        <a
          className="App-link"
          href={shortenURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Shorten URL: {shortenURL}
        </a>
      </div>

    </div>
  )
}

export default memo(ShortenResult)
