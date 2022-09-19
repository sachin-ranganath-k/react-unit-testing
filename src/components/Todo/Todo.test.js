import { render, screen } from "@testing-library/react"
import Todo from "./Todo"

describe('Todo Component', ()=>{
    it('Todo via REST API Call',async()=>{
        render(<Todo />)
        //Passes but Not recommanded
        expect(await screen.findByText('delectus aut autem')).toBeInTheDocument();
    })
})