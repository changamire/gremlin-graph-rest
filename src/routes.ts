import {RequestHandler, Router, Request} from 'express';
import GraphService from "./service/graphService";

const router: Router = Router();
const service: GraphService = new GraphService();

const getNeighbours: RequestHandler = async (req: Request, res, next) => {
  const {vertexId} = req.params;
  await service.getNeighbours(vertexId);
  console.log('GOT NEIHJBOURS');
  return {};
};

router.route('/neighbours/:vertexId/').get(getNeighbours);

export default router;