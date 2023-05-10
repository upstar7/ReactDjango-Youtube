import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import {
    Form,
    Button,
    FormGroup,
    FormLabel,
    FormControl,
} from "react-bootstrap";

const LoginPage = () => {
    const { loginUser, isServerError } = useContext(AuthContext);
    const defaultValues = { username: "", password: "" };
    const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
        defaultValues,
        loginUser
    );

    useEffect(() => {
        if (isServerError) {
            reset();
        }
    }, [isServerError]);

    return (
        <div className="container">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <FormLabel>Username</FormLabel>
                    <FormControl
                        name="username"
                        className="w-50 mx-auto mb-2"
                        type="text"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="Enter your username"
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        name="password"
                        className="w-50 mx-auto mb-4"
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                    />
                </FormGroup>
                {isServerError ? (
                    <p className="error">
                        Login failed, incorrect credentials!
                    </p>
                ) : null}
                <Link className="register" to="/register">
                    Click to Register!
                </Link>
                <Button
                    size="lg"
                    className="d-flex mx-auto mt-4"
                    variant="primary"
                    type="submit"
                >
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default LoginPage;
