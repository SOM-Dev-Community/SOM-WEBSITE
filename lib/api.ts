const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000").replace(/\/$/, "");

/** Absolute URL for an endpoint on the LWSOM API, e.g. apiUrl("/contact"). */
export function apiUrl(path: string) {
  return `${API_URL}${path}`;
}

export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
  }
}

/** GET a JSON endpoint. Throws ApiError with the API's `message` on non-2xx responses. */
export async function apiGet<T>(path: string, params?: Record<string, string | number | undefined>): Promise<T> {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params ?? {})) {
    if (value !== undefined && value !== "") query.set(key, String(value));
  }
  const search = query.size ? `?${query}` : "";

  const response = await fetch(apiUrl(`${path}${search}`), { headers: { Accept: "application/json" } });
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new ApiError(data?.message ?? "Something went wrong. Please try again.", response.status);
  }
  return data as T;
}
