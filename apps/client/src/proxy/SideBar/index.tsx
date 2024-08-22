import { Layout } from 'antd';

const { Sider } = Layout;

export const SideBar = ({ children }: { children: React.ReactNode }) => (
    <Sider
        width={250}
        style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            backgroundColor: '#001529',
        }}
    >
        {children}
    </Sider>       
);
