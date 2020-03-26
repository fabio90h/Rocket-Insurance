import React from 'react'
import QuoteCard from '../QuoteCard/QuoteCard'
import { Button } from '@material-ui/core'
import { ArrowBackIos } from '@material-ui/icons'
import './QuoteOverview.css'

function QuoteOverview(props) {
    const { quote } = props.quoteData
    const imagesURL = {
        deductible: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEupt71-vBxxr5_XzD4y5q6eiJM7GA3SZAHFSdzeNmDJiNfRGj",
        asteroid_collision: "https://cdn.images.express.co.uk/img/dynamic/151/590x/Asteroid-warning-NASA-tracker-rock-bigger-Pyramids-NEO-Earth-asteroids-news-1218905.jpg?r=1576771179310"
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

