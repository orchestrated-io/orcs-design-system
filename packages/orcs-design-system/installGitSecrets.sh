#!/bin/bash
command -v git-secrets >/dev/null 2>&1 || {
  rm -rf ./node_modules/git-secrets
  cd ./node_modules
  git clone https://github.com/awslabs/git-secrets.git
  cd ./git-secrets
  make install
  cd ../..
  rm -rf ./node_modules/git-secrets
}