import * as apiMethods from "@/services";
import { parseNetworkError } from "@/utils/request";

export default {
  async api(
    { commit },
    {
      entity,
      action,
      payload = {},
      query,
      params,
      headers = {},
      loading = true,
    }
  ) {
    loading && commit("SET_API_CALL_IN_PROGRESS", true);

    try {
      const response = await apiMethods[entity][action](
        {
          payload,
          query,
          params,
        },
        { headers }
      );
      return response;
    } catch (error) {
      const errorPayload = {
        [`${entity}_${action}_request`]: parseNetworkError(error),
      };
      commit("SET_GENERAL_ERRORS", errorPayload);
      throw error;
    } finally {
      loading && commit("SET_API_CALL_IN_PROGRESS", false);
    }
  },
};
