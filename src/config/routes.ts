import IRoutes from "../interfaces/routes";
import Agents from "../pages/agents";
import Beneficiary from "../pages/beneficiary/index";
import Dashboard from "../pages/dashboard";
import Location from "../pages/location";
import Occupation from "../pages/occupation";
import Users from "../pages/users";

const routes: IRoutes[] = [
  {
    path: "/dashboard",
    name: "Dashboard Page",
    component: Dashboard,
    exact: true,
  },
  {
    path: "/beneficiary/index",
    name: "Beneficiary Page",
    component: Beneficiary,
    exact: true,
  },
  {
    path: "/location",
    name: "Location Page",
    component: Location,
    exact: true,
  },
  {
    path: "/occupation",
    name: "Occupation Page",
    component: Occupation,
    exact: true,
  },
  {
    path: "/agents",
    name: "Agents Page",
    component: Agents,
    exact: true,
  },
  {
    path: "/users",
    name: "User Management Page",
    component: Users,
    exact: true,
  },
  {
    path: "/user/login",
    name: "Login Page",
    component: "User Management Component",
    exact: true,
  },
  {
    path: "/user/registration",
    name: "User Management Page",
    component: "User Management Component",
    exact: true,
  },
];

export default routes;
