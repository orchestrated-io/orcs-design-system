const getFloatingUiZIndex = (triggerRef) => {
  const activeModalRef = document.getElementById("modal-overlay");

  if (
    activeModalRef &&
    triggerRef.current &&
    activeModalRef?.contains?.(triggerRef.current)
  ) {
    return 1100;
  }

  return 900;
};

const REACT_SELECT_MENU = "react-select-menu";

const isRenderedInReactSelectMenu = (triggerRef) =>
  document.getElementById(REACT_SELECT_MENU)?.contains?.(triggerRef.current);

const getFloatingUiRootElement = (triggerRef) => {
  const activeModalRef = document.getElementById("modal-overlay");

  const isRenderedInModal = activeModalRef?.contains?.(triggerRef.current);

  if (isRenderedInModal) {
    return document.getElementById("modal");
  }

  if (isRenderedInReactSelectMenu(triggerRef)) {
    return document.getElementById(REACT_SELECT_MENU).firstChild;
  }

  return undefined;
};

export {
  getFloatingUiZIndex,
  getFloatingUiRootElement,
  isRenderedInReactSelectMenu
};
