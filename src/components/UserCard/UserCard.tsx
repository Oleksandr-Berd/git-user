import * as SC from "./UserCardStyled";

import { User } from "../../utils/types/types";

type Props = {
  userInfo: User | null;
};

const UserCard: React.FC<Props> = ({ userInfo }) => {
  if (!userInfo) {
    return null;
  }

  const {
    name,
    login,
    created_at,
    avatar_url,
    bio,
    public_repos,
    followers,
    following,
  } = userInfo;

  const date = new Date(created_at);

  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <SC.UserCardStyled>
      <SC.CardHeaderWrapper>
        <SC.AvatarWrapper>
          <img src={avatar_url} alt="avatar" />
        </SC.AvatarWrapper>
        <div>
          <SC.Name>{name}</SC.Name>
          <SC.Login>@{login}</SC.Login>
          <SC.DateStyled>Joined {formattedDate}</SC.DateStyled>
        </div>
      </SC.CardHeaderWrapper>
      <SC.Bio>{bio ? bio : "Nothing to say about"}</SC.Bio>
      <SC.StatsList>
        <SC.StatsItem>
          <SC.StatsTitle>Repos</SC.StatsTitle>
          <SC.StatsTitle>{public_repos ? public_repos : "No data"}</SC.StatsTitle>
        </SC.StatsItem>
        <SC.StatsItem>
          <SC.StatsTitle>Followers</SC.StatsTitle>
          <SC.StatsTitle>{followers ? followers : "No data"}</SC.StatsTitle>
        </SC.StatsItem>
        <SC.StatsItem>
          <SC.StatsTitle>Following</SC.StatsTitle>
          <SC.StatsTitle>{following ? following : "No data"}</SC.StatsTitle>
        </SC.StatsItem>
      </SC.StatsList>
    </SC.UserCardStyled>
  );
};

export default UserCard;
