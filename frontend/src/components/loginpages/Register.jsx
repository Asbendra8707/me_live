import React, { useState} from "react";
import { Container, Form, Button, Card, InputGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import './register.css'
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

function Auth() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
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
            setError('Please fill in all fields without spaces only.');
            return;
        }

        // Password validation
        if (!validatePassword(password)) {
            setError("Password must be at least 4 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.");
            return;
        }

        // Clear error if all good
        setError('');
        // TODO: Handle successful registration (e.g., send to server)
        console.log('Form submitted:', formData);
        try {
            const res = await axios.post('/user', formData)
            console.log('Server response:', res.data);
            navigate('/loginuser')
        } catch (error) {
            console.error(error.message.data);
        }
    };

    return (
        <>
            <div className="reg-bg">
                <Container className="d-flex justify-content-center align-items-center vh-100">
                    <Card className="reg-card animate-reg-card">
                        <Card.Body>
                            <h2 className="text-center mb-4">Register</h2>
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

                                {error && (
                                    <div className="text-danger mb-3 small">
                                        {error}
                                    </div>
                                )}

                                <Button variant="success" className="toggle-reg-link w-100 mb-3" type="submit">
                                    Register
                                </Button>
                            </Form>
                            <p className="text-center text-light">
                                Already have an account?"{" "}
                                <Link to="/loginuser" className="toggle-reg-link text-decoration-none">
                                    Login
                                </Link>
                            </p>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </>
    )
}

export default Auth