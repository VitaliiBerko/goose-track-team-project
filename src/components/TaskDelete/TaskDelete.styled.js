import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 14px;
  padding-top: 16px;
`;

export const Text = styled.h2`
  font-family: var(--primary-font);
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  padding: 16px 0;
`;

export const ButtonCancel = styled.button`
  width: 100%;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  padding: 14px;
  background-color: var(--accent-background-color);
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 8px;
  border: none;
  color: var(--btn-text-color);
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;

  transition: box-shadow var(--animation), background-color var(--animation);
  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
    background-color: var(--hover-btn-background-color);
  }

  @media (min-width: 768px) {
    height: 48px;
  }
`;

export const ButtonDel = styled.button`
  width: 100%;
  height: 42px;
  padding: 12px;
  column-gap: 12px;
  background: var(--task-btn-cancel-bg-color);
  border-radius: 8px;
  border: none;
  text-align: center;
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;

  transition: box-shadow var(--animation);
  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
  }

  @media (min-width: 768px) {
    height: 48px;
  }
`;
