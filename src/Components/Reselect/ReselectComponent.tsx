import React from "react";
import {totalSelector} from "./taxSelector";
import {taxSelector} from "./testSelector";
import {SelectInput} from "./selectInput";


export const ReselectComponent = () => {
    let exampleState = {
        shop: {
            taxPercent: 8,
            items: [
                { name: 'apple', value: 1.20 },
                { name: 'orange', value: 0.95 },
            ]
        }
    };

    // console.log(totalSelector(exampleState));
    taxSelector(exampleState)
    return (
        <div>
            <SelectInput />
        </div>
    );
};
