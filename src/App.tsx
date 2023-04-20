import React from 'react';

import { ConfigProvider } from 'antd';
import AppRouter from './routes';
import { primaryColor } from './shared/ui/var';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: `${primaryColor}`,
        },
      }}
    >
      <AppRouter />
    </ConfigProvider>
  );
}

export default App;
