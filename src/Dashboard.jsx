import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getList } from "./actions/UserAction";

function Dashboard() {
  const page = 1,
    limit = 10;
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    document.title = `Dashboard`;

    getList(page, limit).then((res) => {
      if (res.error) {
        alert(res.error);
      } else {
        setList(res.result.list);
        setTotal(res.result.total);
      }
    });
  }, []);

  return (
    <div className="container mt-5">
      <h3>Employee List</h3>
      <small>{total} Records Found</small>
      <hr />
      <div className="row mb-3">
        <div className="col-12 text-right">
          <button className="btn btn-link">+ Add New</button>
        </div>
      </div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <Link to={`/detail/${item.id}`}>
                    <div>{item.name}</div>
                  </Link>
                </td>
                <td>{item.employeeId}</td>
                <td>{item.roleName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
