import {without, intersection} from 'lodash';
import {AVAILABLE_ACTIONS_FOR_SINGLE_SELECTION} from './constants';

// Выбираются совпадающие операции во всех массивах и добавляется еще одно строковое значение в результат массив
export const getFormatedOperations = ((operations: string[][]) =>
    [...intersection(...operations), ...AVAILABLE_ACTIONS_FOR_SINGLE_SELECTION]);

// Если больше одного выбранного документа, то сделать недоступным просмотр истории
// Выбираем все совпадающие операции с историей и исключаем историю
// Иначе выбираем все совпадающие операции с историей
export const getSortedOperations = (operations: string[][], countSelectedDocs = 0): string[] => (
    countSelectedDocs > 1 ?
        without(getFormatedOperations(operations), ...AVAILABLE_ACTIONS_FOR_SINGLE_SELECTION) :
        getFormatedOperations(operations)
);
