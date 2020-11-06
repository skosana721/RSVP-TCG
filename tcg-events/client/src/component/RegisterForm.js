import React, { useState } from "react";
import { saveUser } from "./actions";
import { Button } from "reactstrap";


function RegisterForm() {
  const [formInformation, setFormInformation] = useState({
    name: "",
    surname:"",
    email: "",
    eventName:"",
    dietRequirements: "",
  });

  const submit = (e) => {
    e.preventDefault();
    saveUser(formInformation);
    console.log("formInformation", formInformation);
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormInformation({ ...formInformation, [name]: value });
  };
  return (
    <div>
      <form onSubmit={submit}>
        <medium>Please let us know if you will be able to make it.</medium>
        <br />
        <br />
        <label for="name"> Name</label>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={formInformation.name}
          placeholder="Enter name"
        />
        <br />
        <br />
        <label for="surname">Surname</label>
        <input
          type="text"
          onChange={handleChange}
          name="surname"
          value={formInformation.surname}
          placeholder="Enter surname"
        />
        <br />
        <br />
        <label for="email"> Email</label>
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={formInformation.email}
          placeholder="Enter email"
        />
        <br />
        <br />
        <label for="eventName"> eventName</label>
        <input
          type="text"
          name="eventName"
          onChange={handleChange}
          value={formInformation.eventName}
          placeholder="Enter event you interested in"
        />
        <br />
        <br />
        <label for="dietRequirement">Dietary Requirements</label>
        <textarea
          type="text"
          onChange={handleChange}
          name="dietRequirements"
          value={formInformation.dietRequirements}
          placeholder="Dietary Requirements"
        />
        <br />
        <br />

        <Button type="submit" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
