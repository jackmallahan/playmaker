import HalfField from "../app/components/halfField/halfField";
import DefaultLayout from "../app/components/layout";

const routes = [
  {
    path: "/",
    exact: true,
    component: HalfField,
    layout: DefaultLayout,
  }
];
export default routes;
