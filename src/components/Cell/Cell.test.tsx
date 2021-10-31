import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Cell} from ".";
import { CheckedCell, UnCheckedCell } from "./Cell.stories";

describe("Cell", () => {
  test("renders Cell component", () => {
    render(
      <Cell
        cell={{
          isChecked: true,
          serialNumber: 3,
          id: 3
        }}
        handleCellClick={jest.fn()}
      />
    );
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  test("renders Cell checked component", () => {
    render(
      <CheckedCell
        cell={{
          isChecked: true,
          serialNumber: 3,
          id: 3
        }}
        handleCellClick={jest.fn()}
      />
    );
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  test("renders Cell unchecked component", () => {
    render(
      <UnCheckedCell
        cell={{
          isChecked: false,
          serialNumber: 3,
          id: 3
        }}
        handleCellClick={jest.fn()}
      />
    );
    expect(screen.queryByText("3")).not.toBeVisible();
  });
});