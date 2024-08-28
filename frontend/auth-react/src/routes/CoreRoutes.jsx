import User from "../components/core/User";
import Core from "../components/core/Core";
import { Navigate, Route } from "react-router-dom";
import Public from "../components/common/Public";

const CoreRoutes = [
  <Route path="/" element={<Core />}>
    {/* //! In React Router v6, the index property is used to define the default child route for a parent route. */}
    <Route index={true} element={<Navigate to="/user" />}></Route>
    <Route path="user" element={<User />}></Route>
  </Route>,
];

export default CoreRoutes;
