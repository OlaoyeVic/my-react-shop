import * as React from "react";

const ContactUs: React.FunctionComponent = () => {
  return (
    <form className="form" noValidate={true}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
    </form>
  );
};
export default ContactUs;
