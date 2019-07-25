#!/bin/bash
set -e

if [[ $TRAVIS_BRANCH == "master" ]] && [[ $TRAVIS_PULL_REQUEST == "false" ]]; then
  now --token $ZEIT_TOKEN --local-config .now/now.production.json;
elif [[ $TRAVIS_BRANCH == "staging" ]] && [[ $TRAVIS_PULL_REQUEST == "false" ]]; then
  now --token $ZEIT_TOKEN --local-config .now/now.staging.json;
elif [[ $TRAVIS_PULL_REQUEST == "true" ]]; then
  ./now.feature.sh;
  now --token $ZEIT_TOKEN --local-config ./now.feature.json;
fi