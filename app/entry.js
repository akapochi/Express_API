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

const movingButton = $('#moving-button');

movingButton.click(() => {
  block.animate({ 'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px' }, 1000);
});

const loadavg = $('#loadavg');

import io from 'socket.io-client';
const socket = io('http://localhost:8000');
socket.on('server-status', (data) => {
  loadavg.text(data.loadavg.toString());
});

socket.on('connect', () => {
  console.log('接続しました');
});

socket.on('disconnect', () => {
  console.log('切断しました');
});