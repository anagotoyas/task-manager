import styled from 'styled-components';
import { useGlobal } from '../context/GlobalContext';



const NotFound = () => {
    const {theme} = useGlobal()
  return (
    <NotFoundContainer>
      <NotFoundText theme={theme}>
        <h1>404</h1>
        <p>Oops! Looks like you're lost.</p>
        <div className="animate-bounce">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2z" />
          </svg>
        </div>
        <p>Let's get you back <a href="/">home</a>.</p>
      </NotFoundText>
    </NotFoundContainer>
  );
};

export default NotFound;

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
  height: 100vh;
`;

const NotFoundText = styled.div`
  text-align: center;

  div{
    margin:3rem
  }

  h1 {
    margin-bottom: 4px;
    font-size: 6rem;
    font-weight: bold;
    color: ${(props) => props.theme.colorRedPrimary};
  }

  p {
    margin-top:1.5rem;
    font-size: 1.5rem;
    color:  ${(props) => props.theme.colorGray};
  }

  .animate-bounce {
    margin-bottom: 4px;
    svg {
      margin: 0 auto;
      height: 4rem;
      width: 4rem;
      color: ${(props) => props.theme.colorRedPrimary};
    }
  }

  a {
    color: ${(props) => props.theme.colorWhite};

    &:hover {
      color: ${(props) => props.theme.colorRedPrimary};
    }
  }
`;