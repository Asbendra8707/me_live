import React, { useState} from "react";
import { Container, Form, Button, Card, InputGroup } from "react-bootstrap";
import { Link} from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import './AuthPage.css'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate} from 'react-router-dom';

function Authpage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/login', { email, password });

            if (res.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: res.data.message,
                    timer: 2000,
                    showConfirmButton: false
                });
                // Optional: delay before navigating
                setTimeout(() => navigate('/contacts'), 2000);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: res.data.message
                });
            }
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Server Error',
                text: err.message || 'Something went wrong!'
            });
        }
    };

    return (
        <>
            <div className="auth-bg">
                <Container className="d-flex justify-content-center align-items-center vh-100">
                    <Card className="auth-card animate-card">
                        <Card.Body>
                            <h2 className="text-center mb-4">Login</h2>
                            <Form onSubmit={handleLogin} autoComplete="off">
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
                                            value={email} onChange={(e) => setEmail(e.target.value)}
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
                                            value={password} onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <InputGroup.Text
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <Button variant="success" className="toggle-link w-100 mb-3" type="submit">
                                    Login
                                </Button>
                            </Form>
                            <p className="text-center text-light">
                                Don't have an account?{" "}
                                <Link to="/register" className="toggle-link text-decoration-none">
                                    Register
                                </Link>
                            </p>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </>
    )
}

export default Authpage