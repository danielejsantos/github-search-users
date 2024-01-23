import { Avatar, Divider, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { useGitHub } from "../../contexts/userData";
import Stars from "../Stars";

const User = () => {
  const { userData } = useGitHub();
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    setForceUpdate((prev) => prev + 1);
  }, [userData]);

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      direction="row"
      key={forceUpdate}
    >
      <Stack>
        <Avatar
          alt={userData?.login}
          src={userData?.avatar_url}
          sx={{ width: 120, height: 120 }}
        />
        <Typography variant="h6">{userData?.name}</Typography>
        <Typography variant="subtitle1">{userData?.email}</Typography>
        <Typography variant="subtitle1">{userData?.location}</Typography>
      </Stack>
      <Divider orientation="vertical" sx={{ bgcolor: "#333", mx: 4 }} />
      <Stack>
        <Typography variant="subtitle1" sx={{ lineHeight: 3 }}>
          Followers: {userData?.followers}
        </Typography>
        <Typography variant="subtitle1" sx={{ lineHeight: 3 }}>
          Repositories: {userData?.public_repos}
        </Typography>
        <Typography variant="subtitle1" sx={{ lineHeight: 3 }}>
          Popularity
        </Typography>
        <Stars />
      </Stack>
    </Stack>
  );
};

export default User;
