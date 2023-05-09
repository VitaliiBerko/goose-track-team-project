import { AvatarImg, AvatarSvg } from './Avatar.styles';
import icon from '../../images/sprite.svg';
import { useSelector } from 'react-redux';
import { selectUserAvatarURL, selectUserName } from 'redux/auth/auth.selectors';

export const Avatar = () => {
  const avatarUrl = useSelector(selectUserAvatarURL);
  const userName = useSelector(selectUserName);

  return (
    <>
      {avatarUrl ? (
        <AvatarImg src={avatarUrl} alt={userName} />
      ) : (
        <AvatarSvg>
          <use xlinkHref={`${icon}#profile-avatar-f`}></use>
        </AvatarSvg>
      )}
    </>
  );
};
