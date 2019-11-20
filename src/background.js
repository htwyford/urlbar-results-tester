/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

const URLBAR_PROVIDER_NAME = "result-tester";
let ENABLED = true;

/**
 * Our `browser.urlbar.onResultsRequested` listener.
 */
async function getProviderResults(query) {
  return [
    {
      type: "remote_tab",
      source: "tabs",
      payload: {
        title: "Test remote_tab-tabs result",
        url: "http://example.com/remote_tab-tabs",
      },
    },
    {
      type: "search",
      source: "search",
      payload: {
        suggestion: "Test search-search result",
        engine: "Test engine",
      },
    },
    {
      type: "tab",
      source: "tabs",
      payload: {
        title: "Test tab-tabs result",
        url: "http://example.com/tab-tabs",
      },
    },
    {
      type: "tip",
      source: "local",
      payload: {
        text: "Test tip-local result text",
        buttonText: "Test tip-local result button text",
        buttonUrl: "http://example.com/tip-button",
        helpUrl: "http://example.com/tip-help",
      },
    },
    {
      type: "url",
      source: "bookmarks",
      payload: {
        title: "Test urlbar-bookmarks result",
        url: "http://example.com/url-bookmarks"
      },
    },
    {
      type: "url",
      source: "history",
      payload: {
        title: "Test url-history result",
        url: "http://example.com/url-history",
      },
    },
  ];
}

/**
 * Our `browser.urlbar.onBehaviorRequested` listener.
 */
function getProviderBehavior(query) {
  return ENABLED ? "restricting" : "inactive" ;
}

(async function main() {
  browser.browserAction.onClicked.addListener(() => ENABLED = !ENABLED);
  await browser.urlbar.onBehaviorRequested.addListener(
    getProviderBehavior,
    URLBAR_PROVIDER_NAME
  );
  await browser.urlbar.onResultsRequested.addListener(
    getProviderResults,
    URLBAR_PROVIDER_NAME
  );
})();