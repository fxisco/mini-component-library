/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES_CONF = {
  small: {
    "--height": 8 + "px",
    "--radius": 4 + "px",
    "--innerRadius": 4 + "px",
    "--padding": 0,
  },
  medium: {
    "--height": 12 + "px",
    "--radius": 4 + "px",
    "--innerRadius": 4 + "px",
    "--padding": 0,
  },
  large: {
    "--height": 16 + "px",
    "--radius": 4 + "px",
    "--innerRadius": 4 + "px",
    "--padding": 8 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES_CONF[size] || size.small;
  const progress = value + "%";

  return (
    <Container
      style={styles}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <BarWrapper>
        <Bar progress={progress} />
      </BarWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Container>
  );
};

const Container = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`;

const Bar = styled.div`
  height: var(--height);
  width: ${(props) => props.progress};
  background-color: ${COLORS.primary};
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: var(--innerRadius);
`;

export default ProgressBar;
