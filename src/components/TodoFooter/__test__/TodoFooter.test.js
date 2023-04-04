import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};
describe("TODO Footer", () => {
  it("should render the correct amount of incomplete tasks", () => {
    //arrange
    render(<MockTodoFooter numberOfIncompleteTasks={3} />);
    //act
    //assert
    const paragraphElement = screen.getByText(/3 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it("should render text 'task' if only 1-task left", () => {
    //arrange
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    //act
    //assert
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement.textContent).toBe("1 task left");
  });
});
