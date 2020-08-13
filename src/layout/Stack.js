import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Stack = styled.div`
  ${({ space, top, bottom, align }) => css`
    margin-top: ${top}px;
    margin-bottom: ${bottom}px;
    text-align: ${align};

    & > * {
      display: block;
    }

    & > * + * {
      margin-top: ${space}px;
    }
  `}
`;

Stack.propTypes = {
  space: PropTypes.number,
  top: PropTypes.number,
  bottom: PropTypes.number,
  align: PropTypes.string
};

Stack.defaultProps = {
  space: 0,
  top: 0,
  bottom: 0,
  align: 'inherit'
};

export default Stack;
