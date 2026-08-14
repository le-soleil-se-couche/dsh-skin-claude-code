# dsh-skin-claude-code

完美复刻 Claude Code 皮肤，纪念我的 Vibe Coding 白月光。

尽管 Anthropic 非常非常的不做人，尽管它封了我4个号，但是我仍然忘不掉去年年底的某一天打开 Claude Code 的那种震撼感。一个新的时代，借由它向我徐徐铺开。

致敬最不会营销、最清白、最懂安全、最尊重版权、最不会蒸馏、最严于律己宽于待人、最喜欢给用户发福利、最不爱定制榜单、最不喜欢把模型降智给用户限流、最便宜、最喜欢人工维护、最不会全程让AI工作然后出岔子只会甩锅、最不会侵犯用户隐私然后倒打一耙限制蒸馏、最喜欢修bug然后补偿用户损失、最见的别人家好、最喜欢公平竞争、最讨厌装神弄鬼的 Anthropic！

## 展示

**具体配置：**

陶土橙 **#DA7756**

奶油纸面 **#F5F3EE**

暖黑正文 **#1D1B16**

UI 字体 **思源宋体 VF**

代码字体 **SF Mono**

配终端窗口式标题栏，支持亮/暗双模式。

![Codex 配置](docs/codex-config.png)

界面效果：

![dsh-skin-claude-code](preview/light.png)

## 安装

    dsh plugin --profile web add https://github.com/le-soleil-se-couche/dsh-skin-claude-code
    dsh web

启用后刷新页面即生效；皮肤互斥与切换由 dsh-web-ui 全家桶的 scripts/dsh-skin 管理，
或直接编辑 ~/.dsh/cordis.patch.yml。

## 开发

    npm install
    npm test
    npm run build

皮肤只依赖官方 NPM SDK（@deepseek-ai/cordis），不修改 DSH 源码；样式作用域限定在
body[data-dsh-claude-code]（暗色变体 body[data-dsh-claude-code][data-ds-dark-theme]），
apply() 的全部写入在 dispose 时完整收回。
