import React, { useEffect, useState } from "react";
import { Layout, Button, Drawer } from "antd";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { isAuthenticated } from "../utils";

const Navbar: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState(null);
    const showDrawer = () => {
        setVisible(!visible);
    };

    if (isAuthenticated()) {

    }

    let { pathname: location } = useLocation();
    useEffect(() => {
        setVisible(false);
    }, [location]);

    return (
        <nav className="navbar">
            <Layout>
                <Layout.Header className="nav-header">
                    <div className="logo">
                        <h3 className="brand-font">BOOKSTORE</h3>
                    </div>
                    <div className="navbar-menu">
                        <Button className="menuButton" type="text" onClick={showDrawer}>
                            <MenuOutlined />
                        </Button>
                        <div className="rightMenu">
                            <RightMenu mode={"horizontal"} />
                        </div>

                        <Drawer
                            title={"Brand Here"}
                            placement="right"
                            closable={true}
                            onClose={showDrawer}
                            visible={visible}
                            style={{ zIndex: 99999 }}
                        >
                            <RightMenu mode={"inline"} />
                        </Drawer>
                    </div>
                </Layout.Header>
            </Layout>
        </nav>
    );
};

export default Navbar;