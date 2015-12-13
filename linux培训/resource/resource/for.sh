#!/bin/bash

do_i_like()
{
	for fruit
	do
		echo "I really like ${fruit}s"
	done
}

AUTHOR="peenut"

fruits="apple orange paer"

for fruit in $fruits # 如果忽略不使用 in list，则默认为 for xxx in $*
                     # list可以是变量也可以直接是一条命令: `ifconfig | grep "192\.168\." | awk '{ print $2 }'`
                     # for fruit in apple orange paer
do
	echo "I really like ${fruit}s"
done

echo "call do_i_like"
do_i_like $fruits

echo "I like all!"

for (( i=1; i <= 10; ++i))
do
	printf "i = %2d\n" $i
done
