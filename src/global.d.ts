declare module "*.jsx" {
  import { FunctionComponent } from "react";

  const component: FunctionComponent<never>; // Specify that it's a functional component with any props
  export default component;
}
