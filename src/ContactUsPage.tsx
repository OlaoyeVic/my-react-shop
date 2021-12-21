import * as React from "react";
import ContactUs from "./ContactUs";
import { ISubmitResult, IValues } from "./Form";

interface IState {
  name: string;
  email: string;
  reason: string;
  notes: string;
}

class ContactUsPage extends React.Component<{}, {}> {
  private handleSubmit = async (values: IValues): Promise<ISubmitResult> => {
    await this.wait(1000)
    return {
      success: true
    }
  }

  const wait = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  public render() {
    return (
      <div className="page-container">
        <h1>Contact Us</h1>
        <p>
          If you enter your details we'll get back to you as soon as we can.
        </p>
        <ContactUs onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default ContactUsPage;
