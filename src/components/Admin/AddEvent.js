import React from "react";
import { useForm } from "react-hook-form";

const AddEvent = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h5 className="font-weight-bold p-3">Add Event</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Event Title"
              name="title"
              ref={register({ required: true })}
            />
            {errors.title && (
              <small className="text-danger">This field is required</small>
            )}
          </div>
          <div className="col">
            <input
              type="date"
              className="form-control"
              name="date"
              ref={register({ required: true })}
            />
            {errors.date && (
              <small className="text-danger">This field is required</small>
            )}
          </div>
        </div>

        <br />
        <div className="form-row">
          <div className="col">
            <textarea
              className="form-control"
              name="description"
              placeholder="Description"
              rows="3"
              ref={register({ required: true })}
            ></textarea>
            {errors.description && (
              <small className="text-danger">This field is required</small>
            )}
          </div>
          <div className="col">
            <input
              type="file"
              className="form-control-file"
              name="photo"
              ref={register}
            />
          </div>
        </div>
        <br />

        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
