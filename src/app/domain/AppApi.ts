import {environment} from "../../environments/environment";


const ip = environment.apiIp
export const AppApi = {

    publicApi : `${ip}/api/v1/public`,
    protectedApi: `${ip}/api/v1/protected`,
    fileDownload: `${ip}/api/v1/public/file/download`




}
