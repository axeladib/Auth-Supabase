/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { supabase } from "../utils/SupabaseClient";

const Home = () => {
  //TODO: Create the state managemet for session
  const [session, setSession] = useState(null);
  //TODO: Calling the function to get the session
  useEffect(() => {
    //TODO: Get the user session
    const getSession = async () => {
      try {
        const { data: session, error } = await supabase.auth.session();
        if (session) {
          setSession(session);
        }
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };
    const listenToEvent = async () => {
      try {
        supabase.auth.onAuthStateChange((event, session) => {
          if (session) {
            setSession(session);
          }
        });
      } catch (error) {
        console.log(error.message);
      }
    };

    getSession();
    listenToEvent();
    //TODO: Listen to the changers
  }, []);

  return (
    <div>
      {session ? (
        <div>
          You are logged in and your email address is {session.user.email}
        </div>
      ) : (
        <div>You are not logged in.</div>
      )}
    </div>
  );
};

export default Home;
