import {Neighbours, Vertex} from 'gremlin-graph-service/dist/types/domain/interfaces';
import {GremlinClient} from 'gremlin-graph-service';

export default class GraphService {
  private gremlinClient: GremlinClient;

  constructor() {
    this.gremlinClient = new GremlinClient('ws://127.0.0.1:8182/gremlin');
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