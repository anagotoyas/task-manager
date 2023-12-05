import { Layout } from "../layout";
import { Dashboard } from "../pages/Dashboard";
import { MyTask } from "../pages/MyTask";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export const Navigation = () => {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="my-task" element={<MyTask />} />
        </Route>
      </Routes>
    </Router>
  );
};
