import { useMedia, useWindowSize } from 'react-use';
import { UserForm } from '../../components/UserForm/UserForm';
import { Container } from './AccountPage.styled';

export default function AccountPage() {
  const isTablet = useMedia('(min-width: 768px) and (max-width: 1279.98px)');
  const isDesktop = useMedia('(min-width: 1280px)');

  let headerHeight = 159;

  if (isTablet) {
    headerHeight = 134;
  }

  if (isDesktop) {
    headerHeight = 164;
  }

  const { height: windowHeight } = useWindowSize();
  const userFormHeight = windowHeight - headerHeight;
  return (
    <>
      <Container userFormHeight={userFormHeight}>
        <UserForm />
      </Container>
    </>
  );
}
