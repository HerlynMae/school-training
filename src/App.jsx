import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Student from "./components/pages/developer/database/Student";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={`*`} element={<h1>404 Error</h1>} />
          <Route path={`/database/student`} element={<Student />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
