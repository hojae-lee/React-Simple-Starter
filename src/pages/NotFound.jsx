import styled from "styled-components";

// Styled-components를 사용하여 스타일을 정의합니다.
const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const NotFoundHeading = styled.h1`
  font-size: 48px;
  color: #333;
`;

const NotFoundMessage = styled.p`
  font-size: 24px;
  color: #666;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundHeading>404 Not Found</NotFoundHeading>
      <NotFoundMessage>존재하지 않는 페이지 입니다.</NotFoundMessage>
    </NotFoundContainer>
  );
};

export default NotFound;
