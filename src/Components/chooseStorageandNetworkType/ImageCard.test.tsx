import * as React from 'react';
import {fireEvent, render,screen,within} from '@testing-library/react';
import ImageCard from './ImageCard';


test("radio button is working", () => {
    render(<ImageCard />);
    expect(screen.getByText("Volume")).toBeInTheDocument();
    expect(screen.getByText("Type")).toBeInTheDocument();
    expect(screen.getByText("IOPS")).toBeInTheDocument();
    expect(screen.getByText("Remarks")).toBeInTheDocument();
  });