import { Layout } from 'antd';

const { Content } = Layout;

export const Main = ({ children }: { children: React.ReactNode }) => (
    <Layout style={{ marginLeft: 250 }}>
        <Content
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            padding: '0 50px',
          }}
        >
          {children}
        </Content>
    </Layout>
)