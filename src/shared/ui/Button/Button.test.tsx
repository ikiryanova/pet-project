import { render, screen } from "@testing-library/react";

import { Button, ButtonTheme } from "./Button";

describe("Button", () => {
  test("Test render", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
  test("With clear theme", () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("clear");
  });
});
