import {AppApi} from "../AppApi";

export const ReceiptApi = {
  save: `${AppApi.protectedApi}/receipt`,
  getPaginatedByUserId: `${AppApi.protectedApi}/receipt/user/{id}/paginated`,
  getAllByJournalId: `${AppApi.protectedApi}/receipt/user/{id}`
}
