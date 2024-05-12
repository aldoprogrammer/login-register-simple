# Aldo Alert

**Description:** A cool and fully responsive alert component for React.

## Installation

You can install the Aldo Alert package via npm:

```bash
npm install aldo-alert
```

## Usage
Integration with React + Vite
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { AldoAlertProvider } from 'aldo-alert';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AldoAlertProvider>
      <App />
    </AldoAlertProvider>
  </React.StrictMode>,
);
```

## Displaying Toast Messages
```
import React from 'react';
import { useAldoAlert } from 'aldo-alert';

function YourComponent() {
  const { showAldoAlert } = useAldoAlert();

  const handleButton = (e) => {
    e.preventDefault();
    showAldoAlert('Hello, this is a toast message!', 'success');
  };

  return (
    <button onClick={handleButton}>Show Toast</button>
  );
}

export default YourComponent;
```
