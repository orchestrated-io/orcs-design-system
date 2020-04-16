import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Basic } from "./Dialogue.stories";

test("can render, open and close Dialogue", async () => {
  const { getByText, queryByText } = render(<Basic />);

  fireEvent.click(getByText("Delete data"));

  // should be rendered
  expect(
    getByText("This will remove all data from the application.")
  ).toBeTruthy();

  fireEvent.click(getByText("OK"));

  // should be dissapeared
  await waitFor(() => {
    expect(
      queryByText("This will remove all data from the application.")
    ).toBeNull();
  });
});
