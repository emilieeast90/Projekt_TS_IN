import http from '../BookfaceApi'
import {CreateFlowObject, FlowDataObject, Flow} from '../../interfaces/FlowData'

const flowsUrl = '/flow'
const searchFlowRoute = 'searchFlow'

const FlowService = {
    createFlow: (newFlowPayload: Flow) => {
        return http.post(flowsUrl, newFlowPayload)
    },

    deleteFlowById: (id: string) => {
        return http.delete(`${flowsUrl}/${id}`)
    },

    getAllFlows: () => {
        return http.get<FlowDataObject[]>(flowsUrl)
    },

    getFlowById: (id: string) => {
        return http.get<FlowDataObject>(`${flowsUrl}/${id}`)
    },

    getFlowWithQuery: () => {
        return http.get<FlowDataObject>(`${flowsUrl}/${searchFlowRoute}`)
    },

    updateFlowById: (id: string, flowPayload: CreateFlowObject) => {
        return http.put(`${flowsUrl}/${id}`, flowPayload)
    }

}

export default FlowService
