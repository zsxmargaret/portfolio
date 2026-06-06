# Portfolio Roadmap — Margaret Zuo
_最后更新：2026-05-26_

---

## 一、当前网站结构快照

```
margaretzuo.com (index.html)
│
├── Nav
│   ├── About
│   ├── Skills
│   ├── Work
│   ├── Design & Production   ← 新增，尚未组装完成
│   └── Contact
│
├── Hero
│   └── 定位：Digital Marketer · Content · Social · Events
│       ⚠️ 待更新为 Cultural Strategist 定位
│
├── About
│   └── 文字 + 9 个能力 tag
│
├── Skills（3张卡）
│   ├── Content Marketing
│   ├── Social Media
│   └── Event Marketing
│
├── Work（7 个 case）
│   ├── ✅ ASU Alumni China — Content Ecosystem   → asu.html（已完成）
│   ├── ⚠️ W. P. Carey — Business School Editorial  → wpc.html（占位，无内容）
│   ├── 🔲 Email Newsletter Revamp（无图，无页面）
│   ├── 🔲 Annual Alumni Gala（无图，无页面）
│   ├── 🔲 Speaker Series（无图，无页面）
│   ├── 🔲 Influencer Partnership Program（无图，无页面）
│   └── 🔲 Thought Leadership Blog（无图，无页面）
│
├── Design & Production
│   ├── ⚠️ Case 01 — ASU Alumni: Objects of Belonging（preview-asu.html 已确认，待组装）
│   └── ⚠️ Case 02 — Buick: Year of the Rabbit（preview-buick.html 已确认，待组装）
│
└── Contact
    └── ⚠️ email 是占位（hello@margaretzuo.com），LinkedIn/Resume 未接真实链接
```

---

## 二、内容资产清单

### 已有图片

| 路径 | 内容 | 状态 |
|------|------|------|
| `assets/images/work/asu/` | ASU 案例配图 | ✅ 已用于 asu.html |
| `assets/images/work/wpc/` | WPC 案例配图（happy-hour-cover.png 等）| ✅ 有图，HTML 空 |
| `assets/images/design/asu-swags/` | 5 件周边产品（cup, tote, tshirt, blanket, light）| ✅ 已确认，待组装 |
| `assets/images/design/buick-rabbit-cropped/` | 53 张兔年海报（rabbit-01~53.png）| ✅ 已确认，待组装 |
| `assets/images/design/buick-rabbit/` | 原始兔年海报（旧版，未裁）| 旧版备份 |
| `assets/images/headshot/` | 个人头像 | 待用于 About/Hero 区域 |

### 已有独立页面

| 文件 | 状态 |
|------|------|
| `asu.html` + `asu.css` | ✅ 完成，已链接 |
| `wpc.html` + `wpc.css` | ⚠️ 占位，无实际内容 |
| `preview-asu.html` | ✅ 模块预览，待组装进 index.html |
| `preview-buick.html` | ✅ 模块预览，待组装进 index.html |

---

## 三、待决策：导航结构方案

目前 nav 有 5 个一级菜单。以下是几种可能的归类方式，供选择。

---

### 方案 A — 维持现有（Work ≠ Design & Production）

```
About · Skills · Work · Design & Production · Contact
```

**逻辑**：按媒介区分 — Work = 策略+内容+活动；Design & Production = 设计+实物+交互  
**适合**：想明确展示「我不只是文字/活动，也能做设计+生产」的双面能力  
**风险**：两个作品集栏目可能让访客困惑

---

### 方案 B — 合并为单一 Work，内部分类

```
About · Work · Contact
```

Work section 内部用 category tag 区分：

| Tag | 包含内容 |
|-----|---------|
| Strategy & Content | ASU Content Ecosystem, WPC Editorial |
| Campaign & Interactive | Buick Year of the Rabbit |
| Brand & Physical | ASU Swag Objects of Belonging |
| Events | Gala, Speaker Series |

**逻辑**：极简导航，作品按 tag 过滤  
**适合**：想让作品之间的联系更自然；访客可以按兴趣筛选  
**风险**：需要给所有 Work card 加 filter 功能

---

### 方案 C — 三栏结构（Strategy / Design / Events）

```
About · Strategy · Design · Events · Contact
```

| 栏目 | 内容 |
|------|------|
| Strategy | ASU Content Ecosystem, WPC Editorial, Newsletter, Influencer |
| Design | Buick Rabbit, ASU Swag, Thought Leadership Blog |
| Events | Alumni Gala, Speaker Series |

**逻辑**：按服务/能力类型分栏，方便甲方快速定位  
**适合**：作为 freelancer 接项目；访客按需求找对应能力  
**风险**：三个内容栏目信息量大，页面可能偏长

---

### 方案 D — 两栏（Work + Making）

```
About · Work · Making · Contact
```

| 栏目 | 内容 |
|------|------|
| Work | 所有策略/内容/活动 case（ASU, WPC, 其余 placeholder） |
| Making | 设计+生产（Buick, ASU Swag，以后可加更多） |

**逻辑**：「Work」= 我为品牌做的事；「Making」= 我亲手制作的东西  
**适合**：突出「从 idea 到实物」这个差异化叙事  
**风险**：Making 目前只有 2 个 case，待扩充

---

## 四、未完成任务（按优先级）

### P0 — 最先做
- [ ] 将 `preview-asu.html` 组装进 `index.html` Design & Production section
- [ ] 将 `preview-buick.html` 组装进 `index.html` Design & Production section
- [ ] 清理 index.html 里旧的 `dp-case` 代码
- [ ] 把 accordion CSS + JS 从 preview-buick.html 迁移进 styles.css / script.js

### P1 — 重要
- [ ] **Hero 定位升级**：将 "Digital Marketer · Content · Social · Events" 改为 Cultural Strategist 定位
- [ ] **配色更新**：accent `#7c3aed` violet → muted gold（参考 `#C49B5A`）
- [ ] **WPC case study**：填充 `wpc.html` 内容（图片资产已有）
- [ ] **Design & Production section 整体样式**：section header、间距、与 Work 衔接

### P2 — 待定
- [ ] Work section 中 5 个无图 placeholder card → 决定保留/删除/替换真实内容
- [ ] 考虑 coaster（swag-03.jpeg）是否值得加一个更好的照片展示
- [ ] 头像照片是否加入 About section
- [ ] Contact section 接入真实邮件地址和 LinkedIn URL
- [ ] 是否需要移动端优化
- [ ] Resume PDF 文件

---

## 五、总结建议

目前最清晰的路径是 **方案 A 或方案 D**：

- 如果你想先快速完成网站再考虑结构，**方案 A**（维持现有 Work + Design & Production）阻力最小，P0 任务完成就能上线。
- 如果你认同「Making」是核心差异化叙事，**方案 D**（Work + Making）最能体现你从策略到实物的完整能力，只需要改一个 nav label。

方案 B/C 需要新增 filter 交互或拆分多个 section，工程量更大，适合内容更丰富后再重构。

---

_下次开始前：读本文件 + `session-2026-05-26.md` + `project-context.md`_
