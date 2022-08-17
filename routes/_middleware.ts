// routes/_middleware.ts
import { MiddlewareHandlerContext } from "$fresh/server.ts";
interface State {
  time: string;
}
export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  let time = new Date();
  ctx.state.time = time;
  const resp = await ctx.next();
  resp.headers.set("server", "fresh server");
  return resp;
}
