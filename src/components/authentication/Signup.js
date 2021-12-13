import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../cotext/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Particles from 'react-particles-js';

export default function Signup() {
  const nameRef = useRef()
  const imageRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(imageRef.current.value, nameRef.current.value, emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
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

        <div className="signup-container">
        <Card className="bg-dark justify-content-center w-100" >
        <Card.Body>
          <h2 className="text-center mb-5">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <div className="row" >
                <div className="col-md-9">
                  <Form.Group id="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" ref={nameRef} required />
                  </Form.Group>
                </div>

                <div className="col-md-3">
                  <Form.Group id="image">
                    <Form.Label>Image Url (optional)</Form.Label>
                    <Form.Control type="text" ref={imageRef}  />
                  </Form.Group>
                </div>
          </div>



     

            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
        
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <br/>
            <Button disabled={loading} className="w-100 btn-danger" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
        </div>
   
    </>
  )
}
