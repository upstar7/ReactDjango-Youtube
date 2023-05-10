import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import {
    Form,
    Button,
    FormGroup,
    FormLabel,
    FormControl,
} from "react-bootstrap";

const RegisterPage = () => {
    const { registerUser } = useContext(AuthContext);
    const defaultValues = {
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    };
    const [formData, handleInputChange, handleSubmit] = useCustomForm(
        defaultValues,
        registerUser
    );
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
                        placeholder="Username"
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>First Name</FormLabel>
                    <FormControl
                        name="firstName"
                        className="w-50 mx-auto mb-2"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl
                        name="lastName"
                        className="w-50 mx-auto mb-2"
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        name="email"
                        className="w-50 mx-auto mb-2"
                        type="text"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
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
                        placeholder="Password"
                    />
                </FormGroup>

                <p style={{ fontSize: "16px", color: "red" }}>
                    NOTE: Make this an uncommon password with characters,
                    numbers, and special characters!
                </p>
                <Button
                    size="lg"
                    className="d-flex mx-auto mt-4"
                    variant="primary"
                    type="submit"
                >
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default RegisterPage;
