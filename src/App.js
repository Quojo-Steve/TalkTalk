import { Route, createBrowserRouter, createRoutesFromElements, Link, Outlet, RouterProvider } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import { dataLoader } from "./Pages/Name";
import Name from "./Pages/Name";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Trial from "./Parts/Trial";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="home/*" element={<Welcome />} />
        <Route index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/trial" element={<Trial />} />
        <Route path="/name" element={<Name />} loader={dataLoader} />
      </Route>
    )
  );

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      {/* <div>
        <Link to="/" className="text-blue-700">Welcome</Link>
        <Link to="/name" className="text-blue-700">Name</Link>
      </div> */}
      
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App;
