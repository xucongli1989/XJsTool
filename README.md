## 注意：此项目不再更新维护，您可以考虑这个项目：[x-js-kit](https://github.com/xucongli1989/x-js-kit)

## CI ##

[![Build Status](https://travis-ci.org/xucongli1989/XJsTool.svg?branch=master)](https://travis-ci.org/xucongli1989/XJsTool)

## 简介 ##
 本程序为javascript常用工具类，包含最常用的字符串处理、日期格式处理、正则表达式、AJAX、数据类型转换、浏览器判断等非常实用的功能。

 包含但不限于如下功能模块：
 
 - 数组处理
 - 浏览器处理
 - 公共方法
 - ContentType处理
 - Cookie处理
 - 日期时间转换处理
 - DOM节点操作
 - Http处理
 - JSON处理
 - 数学计算
 - 移动端判断
 - 随机数
 - 常用正则
 - 字符串处理
 - URL处理
 - 其它

## 编译 ##
 在代码根目录执行 $ gulp

## 使用 ##

- 方法一：直接引用

	`<script src="../build/XJsTool.js"></script>`

- 方法二：使用require方式

	<pre>
	require.config({
		paths:{
			XJsTool:'../build/XJsTool'
		}
	});
	
	require(["XJsTool"], function (x) {
		//......
	});
	</pre>

## 文档 ##
[在线预览文档](https://htmlpreview.github.io/?https://github.com/xucongli1989/XJsTool/blob/master/doc/index.html)

## 授权协议 ##
 免费，且开源，基于[LGPL](https://raw.githubusercontent.com/xucongli1989/XJsTool/master/LICENSE)协议。

