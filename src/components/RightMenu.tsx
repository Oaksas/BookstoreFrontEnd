import { Menu, Avatar } from "antd";
import { UserOutlined, CodeOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { isAuthenticated } from "../utils";

interface RightMenuProps {
  mode: "horizontal" | "inline";
}

const RightMenu: React.FC<RightMenuProps> = ({ mode }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: '', points: 0 });

  const handleLogout = () => {
    localStorage.removeItem('TOKEN');
    navigate('/login');
  };

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
        <Menu.Item key="log-out" onClick={handleLogout}>
          <LogoutOutlined /> Logout
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default RightMenu;