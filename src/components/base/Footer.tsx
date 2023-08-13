'use client';

import styled from 'styled-components';

function BaseFooter() {
  return (
    <StyledBaseFooter>
      <p className="copyright">
        Copyright 2023. Shinyongjun All rights reserved.
      </p>
    </StyledBaseFooter>
  );
}

const StyledBaseFooter = styled.footer`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  height: 60px;
  border-top: 1px solid #000;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  .copyright {
    font-size: 12px;
    color: #000;
  }
`;

export default BaseFooter;
