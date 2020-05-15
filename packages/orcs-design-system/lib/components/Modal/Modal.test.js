import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BasicModal } from "./Modal.stories";

test("render basic Modal", async () => {
  const { getByText, queryByText } = render(<BasicModal />);
  expect(queryByText("Content of the modal")).toBeNull();
  fireEvent.click(getByText("Open Modal"));
  const content = getByText("Content of the modal");
  expect(content).not.toBeNull();
});
