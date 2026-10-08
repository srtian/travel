# 旅途手帖

多目的地旅行攻略网站。首页和攻略页由 Astro 在构建时读取 Markdown 目录生成，部署到 GitHub Pages。

## 编辑攻略

```text
src/content/trips/japan-2026.md        # 目的地总览与元数据
src/content/days/japan-2026/*.md        # 每日行程
src/content/trips/sri-lanka-2026.md
src/content/days/sri-lanka-2026/*.md
public/assets/                         # 本地图片
```

新增目的地：在 `trips/` 新建含 `slug`、标题、日期、封面、摘要和排序的 Markdown，再在 `days/<slug>/` 新建每日 Markdown。首页和详情路由会在构建时自动生成。字段由 `src/content.config.ts` 校验；页面布局由 `src/pages/` 和 `src/components/` 统一控制。

日本每日文件的 frontmatter 包含 `quick`、`planItems`、`practical`、`photoSpots`、`dining` 等结构化信息，供地图与卡片使用；正文可写自由说明。斯里兰卡的完整说明目前保存在 Markdown 正文中。

仓库旧版根页面是迁移留档，不再作为新站的数据源。日后直接编辑 Markdown 文件，再运行构建即可。

## 本地运行

```sh
npm ci
npm run dev
npm run build
npm run preview
```

构建结果为 `dist/`。GitHub Actions 在每次推送 `main` 后执行 `npm ci` 和 `npm run build`，再把 `dist/` 发布到 Pages。仓库 Settings → Pages 的 Source 必须设为 **GitHub Actions**。

旧链接 `/?trip=japan` 会跳转到 `/trips/japan-2026/`；`/views/sri-lanka.html` 会跳转到 `/trips/sri-lanka-2026/`。铁路、营业时间和预约规则仍以运营方出发前的公告为准。
