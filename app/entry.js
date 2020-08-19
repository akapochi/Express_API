'use strict';
// import dc from 'damage-calc';
// const root = document.getElementById('root');
// root.innerHTML =
//   `<p>攻撃力 100, 防御 50, 防御貫通 30 のダメージは、
//   ${dc.effectiveDamage(100, 50, 30)}
//   </p>`;

// import crypto from 'crypto';
// const root = document.getElementById('root');
// root.innerHTML =
//   `<p>
//   ${crypto.randomBytes(8).toString('hex')}
//   </p>`;

import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');

scalingButton.click(() => {
  block.animate({ width: '200px', height: '200px' }, 2000);
  block.animate({ width: '100px', height: '100px' }, 2000);
});