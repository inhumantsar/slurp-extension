import browser from "webextension-polyfill";

const slurp = (url: string) => {
  const slurpUrl = `obsidian://slurp?url=${url}`;
  browser.tabs.create({ url: slurpUrl });
};

browser.action.onClicked.addListener((tab) => {
  if (tab.url && tab.url.startsWith("http")) slurp(tab.url);
});