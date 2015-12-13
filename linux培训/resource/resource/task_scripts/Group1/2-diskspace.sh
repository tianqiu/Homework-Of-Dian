#!/bin/sh

# diskspace - summarize available disk space and present in a logical
#    and readable fashion

#默认空格区分，取各分区的大小，累加，求完和之后换算成MB 和 GB，再显示出来
df -k | awk '
BEGIN {print "This Shell script is used to compute the size of this PC"} 
{ sum += $4 } 
END { mb = sum / 1024
      gb = mb / 1024
      printf "%.0f MB (%.2fGB) of available disk space\n", mb, gb
    }'
