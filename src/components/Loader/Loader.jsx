import HashLoader from 'react-spinners/HashLoader';

import { LoaderWrapper, LoaderPrivatePageWrapper } from './Loader.styled';

export function Loader() {
  return (
    <LoaderWrapper>
      <HashLoader
        color="#3e85f3"
        size={50}
        speedMultiplier={1}
        cssOverride={{
          margin: '0 auto',
        }}
      />
    </LoaderWrapper>
  );
}

export function LoaderPrivatePage() {
  return (
    <LoaderPrivatePageWrapper>
      <HashLoader
        color="#3e85f3"
        size={50}
        speedMultiplier={1}
        cssOverride={{
          margin: '0 auto',
        }}
      />
    </LoaderPrivatePageWrapper>
  );
}
