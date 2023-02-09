import React from "react";

export default function EmployeeView(props) {
  return (
    <>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
          </tr>
        </thead>

        <tbody>
          {props.arr.map((emp, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{emp.name}</td>
                  <td>{emp.age}</td>
                  <td>{emp.sal}</td>
                  <td>
                    <button
                      onClick={() => {
                        props.arr.filter(a => a.name !== emp.name);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
