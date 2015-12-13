#!/bin/sh
#打印斐波那契数列前n项
#usage: 1.Fibonacci.sh [n]

#接受一个参数n，如果参数不是一个，提示usage
if [ $# != 1 ];then
	echo "usage: 1.Fibonacci.sh [n]\nFibonacci sequence top n"
	exit 1
fi

if [ $1 -lt 1 ];then
	echo "参数必须大于等于1."
	exit 1
fi

#声明变量
i=0
t1=1
t2=1
t3=0

while [ "$i" -lt "$1" ];do
	if [ $i -eq 0 ] || [ $i -eq 1 ];then
		echo "1 \c"
	else
		t3=$(($t1+$t2))
		echo "$t3 \c"
		t1=$t2
		t2=$t3
	fi
	i=$(($i+1))
done
echo ""
exit 0