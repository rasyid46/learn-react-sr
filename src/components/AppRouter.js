import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PostList from './PostList';
import UserList from './UserList';

function Index() {
  return <PostList/>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <UserList/>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">PostList</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;
