import { expect } from "@storybook/test";
import { render, screen } from "@testing-library/react";

const mainColor = "#00f";

test("should render RedButton", () => {
  render(<RedButton {...RedButton.args} />);
  expect(screen.getByRole("button")).toHaveStyle("backgroundColor: red");
});
