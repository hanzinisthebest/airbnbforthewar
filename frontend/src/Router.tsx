import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import Home from './pages/HomePage/Home';
import Login from './pages/LoginPage/Login';
import Signup from './pages/SignupPage/Signup';
import PlaceDeatile from './pages/PlaceDeatilePage/PlaceDeatile';
import { element } from 'prop-types';
import Root from "./pages/HomePage/Root";

/*
if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
*/
 
const clerkPubKey = "pk_test_c3RlYWR5LWNyYXdkYWQtNTkuY2xlcmsuYWNjb3VudHMuZGV2JA"

console.log(clerkPubKey)
 



function ClerkProviderWithRoutes() {

  const navigate = useNavigate();
 
  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path="/" element={<Root />} children={
          <>
          <Route path="/" element={<Home/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          </>
        }
        />
        {/*
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route
          path="/protected"
          element={
          <>
            <SignedIn>
              
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
          }
        />
        */}
      </Routes>
    </ClerkProvider>
  );
}
 


export function Router() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  )
}