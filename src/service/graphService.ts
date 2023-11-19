import {Neighbours, Vertex} from 'gremlin-graph-service/dist/types/domain/interfaces';
import {GremlinClient} from 'gremlin-graph-service';

export default class GraphService {
  private gremlinClient: GremlinClient;

  constructor() {
    console.log(`Connecting to Gremlin endpoint at ${process.env.GREMLIN_ENDPOINT}`);
    this.gremlinClient = new GremlinClient(process.env.GREMLIN_ENDPOINT);
  }

  public async getNeighbours(vertexId: string): Promise<Neighbours> {
    return this.gremlinClient.getNeighbours(vertexId);
  }

  public async addVertex(id: string, label: string, properties: {}): Promise<any> {
    return this.gremlinClient.addVertex(id, label, properties);
  }

  public async addEdge(id: string, fromVertexId: string, toVertexId: string,
                       label: string, properties: {}): Promise<any> {
    return this.gremlinClient.addEdge(id, fromVertexId, toVertexId, label, properties);
  }

  public async findVertex(label: string, key: string, value: string): Promise<Vertex[]> {
    return this.gremlinClient.findVertexByLabelAndAttribute(label, key, value);
  }
}