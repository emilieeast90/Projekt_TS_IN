import {Express} from 'express'
import FlowRoutes from '../controller/FlowController'

const flowRoute: string = '/flow'
const flowRouteId: string = `${flowRoute}/:flowId`

const routes = (app: Express) => {
    app.post(flowRoute, FlowRoutes.createFlow)
    app.get(flowRoute, FlowRoutes.getFlow)
    app.get(flowRouteId, FlowRoutes.getFlowById)
    app.put(flowRouteId, FlowRoutes.updateFlow)
    app.delete(flowRouteId, FlowRoutes.deleteFlow)
}

export default {
    routes
}