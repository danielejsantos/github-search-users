import { Stack } from "@mui/material";
import { StarHalf, StarOutline, StarSharp } from "@mui/icons-material";

import { useGitHub } from "../../contexts/userData";

const Stars = () => {
  const { userData } = useGitHub();

  const renderStars = () => {
    const followers = userData?.followers || 0;
    const publicRepos = userData?.public_repos || 0;

    switch (true) {
      case followers === 0 && publicRepos === 0:
        return (
          <>
            <StarOutline />
            <StarOutline />
            <StarOutline />
            <StarOutline />
            <StarOutline />
          </>
        );
      case followers >= 1 && followers <= 2 && publicRepos >= 1:
        return (
          <>
            <StarSharp />
            <StarOutline />
            <StarOutline />
            <StarOutline />
            <StarOutline />
          </>
        );
      case followers >= 3 && followers <= 4 && publicRepos >= 3:
        return (
          <>
            <StarSharp />
            <StarSharp />
            <StarOutline />
            <StarOutline />
            <StarOutline />
          </>
        );
      case followers >= 5 && followers <= 6 && publicRepos >= 5:
        return (
          <>
            <StarSharp />
            <StarSharp />
            <StarSharp />
            <StarOutline />
            <StarOutline />
          </>
        );
      case followers >= 7 && followers <= 9 && publicRepos >= 7:
        return (
          <>
            <StarSharp />
            <StarSharp />
            <StarSharp />
            <StarSharp />
            <StarOutline />
          </>
        );
      case followers >= 10 && publicRepos >= 8:
        return (
          <>
            <StarSharp />
            <StarSharp />
            <StarSharp />
            <StarSharp />
            <StarSharp />
          </>
        );
      default:
        return (
          <>
            <StarHalf />
            <StarOutline />
            <StarOutline />
            <StarOutline />
            <StarOutline />
          </>
        );
    }
  };

  return (
    <Stack direction="row" spacing={2}>
      {renderStars()}
    </Stack>
  );
};

export default Stars;
