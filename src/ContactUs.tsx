import * as React from "react";

interface IProps {
  name: string;
  email: string;
  reason: string;
  notes: string;
}

const ContactUs: React.FunctionComponent<IProps> = (props) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onNameChange(e.currentTarget.value);
    return (...)
  };
  return (
    <form className="form" noValidate={true}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={props.name}
          onChange={handleNameChange}
        />
      </div>
    </form>
  );
};
export default ContactUs;
