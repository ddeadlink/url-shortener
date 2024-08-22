import { Layout } from 'antd';

import { NavBar } from './components/NavBar';
import { InputArea } from './components/InputArea';

import { UrlGeneratorContextProvider } from './context/urlGenerator';

const App = () => {
  return (
    <UrlGeneratorContextProvider>
      <Layout style={{ height: '100vh' }}>
        <NavBar />
        <InputArea />
      </Layout>
    </UrlGeneratorContextProvider>
  );
}

export default App;
