import { Menu, Spin, Typography, MenuProps } from 'antd';
import { SideBar } from '../../proxy/SideBar';

const { Link } = Typography;

import { useUrlGeneratorContext } from '../../context/urlGenerator';

export const NavBar = () => {
    const { urls, isUrlsLoading } = useUrlGeneratorContext();

    const menuItems: MenuProps['items'] = [
        {
            key: 'label',
            type: 'group',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    Uploaded URLs
                    {isUrlsLoading && (
                        <Spin size="small" style={{ marginLeft: 8 }} />
                    )}
                </div>
            ),
        },
        ...urls.map((url) => ({
            key: url._id,
            label: (
                <Link rel="noopener noreferrer" target="_blank" href={url.url}>
                    {url.shortId}
                </Link>
            ),
        }))
    ];

    return (
        <SideBar>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%' }}
                items={menuItems}
            />
        </SideBar>
    )
}
