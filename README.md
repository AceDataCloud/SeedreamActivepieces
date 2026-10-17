# Seedream for Activepieces

Use Seedream through Ace Data Cloud in a self-hosted Activepieces workflow. [中文指南](README.zh-CN.md)

**Distribution:** Install `@acedatacloud/piece-seedream@0.1.0` as a custom Piece from NPM Registry in Activepieces 0.92.2 or newer. npm publication does not make this Piece searchable in the shared Activepieces catalog.

## Setup

1. In **Platform Admin → Catalogue → Pieces → Install Piece → NPM Registry**, enter `@acedatacloud/piece-seedream` and version `0.1.0`.
2. Register or sign in at [Ace Data Cloud Applications](https://platform.acedata.cloud/console/applications?utm_source=opensource&utm_medium=referral&utm_campaign=evergreen&utm_content=seedream_activepieces_readme_api_key). If you have no General application, choose **Initialize General Application**. Open a General application or an application with **Seedream** access. A General key can access the services your account is entitled to use; a service-specific key is limited to that service.
3. Use the application's copy button, or choose **Manage Keys → Create** to create a separate key named `Activepieces Seedream`. Set expiry and usage limits as needed. If you restrict **Allowed APIs**, include both `/seedream/images` and `/seedream/tasks`, then copy the key.
4. Create an Activepieces connection and enter only the API key, without `Bearer `. A `platform-...` management token is not a generation API key. Keep the key in the connection, never in a flow export. Check [current pricing](https://platform.acedata.cloud/models?utm_source=opensource&utm_medium=referral&utm_campaign=evergreen&utm_content=seedream_activepieces_readme_pricing) and balance before generation.
5. Import [the credential-free quickstart](examples/quickstart.json). It selects **Seedream Generate Image**, uses a text prompt with one non-sequential generation, and maps the returned task ID into **Seedream Retrieve Task**. Both connections are empty; select your own connection for each action before running. Paid creation retries are disabled. Run creation once; if the result is pending, repeat only the lookup with that same task ID. Image editing and decomposition need reference images and are separate actions.

## Actions

| Action | API |
| --- | --- |
| `seedream_decompose_image` | `POST /seedream/images` |
| `seedream_edit_image` | `POST /seedream/images` |
| `seedream_generate_image` | `POST /seedream/images` |
| `seedream_task_retrieve` | `POST /seedream/tasks` |
| `seedream_tasks_retrieve_batch` | `POST /seedream/tasks` |

The actions above map to the published API operations used by the [Ace Data Cloud Dify plugin](https://github.com/AceDataCloud/SeedreamDify), source revision `f47ac6b322eed59a3bb3ef924ea9fa82ea120ad4`. Parameter forms and request validation use that contract snapshot. The Dify source is a mapping reference; this package has its own release and installation state.

Async submission returns a `task_id` when accepted. Use the task retrieval action with that **same ID** until `status=succeeded`, `partial`, or `failed`; pending previews are not final media. A timeout does not prove the request was rejected. Inspect [request history](https://platform.acedata.cloud/console/usages?utm_source=opensource&utm_medium=referral&utm_campaign=evergreen&utm_content=seedream_activepieces_readme_request_history) before submitting again. No paid action is automatically retried. Delete/archive operations require **Confirm**.

Only your API key and selected inputs are sent to `https://api.acedata.cloud`. Results remove credential and internal routing fields. Do not put keys in exported flows. The Piece does not fetch reference URLs itself. API billing is recorded in Credits in your Ace Data Cloud account; workflow runs are not a billing ledger.

## Development

```sh
npm ci --legacy-peer-deps --ignore-scripts
npm test
npm pack --dry-run
```

Source: https://github.com/AceDataCloud/SeedreamActivepieces · Issues: https://github.com/AceDataCloud/SeedreamActivepieces/issues · Contact: dev@acedata.cloud · License: MIT
