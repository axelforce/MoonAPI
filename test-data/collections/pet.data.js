const jacksonCat = {
  id: 713,
  category: {
    id: 1,
    name: "cat"
  },
  name: "Jackson",
  photoUrls: [
    "http://image/cat.jpg"
  ],
  tags: [
    {
      id: 25,
      name: "black"
    }
  ],
  status: "available"
}

const petSchema = {
  "title": "Root",
  "type": "object",
  "properties": {
    "id": {
      "$id": "#root/id",
      "title": "Id",
      "type": "integer",
      "default": 0
    },
    "category": {
      "$id": "#root/category",
      "title": "Category",
      "type": "object",
      "properties": {
        "id": {
          "$id": "#root/category/id",
          "title": "Id",
          "type": "integer",
          "default": 0
        },
        "name": {
          "$id": "#root/category/name",
          "title": "Name",
          "type": "string",
          "default": "",
          "pattern": "^.*$"
        }
      }
    }
    ,
    "name": {
      "$id": "#root/name",
      "title": "Name",
      "type": "string",
      "default": "",
      "pattern": "^.*$"
    },
    "photoUrls": {
      "$id": "#root/photoUrls",
      "title": "Photourls",
      "type": "array",
      "default": [],
      "items":{
        "$id": "#root/photoUrls/items",
        "title": "Items",
        "type": "string",
        "default": "",
        "pattern": "^.*$"
      }
    },
    "tags": {
      "$id": "#root/tags",
      "title": "Tags",
      "type": "array",
      "default": [],
      "items":{
        "$id": "#root/tags/items",
        "title": "Items",
        "type": "object",
        "properties": {
          "id": {
            "$id": "#root/tags/items/id",
            "title": "Id",
            "type": "integer",
            "default": 0
          },
          "name": {
            "$id": "#root/tags/items/name",
            "title": "Name",
            "type": "string",
            "default": "",
            "pattern": "^.*$"
          }
        }
      }
    },
    "status": {
      "$id": "#root/status",
      "title": "Status",
      "type": "string",
      "default": "",
      "pattern": "^.*$"
    }
  }
}
module.exports = {
  jacksonCat,
  petSchema
}