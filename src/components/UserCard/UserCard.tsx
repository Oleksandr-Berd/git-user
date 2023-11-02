import * as SC from "./UserCardStyled";

import { User } from "../../utils/types/types";

import {ReactComponent as Location} from "../../assets/images/location_icon.svg"
import { ReactComponent as Blog } from "../../assets/images/blog_icon.svg";
import { ReactComponent as Twitter } from "../../assets/images/twitter_icon.svg";
import { ReactComponent as Company } from "../../assets/images/company_icon.svg";


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
    location,
    blog,
    twitter_username,
    company,
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
          <SC.StatsNumber>
            {public_repos ? public_repos : "No data"}
          </SC.StatsNumber>
        </SC.StatsItem>
        <SC.StatsItem>
          <SC.StatsTitle>Followers</SC.StatsTitle>
          <SC.StatsNumber>{followers ? followers : "No data"}</SC.StatsNumber>
        </SC.StatsItem>
        <SC.StatsItem>
          <SC.StatsTitle>Following</SC.StatsTitle>
          <SC.StatsNumber>{following ? following : "No data"}</SC.StatsNumber>
        </SC.StatsItem>
      </SC.StatsList>
      <SC.InfoList>
        <SC.InfoItem status={location ? "available" : "disable"}>
          <Location />
          <SC.InfoContent>
            {location ? location : "Not Available"}
          </SC.InfoContent>
        </SC.InfoItem>
        <SC.InfoItem status={blog ? "available" : "disable"}>
          <Blog />
          <SC.InfoContent>{blog ? blog : "Not Available"}</SC.InfoContent>
        </SC.InfoItem>
        <SC.InfoItem status={twitter_username ? "available" : "disable"}>
          <Twitter />
          <SC.InfoContent>
            {twitter_username ? twitter_username : "Not Available"}
          </SC.InfoContent>
        </SC.InfoItem>
        <SC.InfoItem status={company ? "available" : "disable"}>
          <Company />
          <SC.InfoContent>{company ? company : "Not Available"}</SC.InfoContent>
        </SC.InfoItem>
      </SC.InfoList>
    </SC.UserCardStyled>
  );
};

export default UserCard;
