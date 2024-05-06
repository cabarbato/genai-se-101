import { Router, Route } from "@solidjs/router";
import App from "./App";
import SimpleInput from "./pages/SimpleInput";

const Routes = (props) => (
  <Router root={App}>
    <Route path="/simple" component={SimpleInput} />
  </Router>
);

export default Routes;
