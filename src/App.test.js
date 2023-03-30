import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';



  test('Renders the heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Your Table");
    expect(headingElement).toBeInTheDocument();
  });

  test('Can be Submited', () => {
    render(<BookingForm />);

    const dateInput = screen.getByLabelText("Choose date");
    fireEvent.mouseDown(dateInput);
    fireEvent.change(dateInput, { target: { value: "10-10-2023" } });

    const timeInput = screen.getByLabelText("Choose time");
    fireEvent.mouseDown(timeInput);
    fireEvent.change(timeInput, { target: { value: "2" } });

    const guestInput = screen.getByLabelText("Number of guests");
    fireEvent.change(guestInput, { target: { value: "2" } });

    const occasionInput = screen.getByLabelText("Occasion");
    fireEvent.mouseDown(occasionInput);
    fireEvent.change(occasionInput, { target: { value: "1" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    // expect(handleSubmit).toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled", "");

  });

