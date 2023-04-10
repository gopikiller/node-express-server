/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/healthcheck": {
    get: operations["healthCheck"];
  };
}

export interface components {
  schemas: {
    Error: {
      error_code: string;
      error_message: string;
    };
    HealthCheck: {
      status: number;
      message: string;
      is_healthy: boolean;
    };
  };
}

export interface operations {
  healthCheck: {
    responses: {
      /** Check health of the application */
      200: {
        content: {
          "application/json": components["schemas"]["HealthCheck"];
        };
      };
      401: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      404: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
      409: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
}

export interface external {}
