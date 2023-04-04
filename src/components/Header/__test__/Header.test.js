import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render same text passed to title prop", () => {
  //arrange
  render(<Header title="My Header" />);
  //act
  //assert
  const headingElement = screen.getByText("My Header");
  expect(headingElement).toBeInTheDocument();
});

// it("should render header", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading", { name: "Header" });
//   expect(headingElement).toBeInTheDocument();
// });

// // FindBY
// it("should render same text passed to title prop(Findby)", async () => {
//   //arrange
//   render(<Header title="My Header" />);
//   //act
//   //assert
//   const headingElement = await screen.findByText("My Header");
//   expect(headingElement).toBeInTheDocument();
// });

// //QueryBy
// it.only("should render same text passed to title prop(Query By)", async () => {
//   //arrange
//   render(<Header title="My Header" />);
//   //act
//   //assert
//   const headingElement = screen.queryByText("My Header");
//   expect(headingElement).toBeInTheDocument();
// });
