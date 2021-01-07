import React from "react";
import {getSortedOperations} from "./lodash";

export const LodashComponent = () => {

    const operations = [['VIEW'], ['PRINT', 'VIEW'], ['VIEW', 'EDIT']];
    const sortedOperations = getSortedOperations(operations, 3);
    console.log('sortedOperations', sortedOperations);

    return (
        <div>
            LodashComponent
        </div>
    );
};
