import React from 'react'
import QuoteCard from './QuoteCard'
import { Button } from '@material-ui/core'

function QuoteOverview(props) {
    const { quote } = props.quoteData

    return(
        <div>
            {
                Object.keys(quote.variable_options).map((current, index) => {
                    return(
                        <QuoteCard key={index} info={quote.variable_options[current]} defaultSelection={quote.variable_selections[current]}/>
                    )
                })
            }
            <div><b>Annual Premium: </b>{`$${quote.premium} USD`}</div>
            <Button onClick={() => props.writeToParent("quote", null)}>Go Back to Rating Information</Button>
        </div>
    )
}

export default QuoteOverview

