import { Layout } from "../layout";
import { Dashboard } from "../pages/Dashboard";
import { MyTask } from "../pages/MyTask";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Profile } from "../pages/Profile";
import NotFound from "../pages/NotFound";

export const Navigation = () => {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="my-task" element={<MyTask />} />
          <Route path="settings" element={<Profile />} />

        </Route>
        <Route path="/not-found" element={<NotFound />} />
				<Route path="/" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Router>
  );
};
