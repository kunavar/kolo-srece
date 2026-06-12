// ── Kolo sreče – konfiguracija povezav ───────────────────────────
var CONFIG = {
  // Tip kolesa: 'compass' ali 'vinjeta'
  wheelStyle: 'vinjeta',

  // URL QR kode v "Namestitev + kupon" overlayu (index.html)
  couponPage: 'https://kunavar.github.io/kolo-srece/install.html',

  // App Store povezave (install.html)
  appStoreIos:     'https://apps.apple.com/us/app/generali-zame/id1625650675',
  appStoreAndroid: 'https://play.google.com/store/apps/details?id=si.generali.zdravje',

  // Deeplink za odpiranje app (install.html)
  deeplinkIos:     'com.tictrac.zdravje://benefits/details/1385',
  deeplinkAndroid: 'si.generali.zdravje://benefits/details/1385'
};
