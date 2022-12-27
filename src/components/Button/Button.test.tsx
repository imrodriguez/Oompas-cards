import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("Button should display", async () => {
  render(<Button title="Activate" action={() => {}} />);

  await screen.findByRole("button");

  expect(screen.getByRole("button")).toBeVisible();
});

test("Button action works", async () => {
  let state = false;

  render(
    <Button
      title="Activate"
      action={() => {
        state = true;
      }}
    />
  );

  const button = await screen.findByRole("button");

  fireEvent.click(button);

  expect(state).toBe(true);
});
