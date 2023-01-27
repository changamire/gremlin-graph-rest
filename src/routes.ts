import {RequestHandler, Router, Request} from 'express';
import GraphService from "./service/graphService";
import { uuid } from 'uuidv4';

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
  try{
    const addedVertex = await service.addVertex(vertex.id ? vertex.id : uuid(), vertex.label, vertex.properties);
    console.log(`Added vertex ${JSON.stringify(addedVertex)}`);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(addedVertex));
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const findVertex: RequestHandler = async (req: Request, res, next) => {
  const {label, key, value} = req.params;
  console.log(`Find vertex label ${label}, key ${key}, value ${value}`);
  try{
    const vertices = await service.findVertex(label, key, value);
    console.log(`Found vertices ${JSON.stringify(vertices)}`);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(vertices));
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const addEdge: RequestHandler = async (req: Request, res, next) => {
  const edge: any = req.body;
  console.log(`Add edge ${edge}`);
  try {
    const addedEdge = await service.addEdge(edge.id? edge.id : uuid(), edge.from, edge.to, edge.label, edge.properties);
    console.log(`Added edge ${JSON.stringify(addedEdge)}`);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(addedEdge));
  } catch (e) {
    console.error(e);
    next(e);
  }
};

router.route('/neighbours/:vertexId/').get(getNeighbours);
router.route('/vertices').post(addVertex);
router.route('/vertices/label/:label/key/:key/value/:value').get(findVertex);
router.route('/edges').post(addEdge);

export default router;