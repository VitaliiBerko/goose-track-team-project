import { LinkStyled } from './AuthNavigate.styled';
import PropTypes from 'prop-types';

export const AuthNavigate = ({ route, title }) => {
  return <LinkStyled to={route}>{title}</LinkStyled>;
};

AuthNavigate.propTypes = {
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
