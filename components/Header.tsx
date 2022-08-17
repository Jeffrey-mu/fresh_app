/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
interface RoutesModel {
  name: string;
  link: string;
}
let routes: RoutesModel[] = [
  {
    name: 'home',
    link: '/',
  },
  {
    name: 'docs',
    link: '/docs',
  },
]
export function Header(props: h.JSX.HTMLAttributes<HTMLDivElement>) {

  console.log()
  return (
    <div class={tw('flex bg-gray-900 h-[4rem]')}>
      <a class={tw('mt-3')} href="/"> <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      /></a>
      <ul class={tw('flex items-center ')}>
        {routes.map(({ link, name }) => (
          <li class={tw(`m-2 text(yellow-200) lh-[4rem] hover:${tw('text-red-200')}`)}>
            <a class={tw('inline-block')} href={link}><span>{name}</span></a>
          </li>
        ))}
      </ul>
    </div >
  );
}
