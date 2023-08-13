"use client";

import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

function BaseContainer({ children }: Props) {
  return <StyledBaseContainer>{children}</StyledBaseContainer>;
}

const StyledBaseContainer = styled.main`
  max-width: 768px;
  margin-inline: auto;
  padding: 36px;
  margin-block: 60px;
  background-color: #fff;
`;

export default BaseContainer;
