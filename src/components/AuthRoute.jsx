/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { supabase } from "../utils/SupabaseClient";

//FIXME: Problem with getSession()
const AuthRoute = () => {
  const location = useLocation();

  //TODO: Get the use session
  const [session, setSession] = useState(null);
  //TODO: Calling the function to get the session
  useEffect(() => {
    //TODO: Get the user session with the destructuring method of response with data or error
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    console.log(`get session response : ${session}`);
    //TODO: console.log the session
    //FIXME: Problem is here
    //TODO: Also listen to the event changes and get the session
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    //FIXME : Problem is here
    //TODO: After that, use the subscription method to unsubscribe to preven data leaking
    return () => subscription.unsubscribe();
    //TODO: console.log the session
    //TODO: Listen to the changers
  }, []);

  return session ? (
    // TODO: This element will render either <DashboardMessages> when the URL ismessages", <DashboardTasks> at "/tasks", or null if it is "/"
    <Outlet />
  ) : (
    <Navigate to={"/sign-in"} replace state={{ path: location.pathname }} />
  );
};

export default AuthRoute;
