# 1AniAPI

1AniAPI is a powerful API that allows users to fetch Direct Download Links (DDL) from gogoanime using the Consumet API. It also provides seamless integration between AniList and MyAnimeList (MAL), allowing users to convert AniList IDs to MAL IDs and vice versa.

## Endpoints

### AniList to MAL
> AniList API is limited, Recommended to save any requested data to a database.
- **Endpoint:** `/api/al-mal/[id]`
- **Method:** GET
- **Description:** Converts an AniList ID to a MAL ID.
- **Request Parameter:**
  - `id`: The AniList ID to be converted.

#### AL to MAL Example
Example: `/api/al-mal/170942` - AniList ID for Blue Box
**Response:**
```
{
  "malId": 57181,
  "title": {
    "romaji": "Ao no Hako",
    "english": "Blue Box"
  },
  "siteUrl": "https://anilist.co/anime/170942",
  "malLink": "https://myanimelist.net/anime/57181"
}
```

### MAL to AniList
> AniList API is limited, Recommended to save any requested data to a database.
- **Endpoint:** `/api/mal-al/[id]`
- **Method:** GET
- **Description:** Converts an MAL ID to a AniList ID.
- **Request Parameter:**
  - `id`: The MAL ID to be converted.

#### MAL to AL Example
Example: `/api/al-mal/57181` - MAL ID for Blue Box
**Response:**
```
{
  "aniListId": 170942,
  "title": {
    "romaji": "Ao no Hako",
    "english": "Blue Box"
  },
  "siteUrl": "https://anilist.co/anime/170942"
}
```

### Gogoanime DDL
> For unlimited download, encode the download url and put it in a proxy.
- **Endpoint:** `/api/dl/[id]`
- **Method:** GET
- **Description:** Get DDL of a Gogoanime episode.
- **Request Parameter:**
  - `id`: Episode ID.

#### Example
`/api/dl/ao-no-hako-episode-1` - Gogoanime ID for Blue Box Episode 1
**Response:**
```
[
  {
    "source": "Download\n                        (360P - mp4)",
    "link": "https://ggredi.info/download.php?url=aHR0cHM6LyAdrefsdsdfwerFrefdsfrersfdsrfer363435349AdeqwrwedffryretgsdFrsftrsvfsfsrtZHhwZWhmcW1vLmFuZjU5OC5jb20vdXNlcjEzNDIvNWM4NDcwN2Q3ODM5M2Y2OGE2YjdjYzY3MTZhMTk4Y2UvRVAuMS52MC4xNzI3OTczMDA1LjM2MHAubXA0P3Rva2VuPWE2QUlrQTMxRVhMcDIxeDhNZzl5c0EmZXhwaXJlcz0xNzMyNDQ4MDIzJmlkPTIzNDIwOA=="
  },
  {
    "source": "Download\n                        (480P - mp4)",
    "link": "https://ggredi.info/download.php?url=aHR0cHM6LyAdeqwrwedffryretgsdFrsftrsvfsfsr9tZHhwZWAawehyfcghysfdsDGDYdgdsfsdfwstdgdsgterthmcW1vLmFuZjU5OC5jb20vdXNlcjEzNDIvNWM4NDcwN2Q3ODM5M2Y2OGE2YjdjYzY3MTZhMTk4Y2UvRVAuMS52MC4xNzI3OTczMDA1LjQ4MHAubXA0P3Rva2VuPWRoNFpvVHNIRmUxX19weFpxaGZZbHcmZXhwaXJlcz0xNzMyNDQ4MDIzJmlkPTIzNDIwOA=="
  },
  {
    "source": "Download\n                        (720P - mp4)",
    "link": "https://ggredi.info/download.php?url=aHR0cHM6LyAawehyfcghysfdsDGDYdgdsfsdfwstdgdsgtert9AdrefsdsdfwerFrefdsfrersfdsrfer36343534tZHhwZWhmcW1vLmFuZjU5OC5jb20vdXNlcjEzNDIvNWM4NDcwN2Q3ODM5M2Y2OGE2YjdjYzY3MTZhMTk4Y2UvRVAuMS52MC4xNzI3OTczMDA1LjcyMHAubXA0P3Rva2VuPVhGOXkwV2JVcXpnVkpfVWJCbVQ3eEEmZXhwaXJlcz0xNzMyNDQ4MDIzJmlkPTIzNDIwOA=="
  },
  {
    "source": "Download\n                        (1080P - mp4)",
    "link": "https://ggredi.info/download.php?url=aHR0cHM6LyAdeqwrwedffryretgsdFrsftrsvfsfsr9tZHhwZWAdrefsdsdfwerFrefdsfrersfdsrfer36343534hmcW1vLmFuZjU5OC5jb20vdXNlcjEzNDIvNWM4NDcwN2Q3ODM5M2Y2OGE2YjdjYzY3MTZhMTk4Y2UvRVAuMS52MC4xNzI3OTczMDA1LjEwODBwLm1wND90b2tlbj1JYmZRTU85M0V6SHpXb0t5OG13NlpnJmV4cGlyZXM9MTczMjQ0ODAyMyZpZD0yMzQyMDg="
  }
]
```

> Special Thanks to:
> - [AniList API](https://anilist.co)
> - [Consumet API](https://consumet.org)
>
