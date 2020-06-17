import {Effect, Reducer} from 'umi'
export interface OrderObject {
    name: string;
    phone_number: string,
    address: string,
}

export interface OrderModel {
    namespace: string;
    state: string;
    reducers: {
        validateName: Effect;
    };
    effects: {
        
    }
}