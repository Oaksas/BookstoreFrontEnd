import { Menu, Avatar } from "antd";
import { UserOutlined, CodeOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

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
        <Menu.Item key="allbooks">
          <CodeOutlined /> <Link to="/">All Books</Link>
        </Menu.Item>
        <Menu.Item key="myorders">
          <UserOutlined />  <Link to="/myOrders">My Orders</Link>
        </Menu.Item>
        <Menu.Item key="log-out">
          <LogoutOutlined /> Logout
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default RightMenu;