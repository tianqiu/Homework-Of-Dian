#!/bin/bash

AUTHOR="peenut"                  # source

echo ${AUTHOR}" is a good gay!"  # 字符串拼接
echo "$AUTHOR is a good gay!"    # 拼接有很多方式，但是建议风格统一

echo "当前脚本名: "${0}          # 一些特殊变量
echo "脚本参数个数: "$#
echo "脚本第一个参数: $1" 
echo "脚本第二个参数: $2"
echo "脚本参数列表: $*"
echo "脚本参数列表: $@"
echo "上一次执行结果: $?"
