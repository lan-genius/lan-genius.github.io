<script lang="ts">
  import { getRoute, getUsername } from "$lib";

  import { getStr, ids } from "$lib/lang";

  let usernameInput: HTMLInputElement | null = null;
  let username = getUsername();
  let copyDoing = false;
  let text = getStr(ids.copyMyUsername);

  let doCopy = function () {
    copyDoing = true;
    usernameInput?.select();
    document.execCommand("copy");
    if (navigator.clipboard) {
      navigator.clipboard.writeText(username);
    }
    text = "OK";
    setTimeout(() => {
      copyDoing = false;
      text = getStr(ids.copyMyUsername);
    }, 1000);
  };
</script>

<div class="col">
  <h1>{getStr(ids.payNow)}</h1>
  <h3>
    <b class="red">{getStr(ids.pleaseRemarkYourUsernameWhenPaying)}!!!</b>
  </h3>
  {#if username}
    <div id="username-box">
      <input type="text" bind:this={usernameInput} disabled bind:value={username} />
      <button disabled={copyDoing} id="copy-btn" on:click={doCopy}>{text}</button>
    </div>
  {/if}
  <p>{getStr(ids.topUpWillBeDoneWithinTwoDays)}</p>
  <span>售后QQ群: <b>929418739</b></span>
  <a href={getRoute("/contact")}>{getStr(ids.contact)}</a>

  <a href="https://qr.alipay.com/tsx02907mtbanqhpid1vq87">
    <img src={getRoute("/img/alipay.jpg")} alt="alipay" width="320" height="480" />
  </a>
  <span>微信支付无法退款，有问题请加售后Q群:691017244</span>
  <a href="wxp://f2f0p_qNyNEd6TdLm6DBIb9PWiHFsP7ZkmN8">
    <img width="320" height="480" src={getRoute("/img/wechat.jpg")} alt="wechat" />
  </a>

  <h2>
    {getStr(ids.orYouCanPurchaseOnMobile)}
  </h2>
  <div class="row spacearound">
    <a class="m" href="https://play.google.com/store/apps/details?id=com.xchat.stevenzack.langenius">
      <img src={getRoute("/img/playstore.svg")} alt="playstore" height="100" />
    </a>
    <a class="m" href="https://apps.apple.com/cn/app/%E5%B1%80%E5%9F%9F%E7%BD%91%E7%B2%BE%E7%81%B5pro/id1511699208?l=zh">
      <img src={getRoute("/img/appstore.svg")} alt="appstore" height="40" style="margin-top: 10px;" />
    </a>
  </div>
</div>
