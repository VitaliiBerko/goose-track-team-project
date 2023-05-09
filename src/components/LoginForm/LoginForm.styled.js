import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--auth-bg-color);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h1`
  margin-bottom: 32px;
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;

  color: var(--accent-text-color);

  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 1;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Span = styled.span`
  margin-bottom: 8px;
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: ${({ touched, error }) =>
    touched && error
      ? 'var(--text-error-color)'
      : touched && !error
      ? 'var(--text-correct-color)'
      : 'var(--primary-text-color)'};

  @media (min-width: 768px) {
    margin-top: 5px;
    font-size: 14px;
    line-height: 17px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
  max-width: 335px;
  width: 100%;
  margin-bottom: 18px;
  background-color: #fff;
  border-radius: 8px;

  @media (min-width: 768px) {
    padding: 40px;
    min-width: 480px;
    margin-bottom: 24px;
  }
`;

export const Input = styled.input`
  background-color: rgba(255, 255, 255, 0);
  border: ${({ touched, error }) =>
    touched && error
      ? 'var( --border-auth-error)'
      : touched && !error
      ? 'var(--border-auth-correct)'
      : 'var(--border-auth)'};

  border-radius: 8px;
  padding: 14px;
  width: 100%;
  outline: none;

  transition: border var(--animation);

  &:hover {
    border: 1px solid var(--primary-text-color);
  }

  &::placeholder {
    font-family: var(--primary-font);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.29;
    color: var(--auth-placeholder-color);
  }
`;

export const Button = styled.button`
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  padding: 14px;
  margin-top: 8px;
  background: var(--accent-background-color);
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;
  border: none;
  color: var(--btn-text-color);
  transition: background-color var(--animation);
  &:hover,
  :focus {
    background: var(--hover-btn-background-color);
  }

  &[disabled] {
    background-color: #84828a;
    opacity: 0.5;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    /* width: 400px; */
    height: 56px;
    margin-top: 30px;
  }
`;

// text on button
export const BtnSpan = styled.span`
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: #fff;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Svg = styled.svg`
  width: 18px;
  height: 18px;
  fill: none;
  stroke: #ffffff;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const CloudSvg = styled.svg`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    width: 182px;
    height: 144px;
    position: fixed;
    bottom: 386px;
    right: 127px;
  }
`;

export const ImgRocketSvg = styled.img`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    width: 178px;
    height: 414px;
    position: fixed;
    bottom: 35px;
    right: 155px;
    transform: rotate(-31.56deg);
  }
`;

export const Errors = styled.span`
  width: 100%;
  height: 24px;
  color: ${({ error }) =>
    error ? 'var( --text-error-color)' : 'var(--text-correct-color)'};
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  @media (min-width: 768px) {
    height: 18px;
  }
`;

export const GooseText = styled.p`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    position: fixed;
    bottom: 442px;
    right: 150px;
    color: var(--primary-text-color);
    font-family: var(--primary-font);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.14;
    white-space: pre-line;
    transform: rotate(18deg);
  }
`;

export const GooseTextAccent = styled.span`
  color: var(--accent-text-color);
  font-style: italic;
`;

export const ButtonEye = styled.button`
  position: absolute;
  top: 38%;
  left: 89%;
  @media (min-width: 768px) {
    top: 45%;
    left: 91%;
  }
`;

export const SvgEye = styled.svg`
  width: 18px;
  height: 20px;

  fill: var(--secondary-text-color);
`;
