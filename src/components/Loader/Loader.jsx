import { InfinitySpin } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
    return (
        <LoaderContainer>
        <InfinitySpin width="200" color="black" />
      </LoaderContainer>
    );
}

export default Loader