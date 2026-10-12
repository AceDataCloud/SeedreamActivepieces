# Seedream Activepieces Piece

本 Piece 通过 Ace Data Cloud 提供 Seedream 动作。Activepieces 0.92.2 及以上版本可由管理员在 **Catalogue → Pieces → Install Piece → NPM Registry** 安装 `@acedatacloud/piece-seedream@0.1.0`。npm 发布不等于进入 Activepieces 官方共享目录。

创建 Ace Data Cloud 连接时只填写 API Key，不带 `Bearer `；先确认服务权限、余额和[当前价格](https://platform.acedata.cloud/models)。[无密钥样例](examples/quickstart.json)中的连接为空，运行前须补全输入。生成动作不自动重试。

异步创建只表示任务已受理。保存 `task_id`，用查询动作反复读取同一个任务；仅终态成功后使用 `media_urls`。超时后先查看[请求记录](https://platform.acedata.cloud/console/usages)，避免重复付费。删除/归档需显式确认。

动作列表及公开 API 映射见 [English README](README.md)。源契约参照 [Dify 服务插件](https://github.com/AceDataCloud/SeedreamDify) `f47ac6b322eed59a3bb3ef924ea9fa82ea120ad4`；本 Piece 的源码、npm、实例安装和真实调用分别验收。
