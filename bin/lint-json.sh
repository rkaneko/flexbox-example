#!/bin/bash -e

__DIRNAME=`dirname $0`
cd ${__DIRNAME}/..

JSONS=$(find -type d -name node_modules -prune -type f -name "*.json")
for JSON in ${JSONS[@]}
do
    echo "jsonlint ${JSON}"
    $(npm bin)/jsonlint "${JSON}" -q
done
