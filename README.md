# es6-chat-alt

React.js + Babel + alt.js

---
Reactの練習。  
最近Fluxの実装を色々見ていて、良さそうなのがあったので試してみた。  
Fluxの実装として[alt.js](https://github.com/goatslacker/alt)というものがAirbnbの[@goatslacker](https://github.com/goatslacker)によって実装されている。  
Reactとalt.jsをつかってFacebookのReactのexamplesにある、chatを実装した。  
ただし、alt.jsのexamplesにも同じようなことがされているので、今回は練習も兼ねてES6(Babel)をつかって実装した。ただし、まだあまりES6の仕様に慣れていないのもあって、そこまでいい感じにES6のよさが使えていないと思う。  

ビルドツールにはgulpを使用して、browserifyとbabelifyでビルド。

```sh
$ npm install
$ gulp
$ open index.html
```
