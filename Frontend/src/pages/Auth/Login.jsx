import { useState } from "react";
import { Card, Form, Button, InputGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", formData);

      // localStorage.setItem("token", res.data.token);
      // localStorage.setItem("role", res.data.role);
      // console.log(res.data.user.role);
      // toast.success("Login Successful");

      // if (res.data.role === "admin") {
      //   navigate("/admin/dashboard");
      // } else {
      //   navigate("/user/dashboard");
      // }
      localStorage.setItem("token", res.data.token);

      localStorage.setItem(
        "role",
        res.data.user.role
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      toast.success("Login Successful");

      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/dashboard");
      }



    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="login-container">
      {/* LEFT PANEL */}

      <div className="left-panel">
        <div>
          <h1>Task Manager</h1>

          <p>
            Manage projects, users and tasks
            efficiently.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}

      <div className="right-panel">

        <Card className="login-card border-0 shadow-lg">

          <Card.Body>

            <h2 className="mb-2">
              Welcome Back
            </h2>

            <p className="text-muted mb-4">
              Login to continue
            </p>

            <Form onSubmit={handleLogin}>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>

                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">

                <Form.Label>Password</Form.Label>

                <InputGroup>

                  <Form.Control
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                  <Button
                    variant="outline-secondary"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                  >
                    <i
                      className={
                        showPassword
                          ? "bi bi-eye-slash"
                          : "bi bi-eye"
                      }
                    ></i>
                  </Button>

                </InputGroup>

              </Form.Group>

              <Button
                type="submit"
                className="login-btn w-100"
              >
                Login
              </Button>

            </Form>

          </Card.Body>

        </Card>

      </div>
    </div>
  );
}

export default Login;