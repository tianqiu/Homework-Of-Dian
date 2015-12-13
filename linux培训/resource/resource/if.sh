#!/bin/bash

usage () {
    echo "usage: there must be something wrong"
    exit 1;
}

AUTHOR="peenut"                  # source

if [ $# -ge 1 ];then
	echo $AUTHOR
fi

if [ $# -gt 2 ];then
	echo "参数个数大于2"
elif [ $# -ge 1 ];then
	case "$#" in
		1)      echo "参数个数为1";;
		2)      echo "参数个数为2";;
		*)          usage;;
    esac
else
	echo "参数个数为0"
fi
