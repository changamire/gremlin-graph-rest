import { Neighbours, Vertex } from 'gremlin-graph-service/dist/types/domain/interfaces';
import { GremlinClient } from 'gremlin-graph-service';

export default class GraphService {
  private gremlinClient: GremlinClient;

  constructor() {
    console.log(`Connecting to Gremlin endpoint at ${process.env.GREMLIN_HOST}:${process.env.GREMLIN_PORT}`);
    const useIAM: boolean = process.env.USE_IAM === 'true' ? true : false;
    console.log(`IAM enabled: ${useIAM}`)
    this.gremlinClient = new GremlinClient(useIAM, process.env.GREMLIN_HOST, parseInt(process.env.GREMLIN_PORT), process.env.AWS_REGION);
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