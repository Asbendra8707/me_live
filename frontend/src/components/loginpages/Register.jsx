import React, { useState } from "react";
import { Container, Form, Button, Card, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import './register.css'
import Navigationbar from "../navbar/Navigationbar";
import Footer from "../footer/Footer";
import axios from 'axios';
import Swal from 'sweetalert2';

function Auth() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''   // fixed (was passwordHash before)
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{4,}$/;
        return regex.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = formData;

        // Check for empty or whitespace-only fields
        if (!name.trim() || !email.trim() || !password.trim()) {
            Swal.fire({
                title: '⚠️ Invalid Input',
                text: 'Please fill in all fields properly.',
                icon: 'warning',
                customClass: {
                    popup: 'custom-swal'
                  }
            });
            return;
        }

        // Password validation
        if (!validatePassword(password)) {
            Swal.fire({
                title: '❌ Weak Password',
                text: "Password must include uppercase, lowercase, number, special character & be 4+ chars long.",
                icon: 'error',
                customClass: {
                    popup: 'custom-swal'
                  }
            });
            return;
        }

        try {
            const res = await axios.post('/user', formData);

            Swal.fire({
                title: '✅ Registered Successfully!',
                text: 'You can now login with your credentials.',
                icon: 'success',
                customClass: {
                    popup: 'custom-swal'
                  }
            }).then(() => {
                navigate('/sign');  // redirect after user clicks OK
            });

            console.log('Server response:', res.data);

        } catch (error) {
            // Handle duplicate email/user already exists
            if (error.response?.data?.message?.toLowerCase().includes("exists")) {
                Swal.fire({
                    title: '⚠️ User Already Exists',
                    text: 'This email or username is already registered. Please login instead.',
                    icon: 'warning',
                    customClass: {
                        popup: 'custom-swal'
                      }
                });
            } else {
                Swal.fire({
                    title: '❌ Registration Failed',
                    text: error.response?.data?.message || 'Something went wrong, please try again.',
                    icon: 'error',
                    customClass: {
                        popup: 'custom-swal'
                      }
                });
            }
        }
    };

    return (
        <>
        <Navigationbar/>
        <div className="reg-bg">
            <Container className="d-flex justify-content-center align-items-center vh-100">
                <Card className="reg-card animate-reg-card">
                    <Card.Body>
                        <h2 className="text-center mb-4">📋 Register</h2>
                        <Form onSubmit={handleSubmit} autoComplete="off">
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>
                                        <FaUser />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Enter your full name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>
                                        <FaEnvelope />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>
                                        <FaLock />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        placeholder="Enter password"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <InputGroup.Text
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </InputGroup.Text>
                                </InputGroup>
                            </Form.Group>

                            <Button variant="success" className="toggle-reg-link w-100 mb-3" type="submit">
                                Register
                            </Button>
                        </Form>

                        <p className="text-center text-light">
                            Already have an account?{" "}
                            <Link to="/sign" className="toggle-reg-link text-decoration-none">
                                Login
                            </Link>
                        </p>
                    </Card.Body>
                </Card>
            </Container>
        </div>
        <Footer/>
        </>
    )
}

export default Auth;
