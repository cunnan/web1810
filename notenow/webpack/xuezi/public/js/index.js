//导入另一个JS模块中的成员
import {getCompanyName} from './util';

//导入另两个CSS模块文件
import  '../css/base.css';
import  '../css/page.css';

//创建一个DIV元素
var d = document.createElement('div');
//设置DIV元素内部的文字
d.innerHTML = '版权所有 2018：'+getCompanyName();
//修改DIV元素的class
d.className = 'box';

//把DIV元素追加为BODY的孩子
document.body.appendChild(d);
 