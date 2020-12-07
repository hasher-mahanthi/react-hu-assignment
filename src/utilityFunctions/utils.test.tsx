import * as React from 'react';
import {fireEvent, render,screen,within} from '@testing-library/react';
import {getPageName} from './utils';


  

 test('checking whether the page names are working', () => {
     expect(getPageName(1)).toBe('Choose Image');
     expect(getPageName(2)).toBe('Choose Instance Type');
     expect(getPageName(3)).toBe('Choose Storage and Network');
     expect(getPageName(4)).toBe('Configure Security');
     expect(getPageName(5)).toBe('Review and Launch');
   }) 