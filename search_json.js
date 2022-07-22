window.ydoc_plugin_search_json = {
  "文档": [
    {
      "title": "",
      "content": "",
      "url": "/docs/quickstart.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/docs/intro.html",
      "children": [
        {
          "title": "Buession CAS 框架是什么？",
          "url": "/docs/intro.html#buession-cas-框架是什么？",
          "content": "Buession CAS 框架是什么？解决 Apereo CAS 的解决各依赖问题，以及对 Apereo CAS 二次封装，以及集成了阿里云、极验、腾讯云行为验证码。Apereo CAS 自身会依赖很多第三方包，但是这些第三方包基本用不上，我们通过包装，把这些用不上的包给排除掉。\nApereo CAS 依赖的 javax 包我们统一替换为 jakarta\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/docs/license.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/docs/module.html",
      "children": [
        {
          "title": "buession-cas-audit",
          "url": "/docs/module.html#buession-cas-audit",
          "content": "buession-cas-auditApereo CAS 审计相关组件集成\n"
        },
        {
          "title": "buession-cas-captcha",
          "url": "/docs/module.html#buession-cas-captcha",
          "content": "buession-cas-captcha阿里云、极验、腾讯云行为验证集成\n"
        },
        {
          "title": "buession-cas-client",
          "url": "/docs/module.html#buession-cas-client",
          "content": "buession-cas-clientjasig cas client\n"
        },
        {
          "title": "buession-cas-core",
          "url": "/docs/module.html#buession-cas-core",
          "content": "buession-cas-coreApereo CAS 核心组件以及 Apereo CAS 依赖的核心组件的集成\n"
        },
        {
          "title": "buession-cas-metrics",
          "url": "/docs/module.html#buession-cas-metrics",
          "content": "buession-cas-metricsApereo CAS Metrics 组件以及 Apereo CAS Metrics 依赖的核心组件的集成\n"
        },
        {
          "title": "buession-cas-service",
          "url": "/docs/module.html#buession-cas-service",
          "content": "buession-cas-serviceApereo CAS Throttle 组件以及 Apereo CAS Throttle 依赖的核心组件的集成\n"
        },
        {
          "title": "buession-cas-session",
          "url": "/docs/module.html#buession-cas-session",
          "content": "buession-cas-sessionApereo CAS Session 依赖的核心组件的集成\n"
        },
        {
          "title": "buession-cas-support",
          "url": "/docs/module.html#buession-cas-support",
          "content": "buession-cas-supportApereo CAS Suppport 依赖的核心组件的集成\n"
        },
        {
          "title": "buession-cas-wiew",
          "url": "/docs/module.html#buession-cas-wiew",
          "content": "buession-cas-wiewApereo CAS 视图组件\n"
        },
        {
          "title": "buession-cas-web",
          "url": "/docs/module.html#buession-cas-web",
          "content": "buession-cas-webApereo CAS WEB 组件\n"
        },
        {
          "title": "buession-cas-webflow",
          "url": "/docs/module.html#buession-cas-webflow",
          "content": "buession-cas-webflowApereo CAS 工作流组件以及 Apereo CAS 工作流依赖的核心组件的集成\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/docs/version.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/docs/installation.html",
      "children": [
        {
          "title": "Maven 中央仓库搜索",
          "url": "/docs/installation.html#maven-中央仓库搜索",
          "content": "Maven 中央仓库搜索https://mvnrepository.com/search?q=com.buession.cas\nhttps://search.maven.org/search?q=g:com.buession.cas\n"
        },
        {
          "title": "手动编译",
          "url": "/docs/installation.html#手动编译",
          "content": "手动编译git clone https://github.com/buession/buession-cascd buession-cas/buession-cas-parent && mvn clean install\n"
        },
        {
          "title": "Maven",
          "url": "/docs/installation.html#maven",
          "content": "Maven    com.buession.cas\n    buession-cas-xxx\n    x.x.x\n\n"
        },
        {
          "title": "Gradle",
          "url": "/docs/installation.html#gradle",
          "content": "Gradlecompile group: 'com.buession.cas', name: 'buession-cas-xxx', version: 'x.x.x'其中，artifactId 中的 xxx 表示对应的子模块；version 中的 x.x.x 代表版本号，根据需要使用特定版本，建议使用 maven 仓库中已构建好的最新版本的包。"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/docs/requirement.html",
      "children": [
        {
          "title": "环境要求",
          "url": "/docs/requirement.html#环境要求",
          "content": "环境要求JDKJDK 11+构建工具\n\n构建工具\n版本\n\n\n\n\nMaven\n3.5+\n\n\nGradle\n6.x+，推荐 6.3 及以上版本\n\n\nServlet 容器支持 servlet 3.1+，推荐使用 servlet 4.0 及以上版本。"
        }
      ]
    }
  ],
  "参考手册": [
    {
      "title": "",
      "content": "",
      "url": "/manual/index.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/manual/overview.html",
      "children": []
    }
  ]
}