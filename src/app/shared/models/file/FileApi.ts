import {AppApi} from "../../../domain/AppApi";

const  publicPath = `${AppApi.publicApi}/file`
const protectedPath = `${AppApi.protectedApi}/file`
export const FileApi = {

    download: `${publicPath}/download`

}
