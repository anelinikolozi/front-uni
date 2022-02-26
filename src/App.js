
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap'
import StudentTable from "./component/StudentTable";
import TeacherTable from "./component/TeacherTable";
import NameForm from "./component/NameForm";

function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/student">student</Link>
              </li>
              <li>
                <Link to="/teacher">teacher</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/student" element={<StudentTable></StudentTable>}>

            </Route>
            <Route path="/teacher" element={<TeacherTable></TeacherTable>}>

            </Route>
          </Routes>
        </div>
      </Router>
      <NameForm>

      </NameForm>
    </div>
  );
}

export default App;
