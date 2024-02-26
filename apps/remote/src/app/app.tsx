import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';

export function App({ data, token }: { data?: string; token?: string }) {
  return (
    <div>
      <h1>this is out of workspace akdjflj front end</h1>
      <p>
        this is data:
        <b>{data}</b>
        <p>
          and this is
          <b>toekn = {token}</b>
        </p>
      </p>
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>

      {/* END: routes */}
    </div>
  );
}

export default App;
