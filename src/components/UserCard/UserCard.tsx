import * as SC from "./UserCardStyled"

import { User } from "../../utils/types/types";

type Props = {
  userInfo: User | null;
};

const UserCard: React.FC<Props> = ({ userInfo }) => {
  if (!userInfo) {
    return null;
  }

  const { name, login, created_at, avatar_url } = userInfo;

  return (
    <SC.UserCardStyled>
      <div>
        <SC.AvatarWrapper>
          <img src={avatar_url} alt="avatar" />
        </SC.AvatarWrapper>
        <div>
          <h1>{name}</h1>
          <h3>`@${login}` </h3>
          <p>{created_at}</p>
        </div>
      </div>
    </SC.UserCardStyled>
  );
};

export default UserCard;
