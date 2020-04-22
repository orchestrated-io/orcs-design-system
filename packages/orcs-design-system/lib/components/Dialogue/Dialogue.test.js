import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SystemThemeProvider from "../../SystemThemeProvider";
import { Basic } from "./Dialogue.stories";

test("can render, open and close Dialogue", async () => {
  const { getByText, queryByText } = render(
    <SystemThemeProvider>
      <Basic />
    </SystemThemeProvider>
  );

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
