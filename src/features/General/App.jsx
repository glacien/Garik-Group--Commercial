import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppLayout from './AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route
          path="*"
          element={
            <div>
              <span>page not found</span>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
