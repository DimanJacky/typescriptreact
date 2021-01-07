import {isEmpty, intersection, toArray} from 'lodash'
import {Fine} from "./types";

// Если переданный объект массивов не пустой, то делаем из него массив и возвращаем массив совпадающих значений
export const comparePermittedOperations = (operations: any) =>
    (!isEmpty(operations)
        ? toArray(operations).reduce((previousValue: string[], currentValue: string[]) =>
            intersection(previousValue, currentValue))
        : []);

// Из массива объектов штрафов создаем массив других объектов с нужными свойствами, и этот же объект в свойстве fine
// На каждой итерации добавляем в новый объект свойство, если его нет, и заполняем данными организации из payer
// Возвращается объект со свойствами id, client, fines с предыдущим объектом
export const currentFineList = (fineList: Fine[] = []) => {
    return fineList.reduce((acc: any, fine: Fine) => {
        if (!acc[fine.payer.id]) {
            acc[fine.payer.id] = {
                id: fine.payer.id,
                client: fine.payer,
                fines: []
            };
        }
        acc[fine.payer.id].fines.push(fine);
        return acc;
    }, {});
};
