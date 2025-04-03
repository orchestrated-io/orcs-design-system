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

const getReactSelectMenu = (triggerRef) => {
  const selectWrapper = triggerRef?.current?.closest("[id^='select-wrapper']");

  if (selectWrapper) {
    return selectWrapper;
  }

  return document.getElementById(REACT_SELECT_MENU);
};

const isRenderedInReactSelectMenu = (triggerRef) => {
  return !!getReactSelectMenu(triggerRef);
};

const getFloatingUiRootElement = (triggerRef) => {
  const activeModalRef = document.getElementById("modal-overlay");

  const isRenderedInModal = activeModalRef?.contains?.(triggerRef?.current);

  if (isRenderedInModal) {
    return document.getElementById("modal");
  }

  if (isRenderedInReactSelectMenu) {
    return isRenderedInReactSelectMenu.firstChild;
  }

  return undefined;
};

export {
  getFloatingUiZIndex,
  getFloatingUiRootElement,
  isRenderedInReactSelectMenu
};
