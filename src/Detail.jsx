import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getDetail, updateDetail } from "./actions/UserAction";

function Detail() {
  const params = useParams();
  const userId = params.id;

  const [detail, setDetail] = useState(undefined);

  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const onUpdateDetail = (e) => {
    e.preventDefault();

    const model = { id: detail.id, name, employeeId };
    updateDetail(model).then(
      (res) => {
        debugger;
      },
      (err) => {}
    );
  };

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Dashboard`;

    getDetail(userId).then((res) => {
      if (res.error) {
        alert(res.error);
      } else {
        setDetail(res.result);
        setName(res.result.name);
        setEmployeeId(res.result.employeeId);
      }
    });
  }, []);

  return (
    <div className="container mt-3">
      {detail === undefined ? (
        "Loading"
      ) : (
        <form className="row" onSubmit={onUpdateDetail}>
          <div className="col-12 text-right">
            <Link to="/dashboard">Go Back</Link>
          </div>
          <div className="col-12 mb-3">
            <label>Name *</label>
            <input
              type="text"
              value={name}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="col-12 mb-3">
            <label>Employee ID *</label>
            <input
              type="text"
              value={employeeId}
              className="form-control"
              onChange={(e) => setEmployeeId(e.target.value)}
            />
          </div>
          <div className="col-12 text-right">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Detail;
