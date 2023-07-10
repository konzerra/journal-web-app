import {AppApi} from "../../../domain/AppApi";

const  publicPath = `${AppApi.server.publicApi}/file`
const protectedPath = `${AppApi.server.protectedApi}/file`
export const FileApi = {

    download: `${this.publicPath}/download`

}
