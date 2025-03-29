import { initStore } from "./store.js";
import { initCurrentAsset } from "./components/current-asset.js";
import { initAddItem } from "./components/add-item.js";
import { initHistoryList } from "./components/history-list.js";

init();

function init() {
  initStore();

  initCurrentAsset();
  initAddItem();
  initHistoryList();
}
