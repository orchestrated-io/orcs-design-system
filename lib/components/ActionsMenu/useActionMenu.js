import React, { useCallback, useMemo, useRef, useState } from "react";

import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingArrow,
  arrow
} from "@floating-ui/react";

export default function useActionMenu({
  initialOpen = false,
  placement = "right",
  modal,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  isTooltip = false
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);
  const [labelId, setLabelId] = useState();
  const [descriptionId, setDescriptionId] = useState();
  const arrowRef = useRef();

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        crossAxis: placement.includes("-"),
        fallbackAxisSideDirection: "end",
        padding: 5
      }),
      shift({ padding: 5 }),
      isTooltip && arrow({ element: arrowRef })
    ]
  });

  const context = data.context;

  const click = useClick(context, {
    enabled: !isTooltip && controlledOpen == null
  });
  const dismiss = useDismiss(context);

  const role = useRole(context, { role: "menu" });

  const interactions = useInteractions([click, dismiss, role]);

  const Arrow = useCallback(
    () => <FloatingArrow ref={arrowRef} context={context} />,
    [context]
  );

  return useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      modal,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId,
      Arrow
    }),
    [open, setOpen, interactions, data, modal, labelId, descriptionId, Arrow]
  );
}
