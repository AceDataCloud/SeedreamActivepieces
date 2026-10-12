// Snapshot of Ace Data Cloud's Dify plugin API mapping; source revision is documented in README.md.
export type EndpointSpec = {
  method: string; path: string; operation: string; schema: Record<string, unknown>;
  properties: Record<string, Record<string, unknown>>; parameters?: Array<{ name: string; in: string; required?: boolean; schema?: Record<string, unknown> }>;
  defaults?: Record<string, unknown>; fixed?: Record<string, unknown>; allow_empty?: string[]; query_actions?: string[];
  media_response?: boolean; selector?: Record<string, string>; selector_default?: string; read_only?: boolean;
  asynchronous?: boolean; destructive?: boolean;
};
export const serviceName = "Seedream";
export const taskPath = "/seedream/tasks";
export const endpoints: Record<string, EndpointSpec> = {
  "seedream_generate_image": {
    "method": "POST",
    "path": "/seedream/images",
    "operation": "generate",
    "schema": {
      "type": "object",
      "required": [
        "model"
      ],
      "properties": {
        "model": {
          "type": "string",
          "enum": [
            "doubao-seedream-5-0-pro-260628",
            "doubao-seedream-5-0-lite-260128",
            "doubao-seedream-4-0-250828",
            "doubao-seedream-4-5-251128"
          ]
        },
        "prompt": {
          "type": "string"
        },
        "image": {
          "oneOf": [
            {
              "type": "string"
            },
            {
              "type": "array",
              "items": {
                "type": "string"
              },
              "maxItems": 14
            }
          ]
        },
        "size": {
          "type": "string",
          "pattern": "^(1K|1\\.5K|2K|3K|4K|auto|[0-9]+x[0-9]+)$"
        },
        "sequential_image_generation": {
          "type": "string",
          "enum": [
            "auto",
            "disabled"
          ]
        },
        "sequential_image_generation_options": {
          "type": "object",
          "properties": {
            "max_images": {
              "type": "integer",
              "minimum": 1,
              "maximum": 15
            }
          }
        },
        "stream": {
          "type": "boolean"
        },
        "response_format": {
          "type": "string",
          "enum": [
            "url",
            "b64_json"
          ]
        },
        "watermark": {
          "type": "boolean"
        },
        "output_format": {
          "type": "string",
          "enum": [
            "jpeg",
            "png"
          ]
        },
        "tools": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "web_search"
                ]
              }
            }
          }
        },
        "optimize_prompt_options": {
          "type": "object",
          "properties": {
            "mode": {
              "type": "string",
              "enum": [
                "standard",
                "fast"
              ]
            }
          }
        },
        "callback_url": {
          "type": "string"
        },
        "async": {
          "type": "boolean"
        },
        "layer_decomposition": {
          "type": "boolean"
        },
        "background": {
          "type": "string",
          "enum": [
            "transparent",
            "opaque"
          ]
        }
      },
      "allOf": [
        {
          "oneOf": [
            {
              "required": [
                "image",
                "layer_decomposition"
              ],
              "properties": {
                "model": {
                  "enum": [
                    "doubao-seedream-5-0-pro-260628"
                  ]
                },
                "layer_decomposition": {
                  "enum": [
                    true
                  ]
                },
                "size": {
                  "type": "string",
                  "pattern": "^(auto|1K|1\\.5K|2K)$"
                }
              },
              "not": {
                "anyOf": [
                  {
                    "required": [
                      "sequential_image_generation"
                    ]
                  },
                  {
                    "required": [
                      "stream"
                    ]
                  },
                  {
                    "required": [
                      "tools"
                    ]
                  },
                  {
                    "required": [
                      "background"
                    ]
                  }
                ]
              }
            },
            {
              "required": [
                "prompt"
              ],
              "properties": {
                "model": {
                  "enum": [
                    "doubao-seedream-5-0-pro-260628"
                  ]
                },
                "size": {
                  "type": "string",
                  "pattern": "^(1K|1\\.5K|2K|[0-9]+x[0-9]+)$"
                },
                "image": {
                  "oneOf": [
                    {
                      "type": "string"
                    },
                    {
                      "type": "array",
                      "items": {
                        "type": "string"
                      },
                      "maxItems": 10
                    }
                  ]
                }
              },
              "not": {
                "anyOf": [
                  {
                    "required": [
                      "sequential_image_generation"
                    ]
                  },
                  {
                    "required": [
                      "stream"
                    ]
                  },
                  {
                    "required": [
                      "tools"
                    ]
                  }
                ]
              }
            },
            {
              "required": [
                "prompt"
              ],
              "properties": {
                "model": {
                  "enum": [
                    "doubao-seedream-5-0-lite-260128"
                  ]
                },
                "size": {
                  "type": "string",
                  "pattern": "^(2K|3K|4K|[0-9]+x[0-9]+)$"
                },
                "optimize_prompt_options": {
                  "type": "object",
                  "properties": {
                    "mode": {
                      "enum": [
                        "standard"
                      ]
                    }
                  }
                }
              },
              "not": {
                "anyOf": [
                  {
                    "required": [
                      "layer_decomposition"
                    ]
                  },
                  {
                    "required": [
                      "background"
                    ]
                  }
                ]
              }
            },
            {
              "required": [
                "prompt"
              ],
              "properties": {
                "model": {
                  "enum": [
                    "doubao-seedream-4-0-250828",
                    "doubao-seedream-4-5-251128"
                  ]
                }
              },
              "not": {
                "anyOf": [
                  {
                    "required": [
                      "layer_decomposition"
                    ]
                  },
                  {
                    "required": [
                      "background"
                    ]
                  },
                  {
                    "required": [
                      "output_format"
                    ]
                  },
                  {
                    "required": [
                      "tools"
                    ]
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    "properties": {
      "model": {
        "type": "string",
        "enum": [
          "doubao-seedream-5-0-pro-260628",
          "doubao-seedream-5-0-lite-260128",
          "doubao-seedream-4-0-250828",
          "doubao-seedream-4-5-251128"
        ]
      },
      "prompt": {
        "type": "string"
      },
      "image": {
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "array",
            "items": {
              "type": "string"
            },
            "maxItems": 14
          }
        ]
      },
      "size": {
        "type": "string",
        "pattern": "^(1K|1\\.5K|2K|3K|4K|auto|[0-9]+x[0-9]+)$"
      },
      "sequential_image_generation": {
        "type": "string",
        "enum": [
          "auto",
          "disabled"
        ]
      },
      "sequential_image_generation_options": {
        "type": "object",
        "properties": {
          "max_images": {
            "type": "integer",
            "minimum": 1,
            "maximum": 15
          }
        }
      },
      "stream": {
        "type": "boolean"
      },
      "response_format": {
        "type": "string",
        "enum": [
          "url",
          "b64_json"
        ]
      },
      "watermark": {
        "type": "boolean"
      },
      "output_format": {
        "type": "string",
        "enum": [
          "jpeg",
          "png"
        ]
      },
      "tools": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "web_search"
              ]
            }
          }
        }
      },
      "optimize_prompt_options": {
        "anyOf": [
          {
            "type": "object",
            "properties": {
              "mode": {
                "type": "string",
                "enum": [
                  "standard",
                  "fast"
                ]
              }
            }
          },
          {
            "type": "object",
            "properties": {
              "mode": {
                "enum": [
                  "standard"
                ]
              }
            }
          }
        ]
      },
      "callback_url": {
        "type": "string"
      },
      "async": {
        "type": "boolean"
      },
      "layer_decomposition": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "enum": [
              true
            ]
          }
        ]
      },
      "background": {
        "type": "string",
        "enum": [
          "transparent",
          "opaque"
        ]
      }
    },
    "parameters": [],
    "defaults": {
      "model": "doubao-seedream-5-0-lite-260128",
      "size": "2K",
      "response_format": "url"
    },
    "fixed": {},
    "allow_empty": [],
    "query_actions": [],
    "media_response": true
  },
  "seedream_edit_image": {
    "method": "POST",
    "path": "/seedream/images",
    "operation": "edit",
    "schema": {
      "type": "object",
      "required": [
        "model"
      ],
      "properties": {
        "model": {
          "type": "string",
          "enum": [
            "doubao-seedream-5-0-pro-260628",
            "doubao-seedream-5-0-lite-260128",
            "doubao-seedream-4-0-250828",
            "doubao-seedream-4-5-251128"
          ]
        },
        "prompt": {
          "type": "string"
        },
        "image": {
          "oneOf": [
            {
              "type": "string"
            },
            {
              "type": "array",
              "items": {
                "type": "string"
              },
              "maxItems": 14
            }
          ]
        },
        "size": {
          "type": "string",
          "pattern": "^(1K|1\\.5K|2K|3K|4K|auto|[0-9]+x[0-9]+)$"
        },
        "sequential_image_generation": {
          "type": "string",
          "enum": [
            "auto",
            "disabled"
          ]
        },
        "sequential_image_generation_options": {
          "type": "object",
          "properties": {
            "max_images": {
              "type": "integer",
              "minimum": 1,
              "maximum": 15
            }
          }
        },
        "stream": {
          "type": "boolean"
        },
        "response_format": {
          "type": "string",
          "enum": [
            "url",
            "b64_json"
          ]
        },
        "watermark": {
          "type": "boolean"
        },
        "output_format": {
          "type": "string",
          "enum": [
            "jpeg",
            "png"
          ]
        },
        "tools": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "web_search"
                ]
              }
            }
          }
        },
        "optimize_prompt_options": {
          "type": "object",
          "properties": {
            "mode": {
              "type": "string",
              "enum": [
                "standard",
                "fast"
              ]
            }
          }
        },
        "callback_url": {
          "type": "string"
        },
        "async": {
          "type": "boolean"
        },
        "layer_decomposition": {
          "type": "boolean"
        },
        "background": {
          "type": "string",
          "enum": [
            "transparent",
            "opaque"
          ]
        }
      },
      "allOf": [
        {
          "oneOf": [
            {
              "required": [
                "image",
                "layer_decomposition"
              ],
              "properties": {
                "model": {
                  "enum": [
                    "doubao-seedream-5-0-pro-260628"
                  ]
                },
                "layer_decomposition": {
                  "enum": [
                    true
                  ]
                },
                "size": {
                  "type": "string",
                  "pattern": "^(auto|1K|1\\.5K|2K)$"
                }
              },
              "not": {
                "anyOf": [
                  {
                    "required": [
                      "sequential_image_generation"
                    ]
                  },
                  {
                    "required": [
                      "stream"
                    ]
                  },
                  {
                    "required": [
                      "tools"
                    ]
                  },
                  {
                    "required": [
                      "background"
                    ]
                  }
                ]
              }
            },
            {
              "required": [
                "prompt"
              ],
              "properties": {
                "model": {
                  "enum": [
                    "doubao-seedream-5-0-pro-260628"
                  ]
                },
                "size": {
                  "type": "string",
                  "pattern": "^(1K|1\\.5K|2K|[0-9]+x[0-9]+)$"
                },
                "image": {
                  "oneOf": [
                    {
                      "type": "string"
                    },
                    {
                      "type": "array",
                      "items": {
                        "type": "string"
                      },
                      "maxItems": 10
                    }
                  ]
                }
              },
              "not": {
                "anyOf": [
                  {
                    "required": [
                      "sequential_image_generation"
                    ]
                  },
                  {
                    "required": [
                      "stream"
                    ]
                  },
                  {
                    "required": [
                      "tools"
                    ]
                  }
                ]
              }
            },
            {
              "required": [
                "prompt"
              ],
              "properties": {
                "model": {
                  "enum": [
                    "doubao-seedream-5-0-lite-260128"
                  ]
                },
                "size": {
                  "type": "string",
                  "pattern": "^(2K|3K|4K|[0-9]+x[0-9]+)$"
                },
                "optimize_prompt_options": {
                  "type": "object",
                  "properties": {
                    "mode": {
                      "enum": [
                        "standard"
                      ]
                    }
                  }
                }
              },
              "not": {
                "anyOf": [
                  {
                    "required": [
                      "layer_decomposition"
                    ]
                  },
                  {
                    "required": [
                      "background"
                    ]
                  }
                ]
              }
            },
            {
              "required": [
                "prompt"
              ],
              "properties": {
                "model": {
                  "enum": [
                    "doubao-seedream-4-0-250828",
                    "doubao-seedream-4-5-251128"
                  ]
                }
              },
              "not": {
                "anyOf": [
                  {
                    "required": [
                      "layer_decomposition"
                    ]
                  },
                  {
                    "required": [
                      "background"
                    ]
                  },
                  {
                    "required": [
                      "output_format"
                    ]
                  },
                  {
                    "required": [
                      "tools"
                    ]
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    "properties": {
      "model": {
        "type": "string",
        "enum": [
          "doubao-seedream-5-0-pro-260628",
          "doubao-seedream-5-0-lite-260128",
          "doubao-seedream-4-0-250828",
          "doubao-seedream-4-5-251128"
        ]
      },
      "prompt": {
        "type": "string"
      },
      "image": {
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "array",
            "items": {
              "type": "string"
            },
            "maxItems": 14
          }
        ]
      },
      "size": {
        "type": "string",
        "pattern": "^(1K|1\\.5K|2K|3K|4K|auto|[0-9]+x[0-9]+)$"
      },
      "sequential_image_generation": {
        "type": "string",
        "enum": [
          "auto",
          "disabled"
        ]
      },
      "sequential_image_generation_options": {
        "type": "object",
        "properties": {
          "max_images": {
            "type": "integer",
            "minimum": 1,
            "maximum": 15
          }
        }
      },
      "stream": {
        "type": "boolean"
      },
      "response_format": {
        "type": "string",
        "enum": [
          "url",
          "b64_json"
        ]
      },
      "watermark": {
        "type": "boolean"
      },
      "output_format": {
        "type": "string",
        "enum": [
          "jpeg",
          "png"
        ]
      },
      "tools": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "web_search"
              ]
            }
          }
        }
      },
      "optimize_prompt_options": {
        "anyOf": [
          {
            "type": "object",
            "properties": {
              "mode": {
                "type": "string",
                "enum": [
                  "standard",
                  "fast"
                ]
              }
            }
          },
          {
            "type": "object",
            "properties": {
              "mode": {
                "enum": [
                  "standard"
                ]
              }
            }
          }
        ]
      },
      "callback_url": {
        "type": "string"
      },
      "async": {
        "type": "boolean"
      },
      "layer_decomposition": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "enum": [
              true
            ]
          }
        ]
      },
      "background": {
        "type": "string",
        "enum": [
          "transparent",
          "opaque"
        ]
      }
    },
    "parameters": [],
    "defaults": {
      "model": "doubao-seedream-5-0-lite-260128",
      "size": "2K",
      "response_format": "url"
    },
    "fixed": {},
    "allow_empty": [],
    "query_actions": [],
    "media_response": true
  },
  "seedream_decompose_image": {
    "method": "POST",
    "path": "/seedream/images",
    "operation": "decompose",
    "schema": {
      "type": "object",
      "required": [
        "model"
      ],
      "properties": {
        "model": {
          "type": "string",
          "enum": [
            "doubao-seedream-5-0-pro-260628",
            "doubao-seedream-5-0-lite-260128",
            "doubao-seedream-4-0-250828",
            "doubao-seedream-4-5-251128"
          ]
        },
        "prompt": {
          "type": "string"
        },
        "image": {
          "oneOf": [
            {
              "type": "string"
            },
            {
              "type": "array",
              "items": {
                "type": "string"
              },
              "maxItems": 14
            }
          ]
        },
        "size": {
          "type": "string",
          "pattern": "^(1K|1\\.5K|2K|3K|4K|auto|[0-9]+x[0-9]+)$"
        },
        "sequential_image_generation": {
          "type": "string",
          "enum": [
            "auto",
            "disabled"
          ]
        },
        "sequential_image_generation_options": {
          "type": "object",
          "properties": {
            "max_images": {
              "type": "integer",
              "minimum": 1,
              "maximum": 15
            }
          }
        },
        "stream": {
          "type": "boolean"
        },
        "response_format": {
          "type": "string",
          "enum": [
            "url",
            "b64_json"
          ]
        },
        "watermark": {
          "type": "boolean"
        },
        "output_format": {
          "type": "string",
          "enum": [
            "jpeg",
            "png"
          ]
        },
        "tools": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "web_search"
                ]
              }
            }
          }
        },
        "optimize_prompt_options": {
          "type": "object",
          "properties": {
            "mode": {
              "type": "string",
              "enum": [
                "standard",
                "fast"
              ]
            }
          }
        },
        "callback_url": {
          "type": "string"
        },
        "async": {
          "type": "boolean"
        },
        "layer_decomposition": {
          "type": "boolean"
        },
        "background": {
          "type": "string",
          "enum": [
            "transparent",
            "opaque"
          ]
        }
      },
      "allOf": [
        {
          "oneOf": [
            {
              "required": [
                "image",
                "layer_decomposition"
              ],
              "properties": {
                "model": {
                  "enum": [
                    "doubao-seedream-5-0-pro-260628"
                  ]
                },
                "layer_decomposition": {
                  "enum": [
                    true
                  ]
                },
                "size": {
                  "type": "string",
                  "pattern": "^(auto|1K|1\\.5K|2K)$"
                }
              },
              "not": {
                "anyOf": [
                  {
                    "required": [
                      "sequential_image_generation"
                    ]
                  },
                  {
                    "required": [
                      "stream"
                    ]
                  },
                  {
                    "required": [
                      "tools"
                    ]
                  },
                  {
                    "required": [
                      "background"
                    ]
                  }
                ]
              }
            },
            {
              "required": [
                "prompt"
              ],
              "properties": {
                "model": {
                  "enum": [
                    "doubao-seedream-5-0-pro-260628"
                  ]
                },
                "size": {
                  "type": "string",
                  "pattern": "^(1K|1\\.5K|2K|[0-9]+x[0-9]+)$"
                },
                "image": {
                  "oneOf": [
                    {
                      "type": "string"
                    },
                    {
                      "type": "array",
                      "items": {
                        "type": "string"
                      },
                      "maxItems": 10
                    }
                  ]
                }
              },
              "not": {
                "anyOf": [
                  {
                    "required": [
                      "sequential_image_generation"
                    ]
                  },
                  {
                    "required": [
                      "stream"
                    ]
                  },
                  {
                    "required": [
                      "tools"
                    ]
                  }
                ]
              }
            },
            {
              "required": [
                "prompt"
              ],
              "properties": {
                "model": {
                  "enum": [
                    "doubao-seedream-5-0-lite-260128"
                  ]
                },
                "size": {
                  "type": "string",
                  "pattern": "^(2K|3K|4K|[0-9]+x[0-9]+)$"
                },
                "optimize_prompt_options": {
                  "type": "object",
                  "properties": {
                    "mode": {
                      "enum": [
                        "standard"
                      ]
                    }
                  }
                }
              },
              "not": {
                "anyOf": [
                  {
                    "required": [
                      "layer_decomposition"
                    ]
                  },
                  {
                    "required": [
                      "background"
                    ]
                  }
                ]
              }
            },
            {
              "required": [
                "prompt"
              ],
              "properties": {
                "model": {
                  "enum": [
                    "doubao-seedream-4-0-250828",
                    "doubao-seedream-4-5-251128"
                  ]
                }
              },
              "not": {
                "anyOf": [
                  {
                    "required": [
                      "layer_decomposition"
                    ]
                  },
                  {
                    "required": [
                      "background"
                    ]
                  },
                  {
                    "required": [
                      "output_format"
                    ]
                  },
                  {
                    "required": [
                      "tools"
                    ]
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    "properties": {
      "model": {
        "type": "string",
        "enum": [
          "doubao-seedream-5-0-pro-260628",
          "doubao-seedream-5-0-lite-260128",
          "doubao-seedream-4-0-250828",
          "doubao-seedream-4-5-251128"
        ]
      },
      "prompt": {
        "type": "string"
      },
      "image": {
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "array",
            "items": {
              "type": "string"
            },
            "maxItems": 14
          }
        ]
      },
      "size": {
        "type": "string",
        "pattern": "^(1K|1\\.5K|2K|3K|4K|auto|[0-9]+x[0-9]+)$"
      },
      "sequential_image_generation": {
        "type": "string",
        "enum": [
          "auto",
          "disabled"
        ]
      },
      "sequential_image_generation_options": {
        "type": "object",
        "properties": {
          "max_images": {
            "type": "integer",
            "minimum": 1,
            "maximum": 15
          }
        }
      },
      "stream": {
        "type": "boolean"
      },
      "response_format": {
        "type": "string",
        "enum": [
          "url",
          "b64_json"
        ]
      },
      "watermark": {
        "type": "boolean"
      },
      "output_format": {
        "type": "string",
        "enum": [
          "jpeg",
          "png"
        ]
      },
      "tools": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "web_search"
              ]
            }
          }
        }
      },
      "optimize_prompt_options": {
        "anyOf": [
          {
            "type": "object",
            "properties": {
              "mode": {
                "type": "string",
                "enum": [
                  "standard",
                  "fast"
                ]
              }
            }
          },
          {
            "type": "object",
            "properties": {
              "mode": {
                "enum": [
                  "standard"
                ]
              }
            }
          }
        ]
      },
      "callback_url": {
        "type": "string"
      },
      "async": {
        "type": "boolean"
      },
      "layer_decomposition": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "enum": [
              true
            ]
          }
        ]
      },
      "background": {
        "type": "string",
        "enum": [
          "transparent",
          "opaque"
        ]
      }
    },
    "parameters": [],
    "defaults": {
      "model": "doubao-seedream-5-0-pro-260628",
      "size": "auto",
      "response_format": "url",
      "layer_decomposition": true
    },
    "fixed": {
      "model": "doubao-seedream-5-0-pro-260628",
      "layer_decomposition": true
    },
    "allow_empty": [],
    "query_actions": [],
    "media_response": true
  },
  "seedream_task_retrieve": {
    "method": "POST",
    "path": "/seedream/tasks",
    "operation": "task",
    "schema": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "ids": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "action": {
          "enum": [
            "retrieve",
            "retrieve_batch"
          ],
          "type": "string"
        }
      }
    },
    "properties": {
      "id": {
        "type": "string"
      },
      "ids": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "action": {
        "enum": [
          "retrieve",
          "retrieve_batch"
        ],
        "type": "string"
      }
    },
    "parameters": [],
    "defaults": {
      "wait_seconds": 0
    },
    "fixed": {},
    "allow_empty": [],
    "query_actions": [
      "retrieve",
      "retrieve_batch",
      "list",
      "presets"
    ],
    "media_response": false
  },
  "seedream_tasks_retrieve_batch": {
    "method": "POST",
    "path": "/seedream/tasks",
    "operation": "batch",
    "schema": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "ids": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "minItems": 1
        },
        "action": {
          "enum": [
            "retrieve",
            "retrieve_batch"
          ],
          "type": "string"
        }
      },
      "required": [
        "action",
        "ids"
      ]
    },
    "properties": {
      "id": {
        "type": "string"
      },
      "ids": {
        "type": "array",
        "items": {
          "type": "string"
        },
        "minItems": 1
      },
      "action": {
        "enum": [
          "retrieve",
          "retrieve_batch"
        ],
        "type": "string"
      }
    },
    "parameters": [],
    "defaults": {},
    "fixed": {
      "action": "retrieve_batch"
    },
    "allow_empty": [],
    "query_actions": [
      "retrieve",
      "retrieve_batch",
      "list",
      "presets"
    ],
    "media_response": false
  }
};
