import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "./Counter"


describe('Counter Component',()=>{
    it('initial counter value is 0',()=>{
        render(<Counter />)
        const counterValueElement=screen.getByTestId('counterValue');
        expect(counterValueElement.textContent).toBe('0')
    })

    it('proper increment & decrement',()=>{
        render(<Counter />)
        const counterValueElement=screen.getByTestId('counterValue');

        //get increment and decrement buttons
         const incrementBtn=screen.getByTestId('incrementBtn');
        const decrementBtn=screen.getByTestId('decrementBtn');

        //before increment or decrement, check default counter is 0
        expect(counterValueElement.textContent).toBe('0')

        //Button clicked twice
        fireEvent.click(incrementBtn);
        fireEvent.click(incrementBtn);
        expect(counterValueElement.textContent).toBe('2')

        fireEvent.click(decrementBtn);
        fireEvent.click(decrementBtn);
        expect(counterValueElement.textContent).toBe('0')



    })
})