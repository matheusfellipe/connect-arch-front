import { HomeContainer } from './style';
import arquitetura from '../../shared/assets/images/arquitetura.jpg';

const HomePage = () => {
  return (
    <HomeContainer>
      <img src={arquitetura} />
    </HomeContainer>
  );
};

export default HomePage;
