import "./App.css";
import SideBar from "./components/SideBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./routes/Home";
import Explore from "./routes/Explore";
import Login from "./routes/Login";
import Register from "./routes/Register";
import { useEffect, useState } from "react";
import { app, db } from "./FirebaseConfig";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { createContext } from "react";
import Profile from "./routes/Profile";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {sessionStorage.getItem("Auth Token") ? (
        <SideBar userData={user} />
      ) : (
        <></>
      )}
      <div className="ml-auto flex-grow  w-[calc(100%-var(244px))]">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/users/:id" element={<Profile />}></Route>
          <Route
            path="/login"
            element={
              <Login
                setUserOrEmail={setEmail}
                setPassword={setPassword}
                handleAction={HandleLogin}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                setEmail={setEmail}
                setPassword={setPassword}
                setFullName={setFullName}
                setUserName={setUserName}
                handleAction={HandleRegister}
              />
            }
          />
        </Routes>
      </div>
    </>
  );

  function HandleLogin() {
    signInWithEmailAndPassword(getAuth(), email, password)
      .then((res) => {
        sessionStorage.setItem("Auth Token", res._tokenResponse.refreshToken);
        getDoc(doc(db, "users", res.user.uid))
          .then((snapShot) => {
            console.log(snapShot.data());
            snapShot.exists()
              ? setUser(snapShot.data())
              : console.log("User document does not exist");
          })
          .then((_) => navigate("/"));
      })
      .catch((e) => console.log(e));
  }

  function HandleRegister() {
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then(async (res) => {
        sessionStorage.setItem("Auth Token", res._tokenResponse.refreshToken);
        await setDoc(doc(db, "users", res.user.uid), {
          username: username,
          full_name: fullName,
          email: email,
          follows: [],
          followers: [],
        }).then((_) => navigate("/"));
      })
      .catch((e) => console.log(e));
  }
}

export default App;
