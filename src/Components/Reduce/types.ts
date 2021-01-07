export type Fine = {
    id: number
    fineNumber: string,
    effectiveDate: string,
    decisionNumber: number | string,
    accrualType: string,
    fineDate: string,
    fineStatus: {
        base: string,
        baseName: string,
        extended: string,
        extendedName: string
    }
    violationType: {
        koapCode: number | string,
        koapText: string
    },
    payer: {
        count: string
        id: number
        inn: string
        kpp: string
        name: string
    },
    receiver: {
        account: string
        bank: string
        bic: string
        corraccount: string
        inn: string
        kbk: string
        kpp: string
        name: string
        oktmo: string
    }
    breachDate: string,
    breachRegion: string,
    decisionSumm: number,
    decisionCurrency: string,
    breachPlace: string,
    fineEndDate: string,
    departmentName: string,
    vehicleReg: string,
    isOpen?: boolean
}
