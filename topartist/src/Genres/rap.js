import React from "react";
import Rap from "./rap";

import { makeStyles } from "@material-ui/core/styles";

export default function rap() {
  return (
    <div>
      <h1  style={{ color: 'white' ,fontFamily: 'monospace'}}> Top 15 Rap Artist</h1>
      <div class="container">
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2015/10/post-malone-1vw-106x106.jpg?1;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#1 Artist</p>
            <a href="http://www.postmalone.com/" target="_blank">
              Post Malone
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2016/12/khalid-dsk-106x106.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#2 Artist</p>
            <a href="https://www.khalidofficial.com/" target="_blank">
              Khalid
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2009/12/drake-hq6-artist-chart-vz1-106x106.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#3 Artist</p>
            <a
              href="https://en.wikipedia.org/wiki/Drake_(musician)"
              target="_blank"
            >
              Drake
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2019/01/lil-nas-x-zl6-106x106.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#4 Artist</p>
            <a href="https://www.lilnasx.com/" target="_blank">
              Lil Nas X
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2015/09/travis-scott-jll-106x106.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#5 Artist</p>
            <a href="https://www.travisscott.com/" target="_blank">
              Travis Scott
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2018/05/juice-wrld-f0a-106x106.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#6 Artist</p>
            <a href="https://en.wikipedia.org/wiki/Juice_Wrld" target="_blank">
              Juice Wrld
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2018/07/dababy-yo9-106x106.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#7 Artist</p>
            <a href="https://en.wikipedia.org/wiki/DaBaby" target="_blank">
              DaBaby
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2017/03/cardi-b-mts-artist-chart-176-106x106.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#8 Artist</p>
            <a
              href="https://www.cardibofficial.com/wap?ref=https://www.google.com/"
              target="_blank"
            >
              Cardi B
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2018/11/lizzo-w3u-174x174.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#9 Artist</p>
            <a href="https://en.wikipedia.org/wiki/Lizzo" target="_blank">
              Lizzo
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2017/11/lil-baby-nwx-106x106.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#10 Artist</p>
            <a href="https://en.wikipedia.org/wiki/Lil_Baby" target="_blank">
              Lil Baby
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2012/09/meek-mill-utw-106x106.jpg?1auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#11 Artist</p>
            <a href="https://meekmill.com/" target="_blank">
              Meek Mill
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2017/05/a-boogie-wit-da-hoodie-nk3-106x106.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#12 Artist</p>
            <a href="https://www.aboogiehbtl.com/" target="_blank">
              A Boogie Wit da Hoodie
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2016/11/21-savage-jjg-106x106.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#13 Artist</p>
            <a href="https://www.savagemode2.com/" target="_blank">
              21 Savage
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://static01.nyt.com/images/2018/06/19/arts/19xxx/19xxx-articleLarge-v2.jpg?quality=75&auto=webp&disable=upscale
            &amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#14 Artist</p>
            <a href="https://www.xxxtentacion.com/" target="_blank">
              XXXTENTACION
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2006/12/chris-brown-cte-106x106.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#15 Artist</p>
            <a href="https://slimenb.chrisbrownworld.com/" target="_blank">
              Chris Brown
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
