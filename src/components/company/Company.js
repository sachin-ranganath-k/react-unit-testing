import React from 'react'

const Company = ({name}) => {
  return (
    <div>
        <h2>Company | Testing props, Events, States, Hooks, Props, CSS, JSX</h2>
        <h3 data-testid="companyName">cognizant's official website</h3>
        <h4 data-testid="companyFullName">Company name : {name}</h4>
    </div>
  )
}

export default Company