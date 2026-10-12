# Seedream for Activepieces

Use Seedream through Ace Data Cloud in a self-hosted Activepieces workflow. [中文指南](README.zh-CN.md)

**Distribution:** Install `@acedatacloud/piece-seedream@0.1.0` as a custom Piece from NPM Registry in Activepieces 0.92.2 or newer. npm publication does not make this Piece searchable in the shared Activepieces catalog.

## Setup

1. In **Platform Admin → Catalogue → Pieces → Install Piece → NPM Registry**, enter `@acedatacloud/piece-seedream` and version `0.1.0`.
2. Create an Ace Data Cloud connection with a key authorized for this service. Enter the key without `Bearer `. Check [current pricing](https://platform.acedata.cloud/models) before generation.
3. Import [the credential-free quickstart](examples/quickstart.json) if useful. Both action connections are empty; fill required inputs before running. Paid creation actions have retries disabled.

## Actions

| Action | API |
| --- | --- |
| `seedream_decompose_image` | `POST /seedream/images` |
| `seedream_edit_image` | `POST /seedream/images` |
| `seedream_generate_image` | `POST /seedream/images` |
| `seedream_task_retrieve` | `POST /seedream/tasks` |
| `seedream_tasks_retrieve_batch` | `POST /seedream/tasks` |

The actions above map to the published API operations used by the [Ace Data Cloud Dify plugin](https://github.com/AceDataCloud/SeedreamDify), source revision `f47ac6b322eed59a3bb3ef924ea9fa82ea120ad4`. Parameter forms and request validation use that contract snapshot. The Dify source is a mapping reference; this package has its own release and installation state.

Async submission returns a `task_id` when accepted. Use the task retrieval action with that **same ID** until `status=succeeded`, `partial`, or `failed`; pending previews are not final media. A timeout does not prove the request was rejected. Inspect [request history](https://platform.acedata.cloud/console/usages) before submitting again. No paid action is automatically retried. Delete/archive operations require **Confirm**.

Only your API key and selected inputs are sent to `https://api.acedata.cloud`. Results remove credential and internal routing fields. Do not put keys in exported flows. The Piece does not fetch reference URLs itself. API billing is recorded in Credits in your Ace Data Cloud account; workflow runs are not a billing ledger.

## Development

```sh
npm ci --legacy-peer-deps --ignore-scripts
npm test
npm pack --dry-run
```

Source: https://github.com/AceDataCloud/SeedreamActivepieces · Issues: https://github.com/AceDataCloud/SeedreamActivepieces/issues · Contact: dev@acedata.cloud · License: MIT
