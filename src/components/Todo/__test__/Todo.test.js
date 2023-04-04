import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

const addTodo = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });

  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo Test", () => {
  it("Should render same text passed into title prop", () => {
    render(<MockTodo />);
    addTodo(["Go Grocery Shopping"]);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it("Should render multiple todos/elements/items", () => {
    render(<MockTodo />);

    addTodo(["Go Grocery Shopping", "React Js Testing"]);
    const divElement = screen.getAllByTestId("task-container");
    expect(divElement.length).toBe(2);
  });

  it("tasks should not have completed class css style when initially rendered", () => {
    render(<MockTodo />);

    addTodo(["Go Grocery Shopping"]);
    const divElement = screen.getByText("Go Grocery Shopping");
    expect(divElement).not.toHaveClass("todo-item-active");
  });
  it("tasks should have completed class css style when clicked", () => {
    render(<MockTodo />);

    addTodo(["Go Grocery Shopping"]);
    const divElement = screen.getByText("Go Grocery Shopping");
    expect(divElement).toHaveClass("todo-item false");
  });
});
