import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colours from "../../colours";
import { default as ReactSelect } from "react-select";

const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
`;

/**
 *
 * This component uses React Select: <https://react-select.com/home>
 *
 * Usage of this component has changed since we have upgraded to the latest version of `react-select`. For example, field values are now defined as separate objects. for example:
 *
 *       const options = [
 *       { value: 'chocolate', label: 'Chocolate' },
 *       { value: 'strawberry', label: 'Strawberry' },
 *       { value: 'vanilla', label: 'Vanilla' }
 *     ]
 * For a full list of the changes, see <https://react-select.com/upgrade-guide>.
 *
 * We are using the default styling of React Select, lightly skinned using the design system colours.
 */
const Select = forwardRef((props, ref) => {
  return (
    <>
      <Wrapper>
        <ReactSelect
          ref={ref}
          {...props}
          theme={theme => ({
            ...theme,
            borderRadius: 4,
            colors: {
              ...theme.colors,
              primary25: colours.primaryLightest,
              primary: colours.primary
            }
          })}
        />
      </Wrapper>
    </>
  );
});

Select.propTypes = {
  /** Points to options object, see example code above */
  options: PropTypes.array
};

/** @component */
export default Select;
