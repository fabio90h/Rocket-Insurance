import React from 'react'
import QuoteCard from '../QuoteCard/QuoteCard'
import { Button } from '@material-ui/core'
import { ArrowBackIos } from '@material-ui/icons'
import meteor from '../../media/meteor.jpg'
import coins from '../../media/coins.jpeg'
import './QuoteOverview.css'

function QuoteOverview(props) {
    const { quote } = props.quoteData
    const imagesURL = {
        deductible: coins,
        asteroid_collision: meteor
    }

    return(
        <div id="quoteOverview">
            <h2>Quote Overview</h2>
            <div><b>Annual Premium:</b>{` $${quote.premium} USD`}</div>
            <div id="quoteCardHolder">
                {
                    Object.keys(quote.variable_options).map((current, index) => {
                        return(
                            <QuoteCard 
                                key={index}
                                imagesURL={imagesURL[current]} 
                                info={quote.variable_options[current]} 
                                defaultSelection={quote.variable_selections[current]}
                            />
                        )
                    })
                }
            </div>
            
            <Button 
                onClick={() => props.writeToParent("quote", null)}
                // variant="outlined" 
                type="submit"
                size="large"
                color="primary"
                startIcon={<ArrowBackIos />}
            >
                Go Back to Rating Information
            </Button>
        </div>
    )
}

export default QuoteOverview

