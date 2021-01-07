import React from "react";
import {comparePermittedOperations, currentFineList} from "./reduce";
import {fineList} from "./constants";

export const ReduceComponent = () => {
    // comparePermittedOperations из доступных операций выбрать совпадающие во всех массивах
   const operations = [['VIEW'], ['PRINT', 'VIEW'], ['VIEW', 'EDIT']];
    const permittedOperations = comparePermittedOperations(operations);
    console.log('permittedOperations', permittedOperations);




// Берем список штрафов и преобразовываем к другому виду
    const fineListArr = currentFineList(fineList);
    console.log('fineList', fineList);
    console.log('fineListArr', fineListArr);

    return (
        <div>
            ReduceComponent
        </div>
    );
};
