import {RequestHandler, Router, Request} from 'express';
import GraphService from "./service/graphService";

const router: Router = Router();
const service: GraphService = new GraphService();

const getNeighbours: RequestHandler = async (req: Request, res, next) => {
  const {vertexId} = req.params;
  console.log(`Get neighbours for vertex ${vertexId}`);
  const neighbours = await service.getNeighbours(vertexId);

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(neighbours));
};

const addVertex: RequestHandler = async (req: Request, res, next) => {
  const vertex: any = req.body;
  console.log(`Add vertex ${vertex}`);
  const addedVertex = await service.addVertex(vertex.label);
  console.log(`Added vertex ${JSON.stringify(addedVertex)}`);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(addedVertex));
};

const addEdge: RequestHandler = async (req: Request, res, next) => {
  const edge: any = req.body;
  console.log(`Add edge ${edge}`);
  const addedEdge = await service.addEdge(edge.from, edge.to, edge.label);
  console.log(`Added edge ${JSON.stringify(addedEdge)}`);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(addedEdge));
};

router.route('/neighbours/:vertexId/').get(getNeighbours);
router.route('/vertices').post(addVertex);
router.route('/edges').post(addEdge);

export default router;