# 七頁衛教內容修訂紀錄（待最終臨床審閱）

查核日：2026/10/11（台灣）。來源分支：`main`，commit `484e021b8f034161ef472a73d6f053e48d9e3379`。

本文件是來源查核與文字／程式修訂紀錄，不是醫師簽核。七頁及列印版保留待審閱警示；PR 應保持 draft，未經專案負責醫師確認不得合併作正式病人衛教。

## 七頁檢視與處理

| 頁面 | 原有問題／判讀 | 本次修訂 | 依據 |
| --- | --- | --- | --- |
| `index.html` | 無症狀提醒已有；但只建議討論，未區分急症 | 加入跌倒後不能負重、背痛合併神經症狀的就醫提醒；入口不暗示所有人適用 OSTA | S4、S10 |
| `what-is.html` | 基本定義可保留；骨折與家族史過於籠統 | 說明脆弱性骨折、父母髖部骨折、次發性因素與近端肱骨 | S4、S5 |
| `self-check.html` | 接受兒童／男性；小數一位四捨五入可能改變分級；FRAX 已存在 | 族群 gate、整數 OSTA、臨界值測試、低風險仍須評估；更新 FRAX 官方轉址與限制 | S5–S7 |
| `bmd.html` | T 值族群提醒原已存在；中間區間端點含糊；圖示無有效定量尺度 | 明確 −2.5 < T < −1.0；移除重複且易誤解圖示；補 Z 值、量測部位、干擾與追蹤；骨折不能只看 T 值 | S4、S11 |
| `treatment.html` | denosumab 原已提醒停藥風險，但接續不具體；romosozumab 適用對象不明；健保空白；口服雙磷酸鹽一律 30 分鐘不夠精確 | 接續治療、低血鈣／腎臟病、romosozumab 適用與心血管評估；補齊第 5.6 節；ibandronate 60 分鐘 | S1–S3、S8、S9 |
| `lifestyle.html` | 飲食防跌方向合理，但骨折者運動限制不明 | 飲食鈣優先、補充品非藥物替代、避免自行高劑量維生素 D；脊椎骨折運動先評估 | S2、S10 |
| `faq.html` | 停藥與牙科提醒原有但較籠統；收合答案可能未列印 | 區分雙磷酸鹽假期與 denosumab；牙醫與原醫師共同安排；列印展開答案後還原 | S2、S3 |

## 健保版本核對

使用健保署公告及正式附件，不把新聞、共擬會議決議、其他網站標示的「更新日期」當作生效依據。

- **5.6.1：2026/09/01 生效**。核對 7/29 公告（健保審字第1150054837號）附件2及 9/22 彙編第91頁。8月版排除清單仍有 Fosamax，9月版已移除，不能沿用舊清單。網頁保留其餘五項排除品項。未把「未骨折高風險」擴張至所有抗骨吸收藥。
- **5.6.2：彙編第91–92頁**。Teriparatide 仍有至少連續12個月治療失敗路徑、脊椎／髖部骨折與 T ≤ −3.0、18支／2年限制；未把 romosozumab 新條件套用過來。
- **5.6.3：2026/08/01 生效**。7/15 公告（健保審字第1150055475號）及彙編第92頁一致。新增24個月內至少2處、含1處新診斷骨折路徑；另一條仍使用正式「無法耐受副作用或持續配合用藥仍有新診斷骨折」結構，刪除舊版至少12個月文字。網頁沒有將「T ≤ −3.0」單獨寫成給付充分條件。
- 法文的「多於2（含）處」以「至少2處」白話表達。正式條文部位列舉應理解為骨折部位，不能指示民眾對近端肱骨做 DXA 診斷。
- 類固醇條文保留 **>5 mg/日、超過3個月**，沒有偷換成 ≥5、≥3；原文未明寫換算基準，須由醫師核對藥物種類與換算。未把藥品給付條件當成 DXA 檢查給付條件。
- 檢索截至10/11；本次找到最新正式彙編為9/22版，未找到其後改變5.6節的正式公告。未來仍需再次確認當時規則。

## 高風險內容的臨床取捨

**Denosumab**：原文方向正確，補強「無自行停藥假期」、到期無法回診時立即聯絡、先安排抗骨吸收接續。NOGG 建議停藥後以最後一劑起算6個月安排 zoledronate，依 CTX 等結果決定後續；部分病人可用口服 alendronate，但並非一劑 zoledronate 保證完成保護。為免病人自行套用，網頁不提供固定注射／劑量處方；晚期 CKD 必須個別規劃。此為臨床建議，**非台灣健保接續藥物給付保證**。

**Romosozumab**：台灣製造商列明高度骨折風險停經後婦女；Endocrine Society 指引偏向 very-high-risk。台灣中文仿單副本為2020版，一年內心肌梗塞／中風不可用；補充即使超過一年仍須評估心血管風險，沒有寫「滿一年即可用」。最新 TFDA 仿單入口可定位，但本次未能讀取其最新版全文；其他院所顯示2026年曾更新仿單，故**最新核准仿單逐項比對仍為最終臨床審閱待辦**，不可宣稱已核實完整最新台灣仿單。沒有把歐盟／澳洲較嚴格禁忌直接稱為台灣規定。

**OSTA**：採傳統整數版本 `trunc((kg − age) / 5)`，即去掉小數朝零，不使用 `floor` 或四捨五入。文獻實作存在保留小數等版本，本網站明定採哪一版；原始研究摘要支持亞洲停經後女性與篩檢用途，計分規則另以原始臨床研究方法段交叉核對。−1與−4均中度，−4.8取−4，−5高風險。50歲是網站服務範圍，120歲、300kg為防誤輸上限，**不是研究驗證界限**。非典型族群不應據低風險結果免除評估。OSTA 不等於台灣另開發的 OSTAi，也不等於 FRAX 骨折機率。

**FRAX**：舊 Sheffield 網址實際轉到 FRAXplus 官方首頁，故修正的是入口與說明，而非宣稱原網站漏放。改為官方繁中工具入口，明示另選台灣模型。官方頁部分由 JavaScript 載入；本次確認入口和文件，未宣稱已驗證外站每個互動欄位／試算結果。年齡40–90、股骨頸限定、臨床風險低估情境；已治療者「完全不能用」不符合官方 FAQ，應說不可監測療效，可由醫師於特定決策情境使用。未將美國20%／3%門檻硬套成台灣健保資格。

**DXA**：區分診斷、風險與給付。T = −1正常，T = −2.5骨鬆；停經前女性／50歲以下男性優先 Z，Z ≤ −2低於年齡預期，非單一數字診斷。有效中央DXA部位、排除局部干擾、追蹤需考量 LSC；不讓病人從任何一節椎骨選最低值，亦不以腳跟QUS代替DXA。

## 可追溯來源

全部於2026/10/11查核；動態網站可能後續改版。

1. **S1 健保署（正式規範）**：[彙編入口](https://www.nhi.gov.tw/ch/cp-13108-67ddf-2508-1.html)、[2026/09/22 PDF，第91–92頁](https://www.nhi.gov.tw/ch/dl-100717-e456d68a6e9d4085b4ab7a2c7e37296a-1.pdf)。[5.6.1 9/1生效公告](https://www.nhi.gov.tw/ch/cp-20303-5d291-3258-1.html)、[附件2](https://www.nhi.gov.tw/ch/dl-100870-02de995b56284976898f8157bfae45c9-1.pdf)；[5.6.3 8/1生效公告](https://www.nhi.gov.tw/ch/cp-20270-cdbd9-3258-1.html)、[附件](https://www.nhi.gov.tw/ch/dl-100507-4c553f9b0bcb41a585eeed4fec06b534-1.pdf)。部分PDF內嵌標題仍沿用舊會議名稱，版本以內容、生效日及公告附件關聯核對。
2. **S2 Endocrine Society（2019指引、2020更新）**：[建議3.3、4.2、A.1–A.2等](https://www.endocrine.org/clinical-practice-guidelines/osteoporosis-in-postmenopausal-women)。
3. **S3 NOGG 2024（指引）**：[第6節：口服藥服法、denosumab 接續、anabolic 後續](https://www.nogg.org.uk/full-guideline/section-6-pharmacological-treatment-options)。非台灣仿單或健保規定。
4. **S4 ISCD 2023 Adult Official Positions**：[診斷、T/Z值、檢查對象、追蹤](https://iscd.org/official-positions-2023/)。
5. **S5 FRAX官方文件**：[FAQ](https://www.fraxplus.org/faq)、[繁中工具](https://www.fraxplus.org/zh-Hant/calculation-tool/)、[年齡輸入範圍文件](https://www.fraxplus.org/documentation/csv/ALL)。
6. **S6 Koh et al., Osteoporos Int. 2001;12:699–705**：[PMID 11580084](https://pubmed.ncbi.nlm.nih.gov/11580084/)，DOI 10.1007/s001980170070；OSTA 開發研究（摘要可讀，全文未完整取得）。
7. **S7 原始研究方法交叉核對**：[2016台灣創傷病人研究，IJERPH 13:995](https://www.mdpi.com/1660-4601/13/10/995)，搜尋索引方法段明列去掉小數及三段分級；[2017 BFH-OSTM研究](https://doi.org/10.2147/CIA.S140553)，方法例子 −0.6 → 0。部分出版社全文抓取失敗，未將其稱為全文重現驗證；計分未使用此類創傷／男性研究重新校準女性分級。
8. **S8 Romosozumab 台灣藥品資料**：[台灣安進（核准適應症與TFDA入口）](https://www.amgen.com.tw/about/our-medicine)；[TFDA 衛部菌疫輸字第001137號](https://mcp.fda.gov.tw/im_detail_1/衛部菌疫輸字第001137號)；[中山附醫保存的中文仿單副本，Jul 2020、TWEVEPI01](https://www.csh.org.tw/into/pharm/DESC/EVEN.pdf)。最新版全文尚待比對，勿將網站抓取日期當仿單核准更新日。
9. **S9 FDA 2024/01/19安全通報**：[Denosumab在晚期CKD／洗腎之嚴重低血鈣](https://www.fda.gov/media/175509/download)。作為藥物安全證據，不稱為台灣新增黑框規定。
10. **S10 NOGG 2024**：[第5節：營養運動防跌](https://www.nogg.org.uk/full-guideline/section-5-non-pharmacological-management-osteoporosis)、[第8節：脊椎骨折與神經症狀](https://www.nogg.org.uk/full-guideline/section-8-management-symptomatic-osteoporotic-vertebral-fractures)。
11. **S11 BHOF 官方臨床衛教**：[Healthcare Provider Diagnosis & Treatment Factsheet，第5頁](https://www.bonehealthandosteoporosis.org/wp-content/uploads/BHOF-HBHC_Houston-FINAL.pdf)。只採骨折本身需評估治療的原則；未移植美國FRAX治療門檻。

## 最終臨床審閱／發布前仍需完成

- [ ] 逐頁由負責醫師確認文字；記錄姓名與實際審閱日期後再決定是否解除警示。
- [ ] 比對最新台灣 romosozumab 正式仿單，確認2026更新是否改動相關安全文字。
- [ ] 確認 romosozumab 第1(2)條「無法耐受」路徑、24個月與新診斷骨折之個案適用；必要時向健保署確認，不以網頁取代申報審查。
- [ ] 確認各院實際使用的 alendronate 品項、仿單及健保碼；本PR不自動判定個案給付。
- [ ] 確認 OSTA 整數版與本網站族群限制，並以臨床範例複核。
- [ ] 實際手機與A4列印閱讀確認；現有多頁列印不是門診單張A4成品，單頁版另案設計。

## 驗證

- `node --test tests/self-check.test.cjs`：通過4組測試，涵蓋12筆計分／分級、12筆無效／不適用輸入、動態清除舊結果，以及FAQ列印展開與狀態還原。
- `git diff --check`：通過。
- 七頁HTML標籤配對、ID唯一性、內部連結與本地資產路徑、待審閱文字：通過。兩支修改的JavaScript語法檢查：通過。
- Chromium未預裝，瀏覽器下載取得的檔案無法解壓，故未完成瀏覽器視覺／實際PDF列印驗證。列印事件邏輯的測試通過不代表完成版面驗收。
- 本次不更動部署流程，不合併 main，不移除待審閱標示。
