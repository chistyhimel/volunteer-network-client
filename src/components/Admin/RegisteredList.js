import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import deleteIcon from "../../images/logos/delete.png";

const RegisteredList = () => {
  const [volunteerList, setVolunteerList] = useState([]);
  const { volunteerReginterList } = useParams();
  useEffect(() => {
    fetch("https://sheltered-caverns-94338.herokuapp.com/regesteredVolunteer")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVolunteerList(data);
      });
  }, []);
  return (
    <div>
      <h5 className="font-weight-bold p-3">{volunteerReginterList}</h5>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email ID</th>
            <th scope="col">Register Date</th>
            <th scope="col">Volunteer List</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {volunteerList &&
            volunteerList.map((list) => (
              <tr>
                <td>{list.name}</td>
                <td>{list.email}</td>
                <td>{list.date}</td>
                <td>{list.work}</td>
                <td>
                  <img
                    src={deleteIcon}
                    alt=""
                    style={{ width: "20px" }}
                    className="bg-danger"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegisteredList;
