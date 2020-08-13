import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Stack = styled.div`
  ${({ space, top, bottom, align }) => css`
    margin-top: ${handleSize(top)};
    margin-bottom: ${handleSize(bottom)};
    text-align: ${align};

    & > * {
      display: block;
    }

    & > * + * {
      margin-top: ${handleSize(space)};
    }
  `}
`;

const handleSize = (value) => {
  if (value === 's') return '8px';
  if (value === 'm') return '20px';
  if (value === 'l') return '48px';
  return '0px';
};

Stack.propTypes = {
  space: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
  align: PropTypes.string,
};

Stack.defaultProps = {
  space: 'none',
  top: 'none',
  bottom: 'none',
  align: 'inherit',
};

export default Stack;
