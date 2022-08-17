// routes/_middleware.ts
import { MiddlewareHandlerContext } from "$fresh/server.ts";
interface State {
  data: string;
}

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  let data = "github inner middleware";
  ctx.state.data = data;
  const resp = await ctx.next();
  resp.headers.set("server", "fresh server");
  return resp;
}
