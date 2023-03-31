"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[1867],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,p=d["".concat(s,".").concat(m)]||d[m]||f[m]||i;return t?a.createElement(p,o(o({ref:n},c),{},{components:t})):a.createElement(p,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},81302:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return f},default:function(){return m}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],l={},s="Performance Test Report: SeaTunnel Synchronizes data in batches 420% Faster than GLUE!",u={permalink:"/zh-CN/blog/2023/3/29/Performance_Test_Report_SeaTunnel_Synchronizes_Data_in_Batches_420_Percent_Faster_than_GLUE.md",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2023-3-29-Performance_Test_Report_SeaTunnel_Synchronizes_Data_in_Batches_420_Percent_Faster_than_GLUE.md.md",source:"@site/blog/2023-3-29-Performance_Test_Report_SeaTunnel_Synchronizes_Data_in_Batches_420_Percent_Faster_than_GLUE.md.md",title:"Performance Test Report: SeaTunnel Synchronizes data in batches 420% Faster than GLUE!",description:"cover",date:"2023-03-29T00:00:00.000Z",formattedDate:"2023\u5e743\u670829\u65e5",tags:[],readingTime:2.535,truncated:!1,authors:[],frontMatter:{},prevItem:{title:"SeaTunnel 2.3.1 is released! The refactored AI Compatible feature allows ChatGPT to automatically generate Connector code",permalink:"/zh-CN/blog/2023/3/31/SeaTunnel_2_3_1_Released_Refactored_AI_Compatible_Feature_Allows_ChatGPT_Automatic_Get"},nextItem:{title:"SeaTunnel now supports CDC (Capture Change Data) writing by ClickHouse Connector!",permalink:"/zh-CN/blog/2023/02/09/SeaTunnel_Now_Supports_CDC_Writing_by_ClickHouse_Connector.md"}},c={authorsImageUrls:[]},f=[],d={toc:f};function m(e){var n=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"cover"),(0,i.kt)("p",null,"SeaTunnel Zeta has been officially released with the joint efforts of the community. After comparing the performance of SeaTunnel with DataX and Airbyte, we also compared the performance of SeaTunnel with the popular data synchronization tool AWS GLUE."),(0,i.kt)("p",null,"The results showed that SeaTunnel batch syncs MySQL data to MySQL 420% faster than GLUE."),(0,i.kt)("p",null,"To ensure the accuracy of the test, we took on the test under the same test environment: under the same resource conditions, we tested SeaTunnel and AWS GLUE to synchronize data from MySQL to MySQL in batches and compared the time required for the two tools."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"1",src:t(90290).Z,width:"441",height:"131"})),(0,i.kt)("p",null,"We created a table in MySQL containing 31 fields, with the primary key selected as an incrementing ID, and all other fields generated randomly, without setting any indexes. The table creation statement is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"create table test.type_source_table\n(\n    id                   int auto_increment\n        primary key,\n    f_binary             binary(64)          null,\n    f_blob               blob                null,\n    f_long_varbinary     mediumblob          null,\n    f_longblob           longblob            null,\n    f_tinyblob           tinyblob            null,\n    f_varbinary          varbinary(100)      null,\n    f_smallint           smallint            null,\n    f_smallint_unsigned  smallint unsigned   null,\n    f_mediumint          mediumint           null,\n    f_mediumint_unsigned mediumint unsigned  null,\n    f_int                int                 null,\n    f_int_unsigned       int unsigned        null,\n    f_integer            int                 null,\n    f_integer_unsigned   int unsigned        null,\n    f_bigint             bigint              null,\n    f_bigint_unsigned    bigint unsigned     null,\n    f_numeric            decimal             null,\n    f_decimal            decimal             null,\n    f_float              float               null,\n    f_double             double              null,\n    f_double_precision   double              null,\n    f_longtext           longtext            null,\n    f_mediumtext         mediumtext          null,\n    f_text               text                null,\n    f_tinytext           tinytext            null,\n    f_varchar            varchar(100)        null,\n    f_date               date                null,\n    f_datetime           datetime            null,\n    f_time               time                null,\n    f_timestamp          timestamp           null\n);\n")),(0,i.kt)("h1",{id:"seatunnel-task-configuration"},"SeaTunnel Task Configuration"),(0,i.kt)("p",null,"In SeaTunnel, we split the data according to the ID field and process it in multiple sub-tasks. Here is the configuration file for SeaTunnel:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain"},'env {\n    job.mode = "BATCH"\n    checkpoint.interval = 300000\n}\nsource {\n    Jdbc {\n        url = "jdbc:mysql://XXX:3306/test"\n        driver = "com.mysql.cj.jdbc.Driver"\n        user = "root"\n        password = "password"\n        connection_check_timeout_sec = 100\n        query = "select id, f_binary, f_blob, f_long_varbinary, f_longblob, f_tinyblob, f_varbinary, f_smallint, f_smallint_unsigned, f_mediumint, f_mediumint_unsigned, f_int, f_int_unsigned, f_integer, f_integer_unsigned, f_bigint, f_bigint_unsigned, f_numeric, f_decimal, f_float, f_double, f_double_precision, f_longtext, f_mediumtext, f_text, f_tinytext, f_varchar, f_date, f_datetime, f_time, f_timestamp from test"\n        partition_column = "id"\n        partition_num = 40\n        parallelism = 2\n    }\n}\nsink {\nJdbc {\n          url = "jdbc:mysql://XXX:3306/test"\n         driver = "com.mysql.cj.jdbc.Driver" \n        user = "root"\n        password = "password"\n         query = "insert into test_1 values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"\n    }\n}\n')),(0,i.kt)("p",null,"Under fixed JVM memory of 4G and parallelism of 2, SeaTunnel completed the synchronization in 1965 seconds. Based on this conclusion, we tested the speed of GLUE under the same memory and concurrency settings."),(0,i.kt)("h1",{id:"glue-task-configuration"},"GLUE Task Configuration"),(0,i.kt)("p",null,"We created a MySQL-to-MySQL job as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"2",src:t(57175).Z,width:"1280",height:"492"})),(0,i.kt)("p",null,"Configuration source connect with the target:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"3",src:t(20595).Z,width:"720",height:"931"})),(0,i.kt)("p",null,"Job configuration:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"4",src:t(28904).Z,width:"1102",height:"720"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"5",src:t(42639).Z,width:"1280",height:"155"})),(0,i.kt)("p",null,"Adjust the memory: job parameters configuration"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"6",src:t(35988).Z,width:"1280",height:"231"})),(0,i.kt)("p",null,"\u2014 conf spark.yarn.executor.memory=4g"),(0,i.kt)("p",null,"Under this configuration, GLUE took 8191 seconds to complete the synchronization."),(0,i.kt)("h1",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"After comparing the best configurations, we conducted a more in-depth comparison for different memory sizes. The following chart shows the comparison results obtained through repeated testing under the same environment."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"7",src:t(10961).Z,width:"958",height:"720"})),(0,i.kt)("p",null,"The unit is seconds."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"8",src:t(2651).Z,width:"721",height:"171"})),(0,i.kt)("p",null,"Note: This comparison is based on SeaTunnel: commit ID f57b897, and we welcome to download and test it!"))}m.isMDXComponent=!0},90290:function(e,n,t){n.Z=t.p+"assets/images/1-d51ab80474d84a87dd8fbd61ab6f77bf.png"},57175:function(e,n,t){n.Z=t.p+"assets/images/2-f1fd058ea26a46a8150a703b6905084a.png"},20595:function(e,n,t){n.Z=t.p+"assets/images/3-37d8f5d74bdbe297c063376a9d54c8ef.png"},28904:function(e,n,t){n.Z=t.p+"assets/images/4-7302311b5a6ac79323812042a38697d2.png"},42639:function(e,n,t){n.Z=t.p+"assets/images/5-349cb5fddaeb1867b9b48922aec68a8e.png"},35988:function(e,n,t){n.Z=t.p+"assets/images/6-1-4434213ed408f3b916af6bca195f442c.png"},10961:function(e,n,t){n.Z=t.p+"assets/images/7-2d2a97ed15a9f1483a375c7f46b5ee77.png"},2651:function(e,n,t){n.Z=t.p+"assets/images/8-67759c33a40c0cc49964474c4501db35.png"}}]);