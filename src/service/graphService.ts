import {Neighbours} from 'gremlin-graph-service/dist/types/domain/interfaces';

import {GremlinClient} from 'gremlin-graph-service';

export default class GraphService {
  private gremlinClient: GremlinClient;

  constructor() {
    this.gremlinClient = new GremlinClient('wss://localhost:8182');
  }

  public async getNeighbours(vertexId: string): Promise<Neighbours> {
    return this.gremlinClient.getNeighbours(vertexId);
  }
}