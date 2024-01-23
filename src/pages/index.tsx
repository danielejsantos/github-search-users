import {
  Alert,
  Button,
  CircularProgress,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

import User from "../components/User";
import { useGitHub } from "../contexts/userData";
import { authToken } from "../utils";

const Search = () => {
  const [username, setUsername] = useState("");
  const { getUserData, userData, loading, error } = useGitHub();

  const isInputEmpty = username.trim() === "";

  const handleSearch = () => {
    if (!isInputEmpty) {
      getUserData(username, authToken);
    }
  };

  return (
    <Stack alignItems="center" sx={{ height: "100vh", py: 3, px: 10 }}>
      <Typography variant="h5">Search Github Users</Typography>
      <Stack alignItems="center">
        <Stack direction="row" spacing={2} my={6}>
          <TextField
            size="small"
            label="User"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            variant="outlined"
            onClick={handleSearch}
            disabled={isInputEmpty}
          >
            Search
          </Button>
        </Stack>
      </Stack>

      {loading && <CircularProgress color="inherit" />}

      {error && <Alert severity="error">Este nome de usuário não existe</Alert>}

      {userData && (
        <>
          <Divider flexItem variant="middle" sx={{ bgcolor: "#333", mb: 6 }} />
          <User />
        </>
      )}
    </Stack>
  );
};

export default Search;
