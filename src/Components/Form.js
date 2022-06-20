import React from "react";

const Form = ({
  name,
  setName,
  dept,
  setDept,
  rating,
  setRating,
  users,
  setusers,
}) => {
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDeptChange = (e) => {
    setDept(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setusers([...users, { name: name, dept: dept, rating: rating }]);
    console.log(users);
  };

  return (
    <>
      <h1> EMPLOYEE FEEDACK FORM </h1>
      <form onSubmit={handleSubmit} className="formdata">
        <label>
          Name  :
        <input
            onChange={handleNameChange}
            value={name}
            className="textbox"
            type="text"
            name="name"
            required
          />
        </label>      <br></br>

        <label>
          Department  :
        <input
            onChange={handleDeptChange}
            value={dept}
            className="textbox"
            type="text"
            name="dept"
            required
          />
        </label>      <br></br>

        <label>
          Rating   :
        <input
            onChange={handleRatingChange}
            value={rating}
            className="textbox"
            type="text"
            name="rating"
            required
          />
        </label>       <br></br>
        <span>
          <input className="btn" type="submit" value="Submit" />
        </span>
      </form>
    </>
  );
};

export default Form;