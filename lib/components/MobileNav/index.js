import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import variables from "../../variables";

const Toggle = styled.input`
  opacity: 0;
	position: absolute;
	margin: 0;
	z-index: -1;
	width: 0;
	height: 0;
	overflow: hidden;
	pointer-events: none;

	~ header,
	~ div,
	~ main {
		transition: ${variables.defaultTransition};
	}

	&:checked {

    + div > a {
      opacity: 1;
      transform: translateX(0);
			
			:nth-of-type(1) { transition-delay: 0.10s; }
			:nth-of-type(2) { transition-delay: 0.20s; }
			:nth-of-type(3) { transition-delay: 0.30s; }
			:nth-of-type(4) { transition-delay: 0.40s; }
			:nth-of-type(5) { transition-delay: 0.50s; }
			:nth-of-type(6) { transition-delay: 0.60s; }
			:nth-of-type(7) { transition-delay: 0.70s; }
			:nth-of-type(8) { transition-delay: 0.80s; }
			:nth-of-type(9) { transition-delay: 0.90s; }
			:nth-of-type(10) { transition-delay: 1s; }
      }

    /* Mobile menu */
		+ div {
			transform: translateX(-250px);
		}

		~ main {
			transform: translateX(-250px);
		}
		
		~ header {
			transform: translateX(-250px);
      /* Hamburger */
			span {
				background-color: transparent !important; // fade away the middle line
				&:hover,
				&:focus {
					background-color: transparent !important;
				}
				&:before,
				&:after {
					transition: top 300ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
					top: 0;
					width: 30px;
				}
				&:before {
					transform: rotate3d(0,0,1,45deg) scale(1.1);
				}
				&:after {
					transform: rotate3d(0,0,1,-45deg) scale(1.1);
				}
			}
		}
    
    /* Overlay */
		~ label {
			z-index: 4;
			opacity: 1;	
		}
	}
}
`;

const Menu = styled.div`
  position: fixed;
  height: 100vh;
  right: -250px;
  top: 0;
  width: 250px;
  background: #333;
  z-index: 5;
  transition: ${variables.defaultTransition};

  > div {
    display: flex;
    align-items: center;
    margin-left: auto;
    padding: ${variables.defaultSpacing};
    margin-bottom: ${variables.defaultSpacingHalf};
    border-bottom: solid 1px rgba(255, 255, 255, 0.2);
    img {
      display: block;
      height: 40px;
      width: 40px;
      border-radius: 100%;
      margin-right: 10px;
    }
  }

  a {
    padding: ${variables.defaultSpacingHalf} ${variables.defaultSpacing};
    opacity: 0;
    transform: translateX(100px);
    transition: ${variables.defaultTransition};
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const Avatar = styled.img`
  display: block;
  height: 42px;
  width: 42px;
  border-radius: 100%;
`;

const UserName = styled.div`
  color: ${theme.white};
`;

const LogoutLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
  color: ${theme.white};
  display: block;

  &:hover,
  &:focus {
    outline: 0;
    text-decoration: underline;
  }
`;

const Overlay = styled.label`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
  opacity: 0;
  transition: ${variables.defaultTransition};
`;

class MobileNav extends React.Component {
  render() {
    const { userName, avatarSrc, children, onLogout } = this.props;
    return (
      <Fragment>
        <Toggle type="checkbox" id="mobileMenuToggle" />
        <Menu>
          <User>
            {avatarSrc ? <Avatar src={avatarSrc} /> : null}
            <UserName>{userName}</UserName>
          </User>
          {children}
          <LogoutLink onClick={onLogout}>Logout</LogoutLink>
        </Menu>
        <Overlay htmlFor="mobileMenuToggle" />
      </Fragment>
    );
  }
}

/** @component */
export default MobileNav;
