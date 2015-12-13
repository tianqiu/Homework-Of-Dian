#!/bin/bash

i=1                    # 幅值左右不能有空格
while [ $i -lt 100 ];  # 如果换行，则分号";"可以省略
do
    echo "i is $i"
    i=`expr $i \* 2`   # 进行算术运算
done
