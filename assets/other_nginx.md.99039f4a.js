import{_ as s,o as n,c as a,X as l}from"./chunks/framework.a911dc49.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"other/nginx.md","filePath":"other/nginx.md","lastUpdated":1704262034000}'),p={name:"other/nginx.md"},e=l(`<h2 id="配置-nginx-使用-http-2" tabindex="-1">配置 Nginx 使用 HTTP/2 <a class="header-anchor" href="#配置-nginx-使用-http-2" aria-label="Permalink to &quot;配置 Nginx 使用 HTTP/2&quot;">​</a></h2><ol><li>在nginx安装目录下，nginx/nginx.config，打开该配置文件</li><li>在http块中添加指令启动http/2</li></ol><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 其他配置项...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 其他服务器配置...</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        listen 443 ssl http2;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        # SSL 相关配置...</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        # 其他配置...</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>其中listen 指令用于监听端口，443 是 HTTPS 端口。<br></p><h2 id="配置-ssl-相关的指令、证书" tabindex="-1">配置 SSL 相关的指令、证书 <a class="header-anchor" href="#配置-ssl-相关的指令、证书" aria-label="Permalink to &quot;配置 SSL 相关的指令、证书&quot;">​</a></h2><ol><li>在 Windows 系统下配置个人的 SSL 证书，可以使用 OpenSSL 工具生成一个自签名的 SSL 证书。OpenSSL的安装包<a href="https://slproweb.com/products/Win32OpenSSL.html" target="_blank">下载地址</a>(选择对应系统版本的EXE下载，按照步骤安装即可)<br></li><li>在OpenSSL的安装目录下，bin文件夹同级的 start Windows批处理文件，双击运行。此时弹出终端，输入以下命令回车运行</li></ol><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">openssl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">req</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-x509</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-newkey</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rsa:2048</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-nodes</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-keyout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">key.pem</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-out</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cert.pem</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-days</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">365</span></span></code></pre></div><p>在生成证书时，需要提供一些信息，如国家、省份、本地域名等。根据自己的需求填写信息。<br> 最终证书生成在该终端路径下，找到该目录下的cert.pem、key.pem，即为证书、私钥文件 <br> 3. nginx.config配置文件修改</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        listen 443 ssl http2;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ssl_certificate    cert.pem;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ssl_certificate_key    key.pem;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">## ssl_certificate、ssl_certificate_key直接复制对应系统文件位置即可</span></span></code></pre></div><p>配置完成后，在nginx安装目录启动终端，重启nginx。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reload</span></span></code></pre></div><h2 id="nginx配置使用gzip压缩文件" tabindex="-1">nginx配置使用gzip压缩文件 <a class="header-anchor" href="#nginx配置使用gzip压缩文件" aria-label="Permalink to &quot;nginx配置使用gzip压缩文件&quot;">​</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        gzip on;</span></span>
<span class="line"><span style="color:#A6ACCD;">        gzip_min_length 1k;</span></span>
<span class="line"><span style="color:#A6ACCD;">        gzip_comp_level 9;</span></span>
<span class="line"><span style="color:#A6ACCD;">        gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;</span></span>
<span class="line"><span style="color:#A6ACCD;">        gzip_vary on;</span></span>
<span class="line"><span style="color:#A6ACCD;">        gzip_disable &quot;MSIE [1-6]\\.&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>在浏览器响应头体现为Content-Encoding:gzip标识</p>`,14),t=[e];function o(c,i,r,C,A,y){return n(),a("div",null,t)}const d=s(p,[["render",o]]);export{D as __pageData,d as default};
