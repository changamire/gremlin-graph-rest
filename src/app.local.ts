import {localServer} from './app';

const port = 3000;
localServer.listen(port, () =>   console.log(`Server is listening on port ${port}.`));