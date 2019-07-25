#!/bin/bash
set -e

JSON=$(cat <<-EOF
{
  "version": 2,
  "name": "pubnow-$TRAVIS_BRANCH",
  "builds": [
    {
      "src": "packages/website/nuxt.config.js",
      "use": "@nuxtjs/now-builder",
      "config": {}
    }
  ]
}
EOF
)

echo $JSON > .now/now.feature.json