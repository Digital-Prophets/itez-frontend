import { Beneficiary} from "./beneficiary";

export interface Props {
    data: QueriedData;
}

export interface QueriedData {
    count:    number;
    next:     null;
    previous: null;
    results:  Result[];
}

export interface Result {
    id:           number;
    gross_pay:    string;
    company:      string;
    insured:      boolean;
    work_address: string;
    beneficiary:  Beneficiary;
}