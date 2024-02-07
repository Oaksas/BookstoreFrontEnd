import { Menu, Avatar } from "antd";
import { UserOutlined, CodeOutlined, LogoutOutlined } from "@ant-design/icons";

interface RightMenuProps {
  mode: "horizontal" | "inline";
}

const RightMenu: React.FC<RightMenuProps> = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.SubMenu
        title={
          <>
            <Avatar icon={<UserOutlined />} />
            <span className="username">John</span>
          </>
        }
      >
        <Menu.Item key="project">
          <CodeOutlined /> ALL BOOKS
        </Menu.Item>
        <Menu.Item key="about-us">
          <UserOutlined /> MY ORDERS
        </Menu.Item>
        <Menu.Item key="log-out">
          <LogoutOutlined /> Logout
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default RightMenu;