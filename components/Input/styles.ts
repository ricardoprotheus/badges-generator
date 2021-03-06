import styled from 'styled-components';

import Popover from '../Popover';

interface ContainerProps {
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 1.74;
  letter-spacing: 0.7px;

  & + div {
    margin-top: 10px;
  }

  label {
    line-height: 12px;
    font-size: 14px;
    text-transform: uppercase;
    color: #666;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  input {
    width: 100%;
    height: 40px;
    border: 0;
    border-radius: 0;
    font-size: 16px;
    border-bottom: 2px solid
      ${({ hasError }) => (hasError ? '#ed0000' : '#999')};

    &::placeholder {
      color: #ccc;
    }
  }

  small {
    font-size: 12px;
    color: #ed0000;
    line-height: 1.75;
    letter-spacing: normal;
  }
`;

export const Info = styled(Popover)`
  height: 30px;
  margin-left: 16px;
  display: flex;
  align-items: flex-end;

  svg {
    margin: 0;
  }

  span {
    background-color: #333;
    color: #fff;

    &::before {
      border-color: #333 transparent;
    }
  }
`;
