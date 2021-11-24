import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../cotext/AuthContext"
import { Link} from "react-router-dom"
import Particles from 'react-particles-js';


export default function ForgotPassword() {
  const emailRef = useRef()
  const {currentUser ,resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)



  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")

    } catch {
      setError("This email does not exist")
    }

    setLoading(false)
  }

  return (
    <>
              <Particles
                 
                 params={{
                   background: {
                     color: {
                       value: "rgb( 33,37,41) ",
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
                       value: "#dc3545",
                     },
                     links: {
                       color: "#dc3545",
                       distance: 150,
                       enable: true,
                       opacity: 0.5,
                       width: 2,
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

        <div className="forgot-container">
        <Card className="bg-dark justify-content-center w-100" >
        <Card.Body>
          <h2 className="text-center mb-5">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
              </Form.Group>

              <br/>
              {loading ? <Button disabled="true" className="w-100 btn-danger" type="submit">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span> Reset Password</span>
              </Button> :
              <Button className="w-100 btn-danger " type="submit">
                Reset Password
              </Button>}
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
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
