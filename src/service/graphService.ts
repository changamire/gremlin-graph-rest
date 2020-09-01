import {Neighbours} from 'gremlin-graph-service/dist/types/domain/interfaces';
import {GremlinClient} from 'gremlin-graph-service';
import { uuid } from 'uuidv4';

export default class GraphService {
  private gremlinClient: GremlinClient;

  constructor() {
    this.gremlinClient = new GremlinClient('ws://localhost:8182/gremlin');
  }

  public async getNeighbours(vertexId: string): Promise<Neighbours> {
    return this.gremlinClient.getNeighbours(vertexId);
  }

  public async addVertex(label: string): Promise<any> {
    return this.gremlinClient.addVertex(uuid(), label, {});
  }

  public async addEdge(fromVertexId: string, toVertexId: string,
                       label: string): Promise<any> {
    return this.gremlinClient.addEdge(fromVertexId, toVertexId, label, {});
  }
}