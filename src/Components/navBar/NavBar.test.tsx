import * as React from 'react';
import {fireEvent, render,screen,within} from '@testing-library/react';
import  Navbar from './NavBar';

test("All the navigation buttons are rendered", () => {
    render(<Navbar />);
    expect(screen.getByText("1.Choose Image")).toBeInTheDocument();
    expect(screen.getByText("2.Choose Instance Type")).toBeInTheDocument();
    expect(screen.getByText("3.Choose Storage and Network")).toBeInTheDocument();
    expect(screen.getByText("4.Configure Security")).toBeInTheDocument();
    expect(screen.getByText("5.Review and Launch")).toBeInTheDocument();
   

  });
  it("captures clicks", done => {
    function handleClick() {
      done();
    }
    const { getByText } = render(
<nav className="navbar"> 
            <button  onClick={handleClick}>1.Choose Image</button>
            <button onClick={handleClick}>2.Choose Instance Type</button>
            <button  onClick={handleClick}>3.Choose Storage and Network</button>
            <button  onClick={handleClick}>4.Configure Security</button>
            <button  onClick={handleClick}>5.Review and Launch</button>
          </nav>  
    );
    const node1 = getByText("1.Choose Image");
    const node2 = getByText("2.Choose Instance Type");
    const node3 = getByText("3.Choose Storage and Network");
    const node4 = getByText("4.Configure Security");
    const node5 = getByText("5.Review and Launch");
    fireEvent.click(node1);
    fireEvent.click(node2);
    fireEvent.click(node3);
    fireEvent.click(node4);
    fireEvent.click(node5);
  });