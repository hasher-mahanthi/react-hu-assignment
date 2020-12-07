import * as React from 'react';
import {fireEvent, render,screen,within} from '@testing-library/react';
import ImageCard from './ImageCard';


test("radio button is working", () => {
    render(<ImageCard />);
    expect(screen.getByText("64 bit (x86)")).toBeInTheDocument();
    expect(screen.getByText("64 bit (ARM)")).toBeInTheDocument();
  });
  test("select button is working", () => {
    render(<ImageCard />);
    expect(screen.getByText("Select")).toBeInTheDocument();
  });
  test("we got the model names", () => {
    const { getByTestId } = render(<ImageCard />)
    const { getByText } = within(getByTestId('my-test-id'))
    expect(getByText('Linux 2 Image')).toBeInTheDocument();
});