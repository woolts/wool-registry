# Wool Registry Protocol

Version 0

## registry

### HTTP Request

```
GET /packages
```

## namespace

Provides information on the requested namespace.

### HTTP Request

```
GET /packages/[namespace]
```

### Example

#### Request

```http
/packages/lsjroberts
```

#### Response

```http
{
  "name": "lsjroberts",
  "packages": [
    "lsjroberts/example"
  ]
}
```

## package

Provides information on the requested package.

### HTTP Request

```
GET /packages/[namespace]/[package]
```

### Examples

#### Latest version

##### Request

```http
/packages/lsjroberts/example
```

##### Response

```http
{
  "name": "lsjroberts/example",
  "version": "1.0.0",
  "dependencies": {
    "bob/package": {
      "version": "1.0.0 <= v < 2.0.0"
    }
  },
  "versions": [
    "0.1.0",
    "0.2.0",
    "1.0.0"
  ],
  "publishedDate" {
    "0.1.0": "...",
    "0.2.0": "...",
    "1.0.0": "..."
  }
}
```

#### Specific version

##### Request

```http
/packages/lsjroberts/example/0.2.0
```

##### Response

```http
{
  "name": "lsjroberts/example",
  "version": "0.2.0",
  "dependencies": {},
  "versions": [
    "0.1.0",
    "0.2.0",
    "1.0.0"
  ],
  "publishedDate" {
    "0.1.0": "...",
    "0.2.0": "...",
    "1.0.0": "..."
  }
}
```

#### Latest in version range

##### Request

```http
/packages/lsjroberts/example?range=1.0.0%20%3C%3D%20v%20%3C%202.0.0
```

##### Response

```http
{
  "name": "lsjroberts/example",
  "version": "1.0.0",
  "dependencies": {},
  "versions": [
    "0.1.0",
    "0.2.0",
    "1.0.0"
  ],
  "publishedDate" {
    "0.1.0": "...",
    "0.2.0": "...",
    "1.0.0": "..."
  }
}
```
