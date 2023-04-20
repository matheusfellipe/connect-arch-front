import styled from 'styled-components';

type Props = {};

const ServiceRequestContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const ServiceRequestPage = (props: Props) => {
  return (
    <ServiceRequestContainer>
      <h1>Service Request Page</h1>
    </ServiceRequestContainer>
  );
};

export default ServiceRequestPage;
