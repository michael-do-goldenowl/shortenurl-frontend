import { memo } from 'react'
import { Input } from 'semantic-ui-react'

const ShortenInput = ({ loading, onClick, value, onChange }) => {
  const onEnter = e => {
    if (e.key === 'Enter') {
      onClick()
    }
  }

  return (
    <Input
      fluid
      autoFocus
      disabled={loading}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={onEnter}
      action={{
        color: 'blue',
        labelPosition: 'right',
        icon: 'cut',
        content: 'Shorten URL',
        loading,
        onClick,
      }}
      placeholder="Paste your url here..."
    />
  )
}

export default memo(ShortenInput)
