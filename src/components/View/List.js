import React, { useCallback } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../styled";
import { deleteEmployee } from "../../redux/employees/actionDeleter";

const ListView = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const updateData = useCallback(employee => {
    localStorage.clear();
    localStorage.setItem("id", employee.id);
    localStorage.setItem("firstName", employee.firstName);
    localStorage.setItem("surname", employee.surname);
    localStorage.setItem("email", employee.email);
    localStorage.setItem("birthDate", employee.birthDate);
    localStorage.setItem("status", employee.status);
    localStorage.setItem("jobTitle", employee.jobTitle);
    history.push("/update");
  });
  const deleteData = useCallback(
    employee => {
      dispatch(deleteEmployee(employee));
    },
    [dispatch]
  );
  const employees = useSelector(state => state.employees);
  return (
    <div>
      <div className="item-container">
        <table>
          <tbody>
            <tr>
              <th>id</th>
              <th>FirstName</th>
              <th>Surname</th>
              <th>Email</th>
              <th>dateofBirth</th>
              <th>Status</th>
              <th>Jobtitle</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {employees.employees_records.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.id}</td>
                  <td>{val.firstName}</td>
                  <td>{val.surname}</td>
                  <td>{val.email}</td>
                  <td>{val.birthDate}</td>
                  <td>{val.status}</td>
                  <td>{val.jobTitle}</td>
                  <td>
                    <Button
                      onClick={() =>
                        updateData(employees.employees_records[key])
                      }
                    >
                      Update
                    </Button>
                  </td>
                  <td>
                    <Button onClick={() => deleteData(val.id)}> Delete </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
      </div>
    </div>
  );
};
export default ListView;
