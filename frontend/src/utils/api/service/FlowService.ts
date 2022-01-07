import http from '../BookfaceApi'
import {CreateFlowObject, Flow, FlowDataObject} from '../../interfaces/FlowData'

const flowsUrl = '/flow'

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

    updateFlowById: (id: string, flowPayload: CreateFlowObject) => {
        return http.put(`${flowsUrl}/${id}`, flowPayload)
    }

}

export default FlowService
