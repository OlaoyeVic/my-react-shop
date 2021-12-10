import * as React from "react";
import Product from "./Product";

interface IProps {
  loading: boolean;
}

const withLoader =
  <P extends object>(
    Component: React.ComponentType<P>
  ): React.FunctionComponent<P & IProps> =>
  ({ ...loading }: IProps) =>
    loading ? (
      <div className="loader-overlay">
        <div className="loader-circle-wrap">
          <div className="loader-circle" />
        </div>
      </div>
    ) : (
      <Component {...loading} />
    );
export default withLoader(Product);
