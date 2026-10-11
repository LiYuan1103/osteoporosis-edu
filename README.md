# 骨質疏鬆衛教網站

這個專案是以純 HTML + CSS + 原生 JavaScript 建立的骨質疏鬆衛教靜態網站，適合部署到 GitHub Pages。

## 網站網址
https://LiYuan1103.github.io/osteoporosis-edu/

## 頁面清單
- index.html：首頁
- what-is.html：什麼是骨質疏鬆
- self-check.html：風險自我檢測
- bmd.html：骨密度檢查
- treatment.html：治療藥物
- lifestyle.html：生活保健
- faq.html：常見問答

## 區塊與功能
- 手機優先的響應式設計
- 每頁都有導覽列與字級切換
- OSTA 風險自我檢測（僅在瀏覽器中計算）
- 列印樣式與頁尾網址
- GitHub Actions 自動部署到 GitHub Pages

## TODO
- [ ] 醫師完成各頁內容審閱與修正
- [x] 核對 FRAX 舊網址轉址，改用官方繁中入口並說明台灣模型及使用限制
- [x] 補齊健保第 5.6 節摘要（查核至 2026/10/11；仍待醫師最終審閱）
- [ ] 確認所有頁面與導覽連結正常
- [ ] 上線前請醫師再檢查所有衛教內容


## 臨床修訂草案（2026/10/11）
- 七頁均保留「本頁內容待醫師審閱」，列印也保留警示。不得將本次資料查核視為醫師簽核。
- 修訂依據、版本限制與最終審閱清單：[docs/clinical-review-2026-10-11.md](docs/clinical-review-2026-10-11.md)。
- OSTA 改用朝零截去小數的整數版，加入族群確認；低風險不能排除骨鬆或取消已適用的 DXA。
- 回歸測試：`node --test tests/self-check.test.cjs`。
- 現有列印功能不保證每頁恰好一張 A4；門診「單頁衛教」版面仍待另行設計與臨床確認，勿藉縮小字體硬塞一頁。
