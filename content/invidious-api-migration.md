---
title: 'Invidious api migration'
description: 'Check the progress on the migration from invidious here'
---

| Invidious endpoint | Status | Viewtube equivalent | Note |
|---|---|---|---|
| /stats | :warning: Partial | /status | Only shows version, country and author |
| /videos | :heavy_check_mark: Full | /videos | Full reimplementation of the video api |
| /annotations | :x: Not implemented | _tbd_ |  |
| /comments | :heavy_check_mark: Full | /comments | Full reimplementation of comments |
| /captions | :x: Not implemented | _tbd_ |  |
| /trending | :x: Not implemented | _tbd_ |  |
| /top | :x: Not implemented | _tbd_ |  |
| /popular | :heavy_check_mark: Full | /popular | Gets fetched once a day from invidious |
| /channels | :heavy_check_mark: Full | /channels | Full implementation of channel frontpage [Channels API #120](https://github.com/ViewTube/viewtube-vue/pull/120) |
| /channels/videos | :x: Not implemented | _tbd_ |  |
| /channels/playlists | :x: Not implemented | _tbd_ |  |
| /channels/comments | :x: Not implemented | _tbd_ |  |
| /channels/search | :x: Not implemented | _tbd_ |  |
| /search/suggestions | :white_check_mark: Part of /search |  |  |
| /search | :heavy_check_mark: Full | /search | Full search implementation, including suggestions and channels |
| /playlists | :heavy_check_mark: Full | /playlists | Full playlists implementation |
| /mixes | :x: Not implemented | _tbd_ |  |