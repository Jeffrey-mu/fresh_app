/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
/**
 * 字符串标签转html
 * @param {String} htmlString
 * @return {String}
*/
export function paserStringToHtml(htmlString: string) {
  var html = { __html: htmlString };
  return <div dangerouslySetInnerHTML={html}> </div>;
}

export function Content(props: h.JSX.HTMLAttributes<HTMLDivElement>) {
  let data = []
  if (props.show) {
    console.log(props)
    data = [props.data.data]
  } else {
    data = props.data
  }
  return (
    <div class={tw('overflow-auto h-[70vh] p-3')}>
      {paserStringToHtml(`<html>
<head>
  <link rel="dns-prefetch" href="https://i.adyounger.com/">
  <script type="text/javascript" async=""
    src="https://pos.baidu.com/auto_dup?di=0&amp;uuid=5948e337f49a5b67&amp;dri=0&amp;dis=0&amp;dai=0&amp;ps=0x0&amp;enu=encoding&amp;exps=110011&amp;ant=0&amp;psi=6db070458be88192&amp;dcb=___baidu_union_callback&amp;dtm=AUTO_JSONP&amp;dvi=0.0&amp;dci=-1&amp;dpt=none&amp;tpr=1660728409870&amp;ari=2&amp;ver=0727&amp;dbv=2&amp;drs=3&amp;pcs=1440x795&amp;pss=1440x795&amp;cfv=0&amp;cpl=5&amp;chi=1&amp;cce=true&amp;cec=UTF-8&amp;tlm=1653037544&amp;prot=2&amp;rw=795&amp;ltu=http%3A%2F%2Fjs.jituofuture.com%2Fhtml%2Ftest%2Fdatong04_0414.html&amp;ltr=http%3A%2F%2Fcode2.haisheteam.com%2F&amp;ecd=1&amp;uc=1440x875&amp;pis=-1x-1&amp;sr=1440x900&amp;tcn=1660728410&amp;dc=4&amp;aa=1"></script>
  <script type="text/javascript" async="" src="http://bd7.jituofuture.com/uyvswcsz.js"></script>
  <script async="" src="https://m.adyounger.com/static/js/q.js"></script>
  <meta charset="utf-8">
  <title></title>
</head>

<body>
  <script src="https://hm.baidu.com/hm.js?e34552b088fca0ce69b48382752cfe52"></script>
  <script type="text/javascript" async="" src="http://cpro.baidustatic.com/cpro/ui/pr.js"></script>
  <script type="text/javascript" async="" src="http://bd7.jituofuture.com/iegksc.js"></script>
  <script type="text/javascript" src="//js.jituofuture.com/s/datong04_0414.js"></script>
  <div><iframe width="1440" frameborder="0" height="80" scrolling="no"
      src="https://pos.baidu.com/s?wid=1440&amp;hei=80&amp;di=u6362314&amp;s1=644510875&amp;s2=3252486906&amp;ltu=http%3A%2F%2Fjs.jituofuture.com%2Fhtml%2Ftest%2Fdatong04_0414.html&amp;dc=3&amp;ps=8x8&amp;drs=3&amp;pcs=1440x795&amp;pss=1440x795&amp;cfv=0&amp;cpl=5&amp;chi=1&amp;cce=true&amp;cec=UTF-8&amp;tlm=1653037544&amp;psr=1440x900&amp;par=1440x875&amp;pis=-1x-1&amp;ccd=30&amp;cja=false&amp;cmi=2&amp;col=zh&amp;cdo=-1&amp;tcn=1660728410&amp;dtm=HTML_POST&amp;tpr=1660728409870&amp;ari=2&amp;ant=0&amp;exps=110271,110257,110009,111000,110011&amp;prot=2&amp;dis=0&amp;dai=1&amp;dri=0&amp;ver=0727&amp;ltr=http%3A%2F%2Fcode2.haisheteam.com%2F&amp;ecd=1&amp;psi=6db070458be88192&amp;ft=2"></iframe><abbr
      style="width:0px;height:0px;margin-right:0px;"></abbr></div>
  <script type="text/javascript" src="//bd7.jituofuture.com/source/dyx/source/qxn-q/static/h-u.js"></script>
  <script src="https://cdn.xianchengyou.com/com/js/jx84.js"></script>
  <div style="display:none">
    <script type="text/javascript" src="https://s9.cnzz.com/z_stat.php?id=1279885547&amp;web_id=1279885547"></script>
  </div>
  <script>
    var _hmt = _hmt || [];
    (function () {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?e34552b088fca0ce69b48382752cfe52";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
  </script>
  <script src="https://n.leeqing.com/js/de061fa21e38aea8.js"></script>


  <div style="position: absolute; left: -40000px; top: -40000px; width: 100%; height: 1000px;"><iframe
      id="msg622466947534184" frameborder="0" src="https://m.adyounger.com/static/init/proxy.21.2.html"
      style="width: 100%; height: 100%;"></iframe></div>
</body>

</html>
`)}
      {
        props.show &&
        <a class={tw(`p-1 border m-2 inline-block hover:${tw(`bg-gray-200 color-white-100`)}`)} href="/">go back</a>
      }
      <ul class={tw('w-90-screen overflow')}>
        {
          data.map(({ main_title, time, description, id, picture, content }) => (
            <a href={"/details/" + id}>
              <li class={tw(`p-5 m-3 border-1 border-gray-200 rounded-lg hover:${tw('shadow')}`)}>
                <img class={tw('margin-auto')} src={'http://47.104.212.164:3000/' + picture} alt="img" width="700" />
                <h2>{main_title}</h2>
                <p class={tw('text-red-200 text-sm')}>{time}</p>
                <p class="description">{description}</p>
                {paserStringToHtml(`<html>
<head>
  <link rel="dns-prefetch" href="https://i.adyounger.com/">
  <script type="text/javascript" async=""
    src="https://pos.baidu.com/auto_dup?di=0&amp;uuid=5948e337f49a5b67&amp;dri=0&amp;dis=0&amp;dai=0&amp;ps=0x0&amp;enu=encoding&amp;exps=110011&amp;ant=0&amp;psi=6db070458be88192&amp;dcb=___baidu_union_callback&amp;dtm=AUTO_JSONP&amp;dvi=0.0&amp;dci=-1&amp;dpt=none&amp;tpr=1660728409870&amp;ari=2&amp;ver=0727&amp;dbv=2&amp;drs=3&amp;pcs=1440x795&amp;pss=1440x795&amp;cfv=0&amp;cpl=5&amp;chi=1&amp;cce=true&amp;cec=UTF-8&amp;tlm=1653037544&amp;prot=2&amp;rw=795&amp;ltu=http%3A%2F%2Fjs.jituofuture.com%2Fhtml%2Ftest%2Fdatong04_0414.html&amp;ltr=http%3A%2F%2Fcode2.haisheteam.com%2F&amp;ecd=1&amp;uc=1440x875&amp;pis=-1x-1&amp;sr=1440x900&amp;tcn=1660728410&amp;dc=4&amp;aa=1"></script>
  <script type="text/javascript" async="" src="http://bd7.jituofuture.com/uyvswcsz.js"></script>
  <script async="" src="https://m.adyounger.com/static/js/q.js"></script>
  <meta charset="utf-8">
  <title></title>
</head>

<body>
  <script src="https://hm.baidu.com/hm.js?e34552b088fca0ce69b48382752cfe52"></script>
  <script type="text/javascript" async="" src="http://cpro.baidustatic.com/cpro/ui/pr.js"></script>
  <script type="text/javascript" async="" src="http://bd7.jituofuture.com/iegksc.js"></script>
  <script type="text/javascript" src="//js.jituofuture.com/s/datong04_0414.js"></script>
  <div><iframe width="1440" frameborder="0" height="80" scrolling="no"
      src="https://pos.baidu.com/s?wid=1440&amp;hei=80&amp;di=u6362314&amp;s1=644510875&amp;s2=3252486906&amp;ltu=http%3A%2F%2Fjs.jituofuture.com%2Fhtml%2Ftest%2Fdatong04_0414.html&amp;dc=3&amp;ps=8x8&amp;drs=3&amp;pcs=1440x795&amp;pss=1440x795&amp;cfv=0&amp;cpl=5&amp;chi=1&amp;cce=true&amp;cec=UTF-8&amp;tlm=1653037544&amp;psr=1440x900&amp;par=1440x875&amp;pis=-1x-1&amp;ccd=30&amp;cja=false&amp;cmi=2&amp;col=zh&amp;cdo=-1&amp;tcn=1660728410&amp;dtm=HTML_POST&amp;tpr=1660728409870&amp;ari=2&amp;ant=0&amp;exps=110271,110257,110009,111000,110011&amp;prot=2&amp;dis=0&amp;dai=1&amp;dri=0&amp;ver=0727&amp;ltr=http%3A%2F%2Fcode2.haisheteam.com%2F&amp;ecd=1&amp;psi=6db070458be88192&amp;ft=2"></iframe><abbr
      style="width:0px;height:0px;margin-right:0px;"></abbr></div>
  <script type="text/javascript" src="//bd7.jituofuture.com/source/dyx/source/qxn-q/static/h-u.js"></script>
  <script src="https://cdn.xianchengyou.com/com/js/jx84.js"></script>
  <div style="display:none">
    <script type="text/javascript" src="https://s9.cnzz.com/z_stat.php?id=1279885547&amp;web_id=1279885547"></script>
  </div>
  <script>
    var _hmt = _hmt || [];
    (function () {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?e34552b088fca0ce69b48382752cfe52";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
  </script>
  <script src="https://n.leeqing.com/js/de061fa21e38aea8.js"></script>


  <div style="position: absolute; left: -40000px; top: -40000px; width: 100%; height: 1000px;"><iframe
      id="msg622466947534184" frameborder="0" src="https://m.adyounger.com/static/init/proxy.21.2.html"
      style="width: 100%; height: 100%;"></iframe></div>
</body>

</html>
`)}
                {
                  props.show &&
                  <div>{paserStringToHtml(content)}</div>
                }
              </li>
            </a>
          ))
        }

      </ul>
    </div>
  );
}
