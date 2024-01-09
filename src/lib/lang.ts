import { base } from "$app/paths";

export const modeMainlandChina = false;

interface Translation {
    en: string;
    zh: string;
}

export enum ids {
    appName = 1,
    appDesc,
    appExplaination,
    appExplaination2,
    home,
    download,
    pricing,
    contact,
    downloadNow,
    downloadClient,
    releaseHistory,
    language,
    email,
    month,
    months,
    year,
    permanent,
    pay,
    beMemberToUnlockFeatures,
    pleaseCreateAnAccountBeforePay,
    registerOnClient,
    pleaseRemarkYourUsernameWhenPaying,
    payNow,
    topUpWillBeDoneWithinTwoDays,
    copyMyUsername,
    downloadForFree,
    alternateLink,
    dependency,
    orYouCanPurchaseOnMobile,
    ifNotWorkInstall,
    homeTitle,
    login,
    register,
    usernameOrEmail,
    password,
    permanentlyDeleteMyAccount,
    verificationCode,
    getCode,
    aVerificationEmailHasBeenSentToYouPleaseCheck,
    areYouSureToDeleteThisAccount,
    yourAccountHasBeenPermanentlyDeleted,
    about,
    aboutDesc1,
}

const m: Record<ids, Translation> = {
    [ids.yourAccountHasBeenPermanentlyDeleted]:{
        en:'Permanently deleting your account has be done successfully!',
        zh:'您的账号已经永久性删除成功'
    },
    [ids.areYouSureToDeleteThisAccount]:{
        en:'Are you sure to permanently delete your account?',
        zh:'您确定要永久删除您的账号吗？'
    },
    [ids.aVerificationEmailHasBeenSentToYouPleaseCheck]:{
        en:"A verification E-mail has been sent to you, please check",
        zh:'一封验证邮件已经发送至您的邮箱，请查收'
    },
    [ids.getCode]:{
        en:'Get Code',
        zh:'获取验证码'
    },
    [ids.verificationCode]:{
        en:'Verification Code',
        zh:'邮箱验证码'
    },
    [ids.permanentlyDeleteMyAccount]:{
        en:'Permanently Delete My Account',
        zh:'永久性删除我的账号'
    },
    [ids.password]:{
        en:'Password',
        zh:"密码"
    },
    [ids.usernameOrEmail]:{
        en:"Username or E-mail",
        zh:"用户名或邮箱"
    },
    [ids.login]:{
        en:'Login',
        zh:'登录'
    },
    [ids.register]:{
        en:'Register',
        zh:'注册'
    },
    [ids.appName]: {
        en: 'LanGenius',
        zh: '局域网精灵'
    },
    [ids.appDesc]: {
        en: 'Transfer files in LAN easily',
        zh: '局域网传输神器！快速共享文件和剪切板',
    },
    [ids.appExplaination]: {
        en: 'Transfer Files/Clipboard via WiFi',
        zh: '通过Wi-Fi实现高速传输文件',
    },
    [ids.appExplaination2]: {
        en: 'No Traffic Cost, No Internet Needed',
        zh: '不再依赖数据线，不耗流量！'
    },
    [ids.home]: {
        en: 'Home',
        zh: '主页',
    },
    [ids.download]: {
        en: 'Download',
        zh: '下载'
    },
    [ids.pricing]: {
        en: 'Pricing',
        zh: '价格'
    },
    [ids.contact]: {
        en: 'Contact',
        zh: '联系'
    },
    [ids.downloadNow]: {
        en: "Download Now",
        zh: "立即下载",
    },
    [ids.downloadClient]: {
        en: "Download Client",
        zh: "下载客户端"
    },
    [ids.releaseHistory]: {
        en: 'Release History',
        zh: '历史版本',
    },
    [ids.language]: {
        en: 'Language',
        zh: "语言"
    },
    [ids.email]: {
        en: 'E-mail',
        zh: "邮箱"
    },
    [ids.month]: {
        en: 'Month',
        zh: '个月'
    },
    [ids.months]: {
        en: 'Months',
        zh: '个月'
    },
    [ids.year]: {
        en: 'Year',
        zh: "年"
    },
    [ids.permanent]: {
        en: "Permanent",
        zh: "永久"
    },
    [ids.pay]: {
        en: "Pay",
        zh: "支付"
    },
    [ids.beMemberToUnlockFeatures]: {
        en: "Become a Pro Member to unlock features",
        zh: "订阅会员解锁更多功能"
    },
    [ids.pleaseCreateAnAccountBeforePay]: {
        en: "Please create an account before you pay",
        zh: "购买之前请先注册一个账号"
    },
    [ids.registerOnClient]: {
        en: "Register on client",
        zh: "安装并注册"
    },
    [ids.pleaseRemarkYourUsernameWhenPaying]: {
        en: "Please remark your username when paying",
        zh: "支付时一定记得备注上您的用户名"
    },
    [ids.payNow]: {
        en: "Pay Now",
        zh: "立即支付"
    },
    [ids.topUpWillBeDoneWithinTwoDays]: {
        en: "Top up will be done within 2 days",
        zh: "充值将在一个工作日内完成"
    },
    [ids.copyMyUsername]: {
        en: "Copy my username",
        zh: "复制我的用户名"
    },
    [ids.downloadForFree]: {
        en: "Download for Free",
        zh: "免费下载"
    },
    [ids.alternateLink]: {
        en: "Alternate Link",
        zh: "备用下载"
    },
    [ids.dependency]: {
        en: "Please install dependency ",
        zh: "请安装依赖框架"
    },
    [ids.orYouCanPurchaseOnMobile]: {
        en: "Or you can purchase on mobile App",
        zh: "或者你可以在手机上购买专业会员"
    },
    [ids.ifNotWorkInstall]: {
        en: 'If not work, install ',
        zh: '无法运行?请先安装'
    },
    [ids.homeTitle]:{
        en:'LanGenius Official Website',
        zh:'局域网精灵|中文官网',
    },
    [ids.about]:{
        en:'About',
        zh:'关于'
    },
    [ids.aboutDesc1]:{
        en:`The initial thought on LanGenisu is to bring connectivity into the Local Area Network`,
        zh:`局域网精灵的最初目的是提高局域网的可连接性。`
    }
}

export function getStr(id: ids): string {
    let v = m[id];
    if (!base) {
        return modeMainlandChina ? v.zh : v.en;
    }
    if (base === '/zh') {
        return v.zh;
    }
    return v.en;
}