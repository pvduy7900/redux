import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'


export default function LoginPage({ isAuthenticated, loading }) {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Handle submit form
        //send request with formData to backend
    };

    if (isAuthenticated) return <Redirect to="/" />;

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form onSubmit={handleSubmit}>
                        <div className="text-center mb-3">
                            <h1 className="text-primary">Sign In</h1>
                            <p className="lead">
                                <i className="fas fa-user" /> Sign Into Your Account
                            </p>
                        </div>
                        <Form.Group>
                            <Form.Control
                                type="email"
                                required
                                placeholder="Email Address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && (
                                <small className="form-text text-danger">{errors.email}</small>
                            )}
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                minLength="3"
                            />
                            {errors.password && (
                                <small className="form-text text-danger">
                                    {errors.password}
                                </small>
                            )}
                        </Form.Group>

                        {loading ? (
                            <Button
                                className="btn-block"
                                variant="primary"
                                type="button"
                                disabled
                            >
                                <span
                                    className="spinner-border spinner-border-sm"
                                    role="status"
                                    aria-hidden="true"
                                ></span>
                Loading...
                            </Button>
                        ) : (
                                <Button className="btn-block" type="submit" variant="primary">
                                    Login
                                </Button>
                            )}
                        <p>
                            Don't have an account? <Link to="/register">Sign Up</Link>
                        </p>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
