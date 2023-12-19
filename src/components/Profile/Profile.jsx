import PropTypes from 'prop-types';
import { MainImage, StyledProfile, Description } from './Profile.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <StyledProfile>
      <Description>
        <MainImage src={avatar} alt={avatar} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <ul className="stats">
        <li>
          <span className="label">followers: </span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">views: </span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">likes: </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </StyledProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
