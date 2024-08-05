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

const getFloatingUiRootElement = (triggerRef) => {
  const activeModalRef = document.getElementById("modal-overlay");

  const isRenderedInModal = activeModalRef?.contains?.(triggerRef.current);

  if (isRenderedInModal) {
    return document.getElementById("modal");
  }

  return undefined;
};

export { getFloatingUiZIndex, getFloatingUiRootElement };
