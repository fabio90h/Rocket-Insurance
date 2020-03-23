import React, {useState} from 'react'
import { FormControl, InputLabel, Select, MenuItem  } from '@material-ui/core'

function QuoteCard(props) {
    const [selectedOption, setSelectOption] = useState(props.defaultSelection)

    return(
        <React.Fragment>
            {/* TITLE */}
            <h4>{props.info.title}</h4>
            {/* DESCRIPTION */}
            <p>
                {props.info.description}
            </p>
            {/* DROPDOWN */}
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
        </React.Fragment>
    )
}

export default QuoteCard