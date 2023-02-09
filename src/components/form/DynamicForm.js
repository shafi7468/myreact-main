import React, { useState } from "react";

export default function DynamicForm() {
  const [users, setUser] = useState([
    {
      fname: "",
      lname: "",
      skills: [{ skill: "HTML", exp: 5 }],
    },
  ]);

  const addUser = () => {
    setUser([
      ...users,
      { fname: "", lname: "", skills: [{ skill: "", exp: "" }] },
    ]);
  };

  const addskills = (ind) => {
    users[ind].skills.push({ skill: "", exp: "" });
    setUser([...users]);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        {users.map((user, ind) => {
          return (
            <div key={ind}>
              <input
                style={{ margin: "5px" }}
                type="text"
                name={user.fname}
                placeholder="First Name"
              ></input>
              <input
                type="text"
                name={user.lname}
                placeholder="Last Name Name"
              ></input>
              <br />

              {user.skills.map((skill, skillInd) => {
                return (
                  <>
                    
                    <input
                      style={{ margin: "5px" }}
                      placeholder="skillName"
                      name={skill.skill}
                    />
                    <input
                      style={{ margin: "5px" }}
                      placeholder="experience"
                      name={skill.exp}
                    />
                  </>
                );
              })}
              <button
                style={{ margin: "5px" }}
                onClick={() => {
                  addskills(ind);
                }}
              >
                
                Add
              </button>
              <br />
            </div>
          );
        })}

        <button onClick={addUser}>Add</button>
      </form>
    </>
  );
}
