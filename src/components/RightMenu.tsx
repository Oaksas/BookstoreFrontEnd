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
  const [user, setUser] = useState({ username: null, points: 0 });

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
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("TOKEN");
    navigate("/login");
  };

  console.log(user)
  return (
    <>
      {user.username ? (
        <Menu mode={mode}>
          <Menu.SubMenu icon={<Avatar icon={<UserOutlined />} />}
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
              < DollarOutlined /> {user.username && user.points.toFixed(2)} Points

            </Menu.Item>
            <Menu.Item key="username" >
              <UserOutlined /> {user.username && user.username}

            </Menu.Item>

          </Menu.SubMenu>
        </Menu>
      ) : (
        <div></div>
      )}
    </>

  )
}

export default RightMenu;
