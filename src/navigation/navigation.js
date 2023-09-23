import Welcome from "../Pages/Welcome";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Trial from "../Parts/Trial";
import Main from "../Content/Main";
import {Page404} from "../Pages/Page404";


export const nav = [
{ path: "/", name: "Home", element: <Welcome />, isPrivate: true  },
{ path: "/*", name: "404", element: <Page404 />,  isPrivate: true  },
{ path:"/login",    name: "Login",  element: <Login />,  isPrivate: false  },
{ path:":id",  name: "Private",element: <Main />, isPrivate: true  },
{ path:"/signup",  name: "Signup",element: <Signup />, isPrivate: false  },
{ path:"/trial",  name: "Trial",element: <Trial />, isPrivate: true  },
]
