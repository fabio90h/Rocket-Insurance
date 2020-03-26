import React, {useState} from 'react'
import { FormControl, InputLabel, Select, MenuItem  } from '@material-ui/core'
import './QuoteCard.css'

function QuoteCard(props) {
    const [selectedOption, setSelectOption] = useState(props.defaultSelection)

    return(
        <div id="quoteCard">
            {props.imagesURL && <div id="cardImage"><img src={props.imagesURL} alt={props.info.title} /></div>}
            <div id="quoteCardForm">
                {/* TITLE */}
                <h4>{props.info.title}</h4>
                {/* DESCRIPTION */}
                <div>
                    {props.info.description}
                </div>
                <br/>
                {/* DROPDOWN */}
                <div id="cardDropdown">
                    <FormControl variant="outlined">
                        <InputLabel id="demo-simple-select-outlined-label">Values</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={selectedOption}
                            onChange={(e) => setSelectOption(e.target.value)}
                            label="Values"
                        >
                            {props.info.values.map((current, index) => <MenuItem key={index} value={current}>${current}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
            </div>
        </div>
    )
}

export default QuoteCard