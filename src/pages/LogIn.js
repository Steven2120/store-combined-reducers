import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { editFavorites, logInUser } from "../fetchData";
import { logInActionCreator } from "../redux/userState";

const Form = (props) => {
  const { setError } = props;

  const [{ email, password }, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    logInUser(email, password)
      .then((user) => dispatch(logInActionCreator(user)))
      .catch((error) => {
        console.log("error: ", error);
        setError(error.message);
      });
  };

  return (
    <Box>
      <Box mb={4}>
        <TextField
          id="standard-basic"
          label="email"
          variant="standard"
          value={email}
          onChange={(event) => {
            setCredentials({ password, email: event.target.value });
          }}
        />
      </Box>
      <Box mb={4}>
        <TextField
          id="standard-basic"
          label="password"
          variant="standard"
          type="password"
          value={password}
          onChange={(event) => {
            setCredentials({ email, password: event.target.value });
          }}
        />
      </Box>
      <Box>
        <Button onClick={onSubmit}>log in</Button>
      </Box>
    </Box>
  );
};

const LoginPage = () => {
  const [error, setError] = useState();
  const user = useSelector((state) => state.user);

  return (
    <Layout>
      <button
        onClick={() =>
          editFavorites("111", ["234", "123"]).then((updatedUser) =>
            console.log("upadatedUser: ", updatedUser)
          )
        }
      >
        editFavorites
      </button>
      {error}
      {user ? `Welcome back ${user.name}!` : <Form setError={setError} />}
    </Layout>
  );
};

export default LoginPage;
