#!/bin/bash
for file in `find contracts -name "*.sol"`; do
  echo "$file is SOL";
#  myth analyze ${file};
done