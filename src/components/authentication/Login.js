import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../cotext/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Particles from 'react-particles-js';

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to login")
    }

    setLoading(false)
  }

  return (
    <>
    <div st className="container-fluid">
    <Particles
                 
                 params={{
                   background: {
                     color: {
                       value: "#1A1A1D  ",
                     },
                   },
                   fpsLimit: 60,
                   interactivity: {
                     events: {
                       onClick: {
                         enable: true,
                         mode: "push",
                       },
                       onHover: {
                         enable: true,
                         mode: "repulse",
                       },
                       resize: true,
                     },
                     modes: {
                       bubble: {
                         distance: 400,
                         duration: 2,
                         opacity: 0.8,
                         size: 40,
                       },
                       push: {
                         quantity: 4,
                       },
                       repulse: {
                         distance: 50,
                         duration: 0.4,
                       },
                     },
                   },
                   particles: {
                     color: {
                       value:"#ffffff"
                     },
                     links: {
                       color: "#dc3545",
                       distance: 150,
                       enable: true,
                       opacity: 0.5,
                       width: 1.5,
                     },
                     collisions: {
                       enable: true,
                     },
                     move: {
                       direction: "none",
                       enable: true,
                       outMode: "bounce",
                       random: false,
                       speed: 1.5,
                       straight: false,
                     },
                     number: {
                       density: {
                         enable: true,
                         value_area: 800,
                       },
                       value: 80,
                     },
                     opacity: {
                       value: 0.5,
                     },
                     shape: {
                       type: "circle",
                     },
                     size: {
                       random: true,
                       value: 5,
                     },
                   },
                   detectRetina: true,
                 }}
               />
    </div>
      

  
  
  
        <div className="login-container">
        <Card className="bg-dark justify-content-center w-100" >
        <Card.Body>
          <h2 className="text-center mb-5">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <br/>
              {loading ? <Button disabled="true" className="w-100 btn-danger" type="submit">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span> Login</span>
              </Button> :
              <Button className="w-100 btn-danger" type="submit">
                Login
              </Button>}
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
        </div>
  
 
    </>
  )
}
