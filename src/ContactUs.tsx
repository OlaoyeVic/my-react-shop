import * as React from "react";
import { Form, minlength, required, ISubmitResult, IValues } from './Form'

interface IProps {
  onSubmit: (values: IValues) => Promise<ISubmitResult>
}

const ContactUs: React.FunctionComponent<IProps> = (props) => {
  const handleSubmit = async (values: IValues): Promise<ISubmitResult> => {
    const result = await props.onSubmit(values)
    return result
  }

  return (
    <Form
      defaultValues={{ name: "", email: "", reason: "Support", notes: "" }}
      validationRules={{
        email: { validator: required },
        name: [{ validator: required }, { validator: minlength, arg: 3 }]
      }}
      onSubmit={handleSubmit}>
      <Form.Field
        name="name"
        label="Your name" />
      <Form.Field
        name="email"
        label="Your email address"
        type="email" />
      <Form.Field
        name="reason"
        label="Reason you need to contact us"
        type="select"
        options={["Marketing", "Support", "Feedback", "Jobs", "Other"]} />
      <Form.Field name="notes" label="Additional notes" type="textarea" />
    </Form>
  );
};
export default ContactUs;
