/** @jsx h */
import { h } from "preact";
import { Header } from '../../components/Header.tsx'
import TopWelcom from '../../islands/TopWelcom.tsx'
import { Content } from '../../components/Content.tsx'
import { Handlers, PageProps } from "$fresh/server.ts";
export const handler: Handlers = {
  async GET(_, ctx) {
    const { port, hostname } = ctx.localAddr
    const { id } = ctx.params;
    const resp = await fetch(`http://${hostname}:${port}/homeData.json`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const data = await resp.json();
    console.log()
    return ctx.render(data.find(item => id == item.id));
  },
};
export default function Home(data) {
  return (
    <div>
      <Header />
      <TopWelcom />
      <Content data={data} show={true} />
    </div>
  );
}
