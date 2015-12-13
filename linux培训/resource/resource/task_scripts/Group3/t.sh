#!/bin/sh
region="$(dirname $1)"

mixedregion="$(echo ${region%${region#?}} | tr '[[:lower:]]' '[[:upper:]]')\
$(echo ${region#?} | tr '[[:upper:]]' '[[:lower:]]')"

echo $mixedregion
