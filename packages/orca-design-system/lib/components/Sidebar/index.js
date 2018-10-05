import styled, { css } from "styled-components";
import theme from "../../theme";
import variables from "../../variables";

const Container = styled.div`
  max-width: 360px;
  height: calc(100vh - 60px);
  color: white;
  display: flex;
  align-items: stretch;
  align-content: stretch;
  width: auto;
`;

const Tabs = styled.div`
  min-width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
  height: calc(100vh - 60px);
  background: ${theme.greyDark};
`;

const Tab = styled.label`
  position: relative;
  min-width: 60px;
  padding: 15px 0;
  border-bottom: solid 1px ${theme.grey.darken(0.2)};
  display: block;
  width: 100%;
  transition: ${variables.defaultTransition};
  color: ${props => (props.active ? theme.primary : theme.greyLight)};
  background: ${props => (props.active ? theme.greyDarker : "transparent")};
  cursor: ${props => (props.active ? "default" : "pointer")};
  &:hover,
  &:hover {
    background: ${props =>
      props.active ? theme.greyDarker : "rgba(0, 0, 0, 0.15)"};
  }
  ${props =>
    props.badge
      ? css`
        :before {
          content: "${props.badge}";
          position: absolute;
          top: 5px;
          right: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20px;
          height: 20px;
          border-radius: 100%;
          font-size: 1.1rem;
          font-weight: 600;
          color: ${theme.white};
          background-color: ${theme.danger};
        }
      `
      : css``};
`;

const Panels = styled.div`
  position: relative;
`;

const Panel = styled.div`
  display: ${props => (props.active ? "block" : "none")};
  min-width: 300px;
  height: calc(100vh - (60px + 72px));
  overflow-y: auto;
  background: ${theme.greyDarker};
`;

const Close = styled.label`
  position: absolute;
  right: -10px;
  top: 50%;
  width: 22px;
  height: 22px;
  text-align: center;
  padding-top: 2px;
  border-radius: 100%;
  margin-top: -11px;
  cursor: w-resize;
  background: ${theme.greyDarker};
`;

const Footer = styled.footer`
  z-index: 5;
  padding: 10px 20px;
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${theme.greyDarker};
  box-shadow: 0 -1px 0px 0px rgba(0, 0, 0, 0.3);
  svg {
    display: block;
    margin-bottom: 10px;
  }
  small {
    display: block;
    font-size: 1.1rem;
  }
  a {
    color: #fff;
  }
`;

/** @component */
export default {
  Container,
  Tabs,
  Tab,
  Panels,
  Panel,
  Footer,
  Close
};
