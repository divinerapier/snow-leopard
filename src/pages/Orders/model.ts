import { Effect, Reducer, } from 'umi';
import { SubmitOrder, } from './service';

export interface RootObject {
    name: string;
    phone_number: string;
    address: string;
}

export interface StateType {
    current?: string;
    step?: RootObject;
}

export interface ModelType {
    namespace: string;
    state: StateType;
    effects: {
        submitStepForm: Effect;
    };
    reducers: {
        saveStepFormData: Reducer<StateType>;
        saveCurrentStep: Reducer<StateType>;
        stateDatasets: Reducer<StateType>;
        stateGroups: Reducer<StateType>;
    };
}

const Model: ModelType = {
    namespace: 'Orders',
    state: {
        current: 'info',
        step: {
            name: "",
            phone_number: "",
            address: "",
        },
    },

    effects: {
        *submitStepForm({ payload }, { call, put }) {
            yield call(SubmitOrder, payload);
            yield put({
                type: 'submitProject',
                payload,
            });
            yield put({
                type: 'saveCurrentStep',
                payload: 'result',
            });
        },
    },

    reducers: {
        saveCurrentStep(state, { payload }) {
            return {
                ...state,
                current: payload,
            };
        },

        saveStepFormData(state, { payload }) {
            return {
                ...state,
                step: {
                    ...state?.step,
                    ...payload,
                },
            };
        },
        stateDatasets(state, { payload }) {
            return {
                ...state,
                datasets: payload.data.datasets
            };
        },
        stateGroups(state, { payload }) {
            return {
                ...state,
                groups: payload.data.data
            };
        },
    },
};

export default Model;
