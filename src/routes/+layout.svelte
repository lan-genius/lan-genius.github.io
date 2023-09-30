<script>
  // @ts-nocheck

  import { getRoute } from "$lib";
  import { getStr, ids, modeMainlandChina } from "$lib/lang";
  import { base } from "$app/paths";
  let langLink = "javascript:localStorage.setItem('lang','zh');location.href='/zh'";
  let langText = "中文";
  if (base === "/zh" || modeMainlandChina) {
    langLink = "javascript:localStorage.setItem('lang','en');location.href='/en'";
    langText = "EN";
  }

  let isLoggedIn = false;

  if (typeof window !== "undefined") {
    if (localStorage.getItem("at")) {
      isLoggedIn = true;
    }
  }
</script>

<div class="row shadow" style="background-color: #d6e9f8;">
  <a href={getRoute("/")}><img src={getRoute("/img/logo.png")} alt="logo" height="36" /></a>
  <a href={getRoute("/")} class="btn btn-link"><b class="mobilehide">{getStr(ids.appName)}</b></a>
  <span class="g" />
  <a class="btn btn-link" href={getRoute("/download")}>
    <span class="material-icons md-18">download</span>
    <span class="mobilehide">{getStr(ids.download)}</span>
  </a>
  <a class="btn btn-link" href={getRoute("/price")}>
    <span class="material-icons md-18">shopping_cart</span>
    <span class="mobilehide">{getStr(ids.pricing)}</span>
  </a>
  <a class="btn btn-link" href={getRoute("/contact")}>
    <span class="material-icons md-18">call</span>
    <span class="mobilehide">{getStr(ids.contact)}</span>
  </a>
  <!-- <a class="btn btn-link" href={isLoggedIn ? getRoute("/account") : getRoute("/login")}>
    <span class="material-icons md-18">{isLoggedIn ? "face" : "person"}</span>
  </a> -->
  <a class="btn btn-link" href={langLink}>
    {langText}
  </a>
</div>

<slot />

<footer class="footer">
  <div class="col">
    <h4>Alternate Site</h4>
    <a href="http://lan-genius.com" class="white mb">lan-genius.com</a>
    <a href="http://langenius.gitee.io" class="white mb">langenius.gitee.io</a>
    <a href="http://lan-genius.github.io" class="white mb">lan-genius.github.io</a>
  </div>
</footer>
