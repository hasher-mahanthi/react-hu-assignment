import * as React from 'react';
import {fireEvent, render,screen,within} from '@testing-library/react';
import CostEstimates from './CostEstimates';


test("radio button is working", () => {
  const{getByTestId}=  render(<CostEstimates />);
   const text=getByTestId('cost');
   expect(text).toBeInTheDocument();
  });