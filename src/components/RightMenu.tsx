import { Menu, Avatar } from "antd";
import { UserOutlined, CodeOutlined, LogoutOutlined, DollarOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMeUser, isAuthenticated } from "../utils";

interface RightMenuProps {
  mode: "horizontal" | "inline";
}

const RightMenu: React.FC<RightMenuProps> = ({ mode }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", points: 0 });

  useEffect(() => {
    const fetchUser = () => {
      if (isAuthenticated()) {
        const user = getMeUser()
        if (user) {
          setUser(user);
        }
      }
    };

    fetchUser();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  const handleLogout = () => {
    localStorage.removeItem("TOKEN");
    navigate("/login");
  };

  return (
    <Menu mode={mode}>
      <Menu.SubMenu
        title={
          <>
            <Avatar icon={<UserOutlined />} />
            <span className="username">{user && user.points} Points</span>
            <span className="username">{user && user.username}</span>
          </>
        }
      >
        <Menu.Item key="allbooks">
          <CodeOutlined /> <Link to="/">All Books</Link>
        </Menu.Item>
        <Menu.Item key="myorders">
          <UserOutlined /> <Link to="/myOrders">My Orders</Link>
        </Menu.Item>
        <Menu.Item key="log-out" onClick={handleLogout}>
          <LogoutOutlined /> Logout
        </Menu.Item>

        <Menu.Item key="points" >
          < DollarOutlined /> {user && user.points} Points

        </Menu.Item>
        <Menu.Item key="username" >
          <UserOutlined /> {user && user.username}

        </Menu.Item>

      </Menu.SubMenu>
    </Menu>
  );
};

export default RightMenu;
