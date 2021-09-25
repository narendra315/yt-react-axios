import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { login } from "./actions/AuthAction";

function Dashboard() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    const model = { email, password };

    login(model).then(
      (res) => {
        if (res.error) {
          alert(res.error);
        } else {
          const { employeeId, name, permissionId, token } = res.result;

          localStorage.setItem("token", token);
          localStorage.setItem("userDetail", {
            employeeId,
            name,
            permissionId,
          });

          history.push("/dashboard");
        }
      },
      (err) => {
        alert(err.message);
      }
    );
  };

  useEffect(() => {
    document.title = `Login`;
  });

  return (
    <div className="container mt-5">
      <form onSubmit={onFormSubmit} className="card card-body">
        <h3>Login</h3>
        <hr />
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="text-right">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Dashboard;
