import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  console.log("Entered to login");
  const {
    user,
    error,
    isLoading,
    signInUsingGoogle,
    signInWithEmailPassword,
    handleEmailChange,
    handlePasswordChange,
  } = useAuth();
  console.log(user);
  return (
    <div className="container">
      <div className="sub-container mt-5">
        <Form onSubmit={signInWithEmailPassword}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
            required
              onChange={handleEmailChange}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
            required
              onChange={handlePasswordChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 text-end"
            controlId="formBasicCheckbox"
          >
            
            <Link className="w-100" to='/login'>
            <Button type="submit"className="w-100" onClick={signInWithEmailPassword}  >Login</Button>
            </Link>
          
          </Form.Group>
          
          <p>{error}</p>
          <Form.Group
            className="text-center mt-2"
            controlId="formBasicCheckbox"
          >
            <p className="mb-2">Or Sign In Using</p>
            <Link to='/home'>
            <Button
            type="submit"
              
              className="text-decoration-none me-3"
              onClick={signInUsingGoogle}
            >
              <i className="fab fa-google font-5"></i>
            </Button>
            </Link>
          </Form.Group>
          <Form.Group
            className="mb-3 text-center mt-2"
            controlId="formBasicCheckbox"
          >
            <p className="mb-2">Or Signup using</p>
            <Link  to='/signup' className="text-decoration-none me-3">
              Sign Up
            </Link>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Login;
