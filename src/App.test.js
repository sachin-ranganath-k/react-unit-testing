import { render, screen } from '@testing-library/react';
import App from './App';


describe('App Component' ,()=>{
  it('renders learn react link', () => {

    //Act
    render(<App />);
    const textInDocument = screen.getByText(/Text/i);  //Text can be case insensitive
  
    //Assert
    expect(textInDocument).toBeInTheDocument();
  });
  
  it(`should have text `,()=>{
    render(<App />);
    const helloText= screen.getByText('Hello'); //Exact match of Hello to be there

    expect (helloText).toBeInTheDocument();
  })
})

