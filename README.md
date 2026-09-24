# Eric 的個人介紹網頁

一個 Apple 風格的極簡個人網頁：大量留白、巨大的粗體標題、毛玻璃導航欄，以及向下捲動時「淡入並微微上浮」的動畫。
只用 HTML、CSS 和少量 JavaScript 寫成，不需要安裝任何東西；在電腦和手機上都能正常瀏覽。

## 檔案說明

| 檔案 | 用途 |
| --- | --- |
| `index.html` | 網頁上的所有文字內容（要改文字就改這個檔案） |
| `style.css` | 視覺樣式：字體、配色、排版、動畫、手機版面 |
| `script.js` | 少量互動：捲動淡入、導航欄細線、首屏淡出 |
| `images/about-placeholder.svg` | 「關於我」區塊的灰階佔位圖（之後可以換成你的照片） |
| `images/favicon.svg` | 瀏覽器分頁上的小圖示 |

## 如何預覽

把整個資料夾下載到電腦後，直接雙擊 `index.html`，就會用瀏覽器打開。

## 常見修改

- **換成自己的照片**：把照片（例如 `me.jpg`）放進 `images` 資料夾，再打開 `index.html`，把 `images/about-placeholder.svg` 改成 `images/me.jpg`。直式（4:5）照片的效果最好。
- **設定 Email**：在 `index.html` 裡搜尋 `hello@example.com`，換成你的 Email 地址。
- **修改名字**：在 `index.html` 裡搜尋 `Eric`，換成你想顯示的名字。
- **調整顏色或字體**：打開 `style.css`，最上面的「設計變數」區塊集中了所有顏色、字體和圓角設定。

## 發佈成公開網址（GitHub Pages）

1. 到 GitHub 上的這個倉庫，點 **Settings → Pages**。
2. 在 **Build and deployment** 的 **Source** 選 **Deploy from a branch**。
3. **Branch** 選放有網頁檔案的分支（通常是 `main`），資料夾選 `/ (root)`，然後按 **Save**。
4. 等一至兩分鐘，網頁就會出現在：<https://eric17-dot.github.io/Eric1/>
