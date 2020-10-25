import React from "react";
import "./mainPage.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import LatinPage from "./latinArtistPage";
import Rap from "./rap";
import Pop from "./pop";

const UseStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #3FEEE6 30%, #FC4445 90%)',
    color: 'white',
    fontFamily: 'cursive',
    height: 48,
    padding: '0 30px',
  },
});

const BoxStyle = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #3FEEE6 30%, #FC4445 90%)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function main() {
  const classes = UseStyles();
  const classestwo = BoxStyle();
  return (
    <div> 
      <h1 style={{ color: 'white' , fontFamily: 'monospace'}}> Top 15 Artist</h1>
      <div class="container" >
        <div class="card-left">
          <div class="card-image">
            <img
              src="https://charts-static.billboard.com/img/2015/12/bts-4i5-174x174.jpg?1&amp;
          cs=tinysrgb&amp;h=750&amp;w=1260"
            />
          </div>
          <div class="card-text" >
            <p>#1 Artist</p>
            <a href="https://ibighit.com/bts/eng/" target="_blank">
              BTS
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/1978/12/van-halen-oet-106x106.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#2 Artist</p>
            <a href="http://www.van-halen.com/" target="_blank">
              Van Halen
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/1975/12/fleetwood-mac-m6k-106x106.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#3 Artist</p>
            <a href="https://www.fleetwoodmac.com/" target="_blank">
              Fleetwood Mac
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2018/05/juice-wrld-f0a-174x174.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#4 Artist</p>
            <a href="https://en.wikipedia.org/wiki/Juice_Wrld" target="_blank">
              Juice Wrld
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2019/08/pop-smoke-5gi-artist-chart-4y8-174x174.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#5 Artist</p>
            <a href="http://www.realpopsmoke.com/" target="_blank">
              Pop Smoke
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2011/11/the-weeknd-nsd-174x174.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#6 Artist</p>
            <a href="https://www.theweeknd.com//" target="_blank">
              The Weekend
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2017/03/luke-combs-y14-174x174.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#7 Artist</p>
            <a href="https://www.lukecombs.com/" target="_blank">
              Luke Combs
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2017/04/harry-styles-psx-artist-chart-rzg-174x174.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#8 Artist</p>
            <a href="https://hstyles.co.uk/" target="_blank">
              Harry Styles
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2016/11/blackpink-jkd-artist-chart-xdy-174x174.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#9 Artist</p>
            <a
              href="https://www.ygfamily.com/artist/main.asp?ARTIDX=70&ATYPE=2&LANGDIV=K"
              target="_blank"
            >
              BLACKPINK
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2015/10/post-malone-1vw-174x174.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#10 Artist</p>
            <a href="http://www.postmalone.com/" target="_blank">
              Post Malone
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2018/01/morgan-wallen-ur7-174x174.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#11 Artist</p>
            <a
              href="https://en.wikipedia.org/wiki/Morgan_Wallen"
              target="_blank"
            >
              Morgan Wallen
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2009/12/drake-hq6-artist-chart-vz1-174x174.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#12 Artist</p>
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
            <img src="https://charts-static.billboard.com/img/2018/07/dababy-yo9-174x174.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#13 Artist</p>
            <a href="https://en.wikipedia.org/wiki/DaBaby" target="_blank">
              DaBaby
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2015/12/dua-lipa-5k0-174x174.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#14 Artist</p>
            <a href="https://www.dualipa.com/" target="_blank">
              Dua Lipa
            </a>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://charts-static.billboard.com/img/2006/12/taylor-swift-p7u-artist-chart-ylp-174x174.jpg?1&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
          </div>
          <div class="card-text">
            <p>#15 Artist</p>
            <a href="https://www.taylorswift.com/" target="_blank">
              Taylor Swift
            </a>
          </div>
        </div>
      </div>
      </div>
  );
}
