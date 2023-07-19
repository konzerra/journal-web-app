import {AppApi} from "../AppApi";

export const PurchaseApi = {
  save: `${AppApi.protectedApi}/purchase`,
  getPaginatedByUserId: `${AppApi.protectedApi}/purchase/user/{id}/paginated`,
  getAllByJournalId: `${AppApi.protectedApi}/purchase/journal/{id}`
}
