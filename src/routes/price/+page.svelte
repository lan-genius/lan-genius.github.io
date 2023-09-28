<script>
  import { getRoute, parseQuery } from "$lib";
  import { getStr, ids } from "$lib/lang";

  let username = "";
  if (typeof window !== "undefined") {
    let m = parseQuery(location.href);
    username = m["username"];
    if (!username) {
      username = m["u"];
    }
  }
</script>

<div class="col">
  <div class="col w maxw3xl p">
    <b class="red">🎉{getStr(ids.beMemberToUnlockFeatures)}🎉 </b>
    <div class="row m">
      <span>{getStr(ids.pleaseCreateAnAccountBeforePay)}</span>
      <a class="btn btn-outline" href={getRoute("/download")}>
        <span class="material-icons md-18">download</span>
        <span>{getStr(ids.registerOnClient)}</span>
      </a>
    </div>
    <div class="row m">
      <div class="card hover">
        <div class="red">¥6 RMB</div>
        <small>1 {getStr(ids.month)}</small>
      </div>
      <div class="card hover">
        <div class="red">¥12 RMB</div>
        <small>3 {getStr(ids.months)}</small>
      </div>
      <div class="card hover">
        <div class="red">¥28 RMB</div>
        <small>1 {getStr(ids.year)}</small>
      </div>
      <div class="card hover">
        <div class="red">¥42 RMB</div>
        <small>{getStr(ids.permanent)}</small>
      </div>
    </div>
    <p>{getStr(ids.pleaseRemarkYourUsernameWhenPaying)} !!!</p>

    <a href={getRoute("/pay?username=" + encodeURIComponent(username))} class="btn btn-primary px">
      <span class="material-icons md-18">shopping_cart</span>
      <span>{getStr(ids.payNow)}</span>
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
</div>

<style>
</style>
