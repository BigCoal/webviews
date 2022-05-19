# Content-Security-Policy

[语法](#语法 "Permalink to 语法")
---------------------------

```http
Content-Security-Policy: <policy-directive>; <policy-directive>
```

[指令](#指令 "Permalink to 指令")
---------------------------

### [获取指令：](#获取指令：glossaryfetch_directive_fetch_directives "Permalink to 获取指令：Fetch directives")[Fetch directives](https://developer.mozilla.org/zh-CN/docs/Glossary/Fetch_directive)

### [文档指令 | Document directives](#文档指令_document_directives "Permalink to 文档指令 | Document directives")

### [导航指令 | Navigation directives](#导航指令_navigation_directives "Permalink to 导航指令 | Navigation directives")

### [报告指令](#报告指令 "Permalink to 报告指令")

### [其他指令 | Other directives](#其他指令_other_directives "Permalink to 其他指令 | Other directives")

[CSP 和 Workers](#csp_和_workers "Permalink to CSP 和 Workers")
------------------------------------------------------------

[Workers](https://developer.mozilla.org/en-US/docs/Web/API/Worker) 一般来说不被创建他的文档（或者父级 Worker）的 CSP 策略管理。如果要为 Worker 指定 CSP 策略，可以为 Worker 脚本的请求的响应的头部设置 CSP 策略。 

例外的情况是，如果 Worker 脚本的来源是一个全局唯一 ID（比如，它的 URL 是一个结构化的数据或者 BLOB）。在这种情况下，这个 Worker 会继承它所属的文档或者创建它的 Worker 的 CSP 策略。

[多内容安全策略](#多内容安全策略 "Permalink to 多内容安全策略")
------------------------------------------

CSP 允许在一个资源中指定多个策略, 包括通过 `Content-Security-Policy` 头, 以及 [`Content-Security-Policy-Report-Only`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only) 头，和 [`<meta>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta) 组件。

你可以像以下实例一样多次调用 `Content-Security-Policy` 头。 特别注意这里的 [`connect-src`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/connect-src) 指令。 尽管第二个策略允许连接, 第一个策略仍然包括了 `connect-src 'none'`。添加了附加的策略后，只会让资源保护的能力更强，也就是说不会有接口可以被允许访问，等同于最严格的策略，`connect-src 'none'` 强制开启。

```http
Content-Security-Policy: default-src 'self' http://example.com;
                         connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                         script-src http://example.com/
```

[示例](#示例 "Permalink to 示例")
---------------------------

示例: 禁用不安全的内联 / 动态执行, 只允许通过 https 加载这些资源 (images, fonts, scripts, etc.)

```http
// header
Content-Security-Policy: default-src https:

// meta tag
<meta http-equiv="Content-Security-Policy" content="default-src https:">
```

示例: 已经存在的一个网站，用了太多内联代码修复问题，而且想确保资源只从 https 加载，并且禁止插件：

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

实例：还没有开始实施上面的策略；相反，只是开始上报可能会发生违反安全策略的行为：

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-endpoint/
```

查看 [Mozilla Web Security Guidelines](https://wiki.mozilla.org/Security/Guidelines/Web_Security#Examples_5) 上的更多例子.

[规范](#规范 "Permalink to 规范")
---------------------------

[浏览器兼容性](#浏览器兼容性 "Permalink to 浏览器兼容性")
---------------------------------------

[参见](#参见 "Permalink to 参见")
---------------------------