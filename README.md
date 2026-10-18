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

### 如何修改日本行程

每天只改一个文件，例如 `src/content/days/japan-2026/2026-11-07.md`。文件分成两部分：

- 开头 `---` 之间是少量索引信息：日期、标题、地区（`stage`）、标签、`quick.route` 简版路线、`quick.fixed` 固定时间、`quick.note` 当天判断，以及 `mapPoints` 地图坐标。改动这些字段会更新总览和每日简版。
- `---` 后面是详细攻略，直接用普通 Markdown 修改。建议用 `## 时间安排`、`## 当天判断`、`## 列车与交通班次`、`## 景点与入场`、`## 摄影机位`、`## 日出与日落`、`## 餐饮`、`## 现场操作与资料` 组织内容；没有内容的章节可以省略。
- 地图仅从 `mapPoints` 读取地点和坐标。增删景点时，记得同步调整地图点。时间、餐厅、摄影说明等详细文字只写在 Markdown 正文，避免两处维护。

例如：

```md
---
trip: japan-2026
order: 8
date: "2026-11-07"
weekday: 周六
stage: 京都
title: 西芳寺 → 岚山 → 奥嵯峨
tags: [西芳寺预约, 奥嵯峨]
quick:
  route: 西芳寺 → 岚山 → 奥嵯峨
  fixed: [西芳寺按预约邮件入场]
  note: 西芳寺摄影优先。
mapPoints:
  - name: 西芳寺
    lat: 34.9924
    lng: 135.6841
---

## 时间安排

| 时间 | 行程 |
| --- | --- |
| 上午 | 西芳寺预约入场。 |

## 摄影机位

### 西芳寺苔庭

阴天拍苔藓与水面。[Google 地图](https://www.google.com/maps/search/?api=1&query=Saihoji+Kyoto)
```

全程交通与预订入口、行前待办、预算等放在 `src/content/trips/japan-2026.md`。斯里兰卡的完整说明也保存在每日 Markdown 正文中。

仓库旧版根页面是迁移留档，不再作为新站的数据源。日后直接编辑 Markdown 文件，再运行构建即可。

### 日本旅行插画地图

日本行程页的「插画地图」包含熊野古道、奈良、京都、大阪四张地图。每张都有独立查看页，支持缩放、适合宽度、切换地图，以及 PNG / PDF 下载；无 JavaScript 时仍可阅读地图、打开 SVG 原图和下载。

- `src/data/illustratedMaps.ts`：四张地图的标题、覆盖日期、路线与链接。
- `src/components/IllustratedMaps.astro`：日本行程页的地图卡片。
- `src/pages/trips/japan-2026/maps/[map].astro`：独立 SVG 查看器。
- `public/assets/maps/japan-2026/`：可直接部署的 SVG、4200 × 7050 PNG、单页长幅 PDF 和 WebP 预览。SVG 内嵌中文字体子集；PDF 使用高清图像，非 A4 分页。

地图是 2026-10-18 的行程快照，修改每日 Markdown 不会自动重绘插画。当前制图源文件及导出说明保存在同级工作区的 `../旅行地图/japan-2026/`，完成更新后重新生成并复制到上述资源目录。网站无需安装制图依赖。所有内部链接均遵循 Astro `base`，适配 GitHub Pages 的 `/travel` 前缀。

## 本地运行

```sh
npm ci
npm run dev
npm run build
npm run preview
```

构建结果为 `dist/`。GitHub Actions 在每次推送 `main` 后执行 `npm ci` 和 `npm run build`，再把 `dist/` 发布到 Pages。仓库 Settings → Pages 的 Source 必须设为 **GitHub Actions**。

旧链接 `/?trip=japan` 会跳转到 `/trips/japan-2026/`；`/views/sri-lanka.html` 会跳转到 `/trips/sri-lanka-2026/`。铁路、营业时间和预约规则仍以运营方出发前的公告为准。
