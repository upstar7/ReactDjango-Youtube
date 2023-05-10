import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import { Button } from "react-bootstrap";
import logo from "../../assets/img/react-tube-logo.png";
const Navbar = () => {
    const { logoutUser, user } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <div className="navBar">
            <ul>
                <li className="brand">
                    <Link
                        className="d-flex"
                        to="/"
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        <img src={logo} alt="React/Django" />
                        <p className="logo-text">ReactDjango</p>
                    </Link>
                </li>
                <li>
                    {user ? (
                        <Button
                            className="me-4"
                            size="lg"
                            variant="primary"
                            onClick={logoutUser}
                        >
                            Logout
                        </Button>
                    ) : (
                        <Button
                            className="me-4"
                            size="lg"
                            variant="primary"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </Button>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
