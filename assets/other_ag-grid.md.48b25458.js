import{_ as s,o as n,c as a,X as l}from"./chunks/framework.a911dc49.js";const p="/zm-docs/assets/male.9753be28.webp",o="/zm-docs/assets/group.6bebf098.webp",e="/zm-docs/assets/checkbox.764c487f.webp",t="/zm-docs/assets/filter.b166d2d4.webp",m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"other/ag-grid.md","filePath":"other/ag-grid.md","lastUpdated":1724308803000}'),c={name:"other/ag-grid.md"},r=l(`<h3 id="官方文档" tabindex="-1">官方文档 <a class="header-anchor" href="#官方文档" aria-label="Permalink to &quot;官方文档&quot;">​</a></h3><p><a href="https://www.ag-grid.com/vue-data-grid/" target="_blank" rel="noreferrer">https://www.ag-grid.com/vue-data-grid/</a></p><h2 id="gridoptions" tabindex="-1"><em>gridOptions</em> <a class="header-anchor" href="#gridoptions" aria-label="Permalink to &quot;*gridOptions*&quot;">​</a></h2><p>gridOptions 是网格配置项，属性、API、回调等都可以在这里配置：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ag-grid-vue</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ag-theme-balham</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">:gridOptions</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">agGrid</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ag-grid-vue</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> agGrid </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">columnDefs</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">rowData</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">gridOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="ongridready-params-回调" tabindex="-1"><em>onGridReady(params)回调</em> <a class="header-anchor" href="#ongridready-params-回调" aria-label="Permalink to &quot;*onGridReady(params)回调*&quot;">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ag-grid-vue</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width: 100%; height: 100%;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ag-theme-alpine</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">:columnDefs</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">columnDefs</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">@grid-ready</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">onGridReady</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">:defaultColDef</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">defaultColDef</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">:sideBar</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sideBar</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">:rowData</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rowData</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ag-grid-vue</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> gridApi </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> columnApi </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> defaultColDef </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">flex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">minWidth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">resizable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sideBar</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> rowData</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> onGridReady </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">params</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">gridApi</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">api</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">columnApi</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">columnApi</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 接口</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">fetch</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://www.ag-grid.com/example-assets/olympic-winners.json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resp</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">resp</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">json</span><span style="color:#F07178;">())</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>回调中调取接口数据，回调参数原型链上的方法setRowData设置显示数据</p><h3 id="columndefs、rowdata" tabindex="-1"><em>columnDefs、rowData</em> <a class="header-anchor" href="#columndefs、rowdata" aria-label="Permalink to &quot;*columnDefs、rowData*&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> columnDefs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">headerName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Athlete Details</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">marryChildren</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">field</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">athlete</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">colId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">athlete</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">field</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">country</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">colId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">country</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">field</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">colId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">headerName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Sports Results</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">marryChildren</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">field</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sport</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">colId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sport</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">field</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">total</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">colId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">total</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">field</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gold</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">colId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gold</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">field</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">silver</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">colId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">silver</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">field</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bronze</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">colId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bronze</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> columnDefs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">field</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">make</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">field</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">model</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">field</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">price</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> rowDsta </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">make</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Toyota</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">model</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Celica</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">price</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">35000</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">make</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Porsche</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">model</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Boxster</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">price</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">72000</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">make</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Aston Martin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">model</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">DBX</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">price</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">190000</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="cell-rendering" tabindex="-1"><em>Cell Rendering</em> <a class="header-anchor" href="#cell-rendering" aria-label="Permalink to &quot;*Cell Rendering*&quot;">​</a></h3><p>By default the grid renders values into the cells as strings. If you want something more complex you use a cell renderer. <br><a href="https://www.ag-grid.com/vue-data-grid/cell-rendering/" target="_blank" rel="noreferrer">https://www.ag-grid.com/vue-data-grid/cell-rendering/</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;ag-grid-vue    </span></span>
<span class="line"><span style="color:#A6ACCD;">:columnDefs=&quot;columnDefs&quot;  </span></span>
<span class="line"><span style="color:#A6ACCD;">  /* other grid options ... */&gt;  </span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/ag-grid-vue&gt;    </span></span>
<span class="line"><span style="color:#A6ACCD;">this.columnDefs = [  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // 1 - undefined - Grid renders the value as a string.    </span></span>
<span class="line"><span style="color:#A6ACCD;">{  </span></span>
<span class="line"><span style="color:#A6ACCD;">    field: &#39;name&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    cellRenderer: undefined,  </span></span>
<span class="line"><span style="color:#A6ACCD;">  },  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // 2 - String - The name of a cell renderer registered with the grid.    </span></span>
<span class="line"><span style="color:#A6ACCD;">{  </span></span>
<span class="line"><span style="color:#A6ACCD;">    field: &#39;age&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    cellRenderer: &#39;agGroupCellRenderer&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">  },  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // 3 - Class - Provide your own cell renderer component directly without registering.    </span></span>
<span class="line"><span style="color:#A6ACCD;">{  </span></span>
<span class="line"><span style="color:#A6ACCD;">    field: &#39;sport&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    cellRenderer: MyCustomCellRendererClass,  </span></span>
<span class="line"><span style="color:#A6ACCD;">  },  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // 4 - Function - A function that returns an HTML string or DOM element for display    </span></span>
<span class="line"><span style="color:#A6ACCD;">{  </span></span>
<span class="line"><span style="color:#A6ACCD;">    field: &#39;year&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    cellRenderer: params =&gt; {  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // put the value in bold    </span></span>
<span class="line"><span style="color:#A6ACCD;">return &#39;Value is **&#39; + params.value + &#39;**&#39;;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    }  </span></span>
<span class="line"><span style="color:#A6ACCD;">  }  </span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span></code></pre></div><h4 id="many-renderers-one-column" tabindex="-1">Many Renderers One Column <a class="header-anchor" href="#many-renderers-one-column" aria-label="Permalink to &quot;Many Renderers One Column&quot;">​</a></h4><p>It is also possible to use different renderers for different rows in the same column. To configure this set <code>colDef.cellRendererSelector</code> to a function that returns alternative values for <code>cellRenderer</code> and <code>cellRendererParams</code>.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cellRendererSelector: params =&gt; {  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const type = params.data.type;  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (type === &#39;gender&#39;) {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    return {  </span></span>
<span class="line"><span style="color:#A6ACCD;">      component: &#39;GenderCellRenderer&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      params: {values: [&#39;Male&#39;, &#39;Female&#39;]}  </span></span>
<span class="line"><span style="color:#A6ACCD;">    };  </span></span>
<span class="line"><span style="color:#A6ACCD;">  }  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (type === &#39;mood&#39;) {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    return {  </span></span>
<span class="line"><span style="color:#A6ACCD;">      component: &#39;MoodCellRenderer&#39;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    };  </span></span>
<span class="line"><span style="color:#A6ACCD;">  }  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return undefined;  </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p><img src="`+p+`" alt="img.png"></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import &#39;ag-grid-community/styles/ag-grid.css&#39;;  </span></span>
<span class="line"><span style="color:#A6ACCD;">import &#39;ag-grid-community/styles/ag-theme-alpine.css&#39;;  </span></span>
<span class="line"><span style="color:#A6ACCD;">import { AgGridVue } from &#39;ag-grid-vue&#39;;  </span></span>
<span class="line"><span style="color:#A6ACCD;">import Vue from &#39;vue&#39;;  </span></span>
<span class="line"><span style="color:#A6ACCD;">import GenderRenderer from &#39;./genderRendererVue.js&#39;;  </span></span>
<span class="line"><span style="color:#A6ACCD;">import MoodRenderer from &#39;./moodRendererVue.js&#39;;  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const VueExample = {  </span></span>
<span class="line"><span style="color:#A6ACCD;">  template: \`  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div style=&quot;height: 100%&quot;&gt;      &lt;ag-grid-vue          style=&quot;width: 100%; height: 100%;&quot;          class=&quot;ag-theme-alpine&quot;          id=&quot;myGrid&quot;          :columnDefs=&quot;columnDefs&quot;  </span></span>
<span class="line"><span style="color:#A6ACCD;">          :rowData=&quot;rowData&quot;  </span></span>
<span class="line"><span style="color:#A6ACCD;">          :defaultColDef=&quot;defaultColDef&quot;&gt;  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/ag-grid-vue&gt;      &lt;/div&gt;    \`,  </span></span>
<span class="line"><span style="color:#A6ACCD;">  components: {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;ag-grid-vue&#39;: AgGridVue,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    genderCellRenderer: GenderRenderer,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    moodCellRenderer: MoodRenderer,  </span></span>
<span class="line"><span style="color:#A6ACCD;">  },  </span></span>
<span class="line"><span style="color:#A6ACCD;">  data: function () {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    return {  </span></span>
<span class="line"><span style="color:#A6ACCD;">      columnDefs: [  </span></span>
<span class="line"><span style="color:#A6ACCD;">        { field: &#39;value&#39; },  </span></span>
<span class="line"><span style="color:#A6ACCD;">        {  </span></span>
<span class="line"><span style="color:#A6ACCD;">          headerName: &#39;Rendered Value&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">          field: &#39;value&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">          cellRendererSelector: (params) =&gt; {  </span></span>
<span class="line"><span style="color:#A6ACCD;">            const moodDetails = { component: &#39;moodCellRenderer&#39; };  </span></span>
<span class="line"><span style="color:#A6ACCD;">            const genderDetails = {  </span></span>
<span class="line"><span style="color:#A6ACCD;">              component: &#39;genderCellRenderer&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">              params: {  </span></span>
<span class="line"><span style="color:#A6ACCD;">                values: [&#39;Male&#39;, &#39;Female&#39;],  </span></span>
<span class="line"><span style="color:#A6ACCD;">              },  </span></span>
<span class="line"><span style="color:#A6ACCD;">            };  </span></span>
<span class="line"><span style="color:#A6ACCD;">            if (params.data.type === &#39;gender&#39;) return genderDetails;  </span></span>
<span class="line"><span style="color:#A6ACCD;">            else if (params.data.type === &#39;mood&#39;) return moodDetails;  </span></span>
<span class="line"><span style="color:#A6ACCD;">            else return undefined;          },  </span></span>
<span class="line"><span style="color:#A6ACCD;">        },  </span></span>
<span class="line"><span style="color:#A6ACCD;">        { field: &#39;type&#39; },  </span></span>
<span class="line"><span style="color:#A6ACCD;">      ],  </span></span>
<span class="line"><span style="color:#A6ACCD;">      defaultColDef: { flex: 1 },  </span></span>
<span class="line"><span style="color:#A6ACCD;">      rowData: [  </span></span>
<span class="line"><span style="color:#A6ACCD;">        {value: 14, type: &#39;age&#39;,},  </span></span>
<span class="line"><span style="color:#A6ACCD;">        {value: &#39;female&#39;, type: &#39;gender&#39;,},  </span></span>
<span class="line"><span style="color:#A6ACCD;">        {value: &#39;Happy&#39;, type: &#39;mood&#39;,},  </span></span>
<span class="line"><span style="color:#A6ACCD;">        {value: 21, type: &#39;age&#39;,},  </span></span>
<span class="line"><span style="color:#A6ACCD;">        {value: &#39;male&#39;, type: &#39;gender&#39;,},  </span></span>
<span class="line"><span style="color:#A6ACCD;">        {value: &#39;Sad&#39;, type: &#39;mood&#39;,},  </span></span>
<span class="line"><span style="color:#A6ACCD;">      ],  </span></span>
<span class="line"><span style="color:#A6ACCD;">    };  </span></span>
<span class="line"><span style="color:#A6ACCD;">  },  </span></span>
<span class="line"><span style="color:#A6ACCD;">};  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">new Vue({  </span></span>
<span class="line"><span style="color:#A6ACCD;">  el: &#39;#app&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">  components: {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;my-component&#39;: VueExample,  </span></span>
<span class="line"><span style="color:#A6ACCD;">  },  </span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span></code></pre></div><p>genderRendererVue.js</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export default {  </span></span>
<span class="line"><span style="color:#A6ACCD;">  template: \`  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;span&gt;        &lt;img :src=&quot;imageSource&quot;&gt;{{ value }}      &lt;/span&gt;    \`,  </span></span>
<span class="line"><span style="color:#A6ACCD;">  data: function () {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    return {  </span></span>
<span class="line"><span style="color:#A6ACCD;">      imageSource: null,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      value: &#39;&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    };  </span></span>
<span class="line"><span style="color:#A6ACCD;">  },  </span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeMount() {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    this.image = this.params.value === &#39;Male&#39; ? &#39;male.png&#39; : &#39;female.png&#39;;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    this.imageSource = \`https://www.ag-grid.com/example-assets/genders/\${this.image}\`;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    this.value = this.params.value;  </span></span>
<span class="line"><span style="color:#A6ACCD;">  },  </span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span></code></pre></div><p>moodRendererVue.js</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export default {  </span></span>
<span class="line"><span style="color:#A6ACCD;">  template: &#39;&lt;img style=&quot;width: 20px;&quot; :src=&quot;imgForMood&quot; /&gt;&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">  data() {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    return {  </span></span>
<span class="line"><span style="color:#A6ACCD;">      mood: &#39;Happy&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      imgForMood: null,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    };  </span></span>
<span class="line"><span style="color:#A6ACCD;">  },  </span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    refresh(params) {  </span></span>
<span class="line"><span style="color:#A6ACCD;">      this.params = params;  </span></span>
<span class="line"><span style="color:#A6ACCD;">      this.setMood(params);  </span></span>
<span class="line"><span style="color:#A6ACCD;">    },  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    setMood(params) {  </span></span>
<span class="line"><span style="color:#A6ACCD;">      this.mood = params.value;  </span></span>
<span class="line"><span style="color:#A6ACCD;">      this.imgForMood =  </span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;https://www.ag-grid.com/example-assets/smileys/&#39; +  </span></span>
<span class="line"><span style="color:#A6ACCD;">        (this.mood === &#39;Happy&#39; ? &#39;happy.png&#39; : &#39;sad.png&#39;);  </span></span>
<span class="line"><span style="color:#A6ACCD;">    },  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  },  </span></span>
<span class="line"><span style="color:#A6ACCD;">  created() {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    this.setMood(this.params);  </span></span>
<span class="line"><span style="color:#A6ACCD;">  },  </span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span></code></pre></div><h2 id="group-cell-renderer" tabindex="-1"><em>Group Cell Renderer</em> <a class="header-anchor" href="#group-cell-renderer" aria-label="Permalink to &quot;*Group Cell Renderer*&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const gridOptions = {  </span></span>
<span class="line"><span style="color:#A6ACCD;">  columnDefs: [  </span></span>
<span class="line"><span style="color:#A6ACCD;">    // column definition configured to show group values with the cell renderer set to &#39;group&#39;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    {  </span></span>
<span class="line"><span style="color:#A6ACCD;">      showRowGroup: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      cellRenderer:&#39;agGroupCellRenderer&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      // provide extra params to the cellRenderer  </span></span>
<span class="line"><span style="color:#A6ACCD;">      cellRendererParams: {  </span></span>
<span class="line"><span style="color:#A6ACCD;">        // turn off the row count  </span></span>
<span class="line"><span style="color:#A6ACCD;">        suppressCount: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">        // turn off double click for expand  </span></span>
<span class="line"><span style="color:#A6ACCD;">        suppressDoubleClickExpand: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">        // enable checkbox selection  </span></span>
<span class="line"><span style="color:#A6ACCD;">        checkbox: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">        // provide an inner renderer  </span></span>
<span class="line"><span style="color:#A6ACCD;">        innerRenderer: myInnerRenderer,  </span></span>
<span class="line"><span style="color:#A6ACCD;">        // provide an inner renderer  </span></span>
<span class="line"><span style="color:#A6ACCD;">        innerRendererParams: {foo: &#39;bar&#39;},  </span></span>
<span class="line"><span style="color:#A6ACCD;">        // provide a footer value getter  </span></span>
<span class="line"><span style="color:#A6ACCD;">        footerValueGetter: myFooterValueGetter  </span></span>
<span class="line"><span style="color:#A6ACCD;">      }  </span></span>
<span class="line"><span style="color:#A6ACCD;">    }  </span></span>
<span class="line"><span style="color:#A6ACCD;">  ],  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // other grid options ...  </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p><img src="`+o+`" alt="img.png"></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const columnDefs = [  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // this column shows just the country group values, but has not group renderer, so there is no expand / collapse functionality  </span></span>
<span class="line"><span style="color:#A6ACCD;">  {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    headerName: &#39;Country Group - No Renderer&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    showRowGroup: &#39;country&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    minWidth: 250,  </span></span>
<span class="line"><span style="color:#A6ACCD;">  },  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // same as before, but we show all group values, again with no cell renderer  </span></span>
<span class="line"><span style="color:#A6ACCD;">  { headerName: &#39;All Groups - No Renderer&#39;, showRowGroup: true, minWidth: 240 },  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // add in a cell renderer  </span></span>
<span class="line"><span style="color:#A6ACCD;">  {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    headerName: &#39;Group Renderer A&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    showRowGroup: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    cellRenderer: &#39;agGroupCellRenderer&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    minWidth: 220,  </span></span>
<span class="line"><span style="color:#A6ACCD;">  },  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // add in a field  </span></span>
<span class="line"><span style="color:#A6ACCD;">  {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    headerName: &#39;Group Renderer B&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    field: &#39;city&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    showRowGroup: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    cellRenderer: &#39;agGroupCellRenderer&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    minWidth: 220,  </span></span>
<span class="line"><span style="color:#A6ACCD;">  },  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // add in a cell renderer params  </span></span>
<span class="line"><span style="color:#A6ACCD;">  {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    headerName: &#39;Group Renderer C&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    field: &#39;city&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    minWidth: 240,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    showRowGroup: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    cellRenderer: &#39;agGroupCellRenderer&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    cellRendererParams: {  </span></span>
<span class="line"><span style="color:#A6ACCD;">      suppressCount: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      checkbox: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      innerRenderer: SimpleCellRenderer,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      suppressDoubleClickExpand: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      suppressEnterExpand: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    },  </span></span>
<span class="line"><span style="color:#A6ACCD;">  },  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  { headerName: &#39;Type&#39;, field: &#39;type&#39;, rowGroup: true },  </span></span>
<span class="line"><span style="color:#A6ACCD;">  { headerName: &#39;Country&#39;, field: &#39;country&#39;, rowGroup: true },  </span></span>
<span class="line"><span style="color:#A6ACCD;">  { headerName: &#39;City&#39;, field: &#39;city&#39; },  </span></span>
<span class="line"><span style="color:#A6ACCD;">];  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const gridOptions = {  </span></span>
<span class="line"><span style="color:#A6ACCD;">  columnDefs: columnDefs,  </span></span>
<span class="line"><span style="color:#A6ACCD;">  defaultColDef: {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    flex: 1,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    minWidth: 120,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    resizable: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">  },  </span></span>
<span class="line"><span style="color:#A6ACCD;">  rowData: getData(),  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // we don&#39;t want the auto column here, as we are providing our own cols  </span></span>
<span class="line"><span style="color:#A6ACCD;">  groupDisplayType: &#39;custom&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">  suppressRowClickSelection: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">  groupDefaultExpanded: 1,  </span></span>
<span class="line"><span style="color:#A6ACCD;">  rowSelection: &#39;multiple&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">  groupSelectsChildren: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">  animateRows: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">};  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// setup the grid after the page has finished loading  </span></span>
<span class="line"><span style="color:#A6ACCD;">document.addEventListener(&#39;DOMContentLoaded&#39;, function () {  </span></span>
<span class="line"><span style="color:#A6ACCD;">  const gridDiv = document.querySelector(&#39;#myGrid&#39;);  </span></span>
<span class="line"><span style="color:#A6ACCD;">  new agGrid.Grid(gridDiv, gridOptions);  </span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span></code></pre></div><p>SimpleCellRenderer.js</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class SimpleCellRenderer {  </span></span>
<span class="line"><span style="color:#A6ACCD;">  init(params) {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    const tempDiv = document.createElement(&#39;div&#39;);  </span></span>
<span class="line"><span style="color:#A6ACCD;">    const color = params.node.group ? &#39;coral&#39; : &#39;lightgreen&#39;;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    tempDiv.innerHTML = \`&lt;span style=&quot;background-color: \${color}; padding: 2px; &quot;&gt;\${params.value}&lt;/span&gt;\`;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    this.eGui = tempDiv.firstChild;  </span></span>
<span class="line"><span style="color:#A6ACCD;">  }  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  getGui() {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.eGui;  </span></span>
<span class="line"><span style="color:#A6ACCD;">  }  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  refresh(params) {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    return false;  </span></span>
<span class="line"><span style="color:#A6ACCD;">  }  </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="checkboxselection、checkbox" tabindex="-1"><em>checkboxSelection、checkbox</em> <a class="header-anchor" href="#checkboxselection、checkbox" aria-label="Permalink to &quot;*checkboxSelection、checkbox*&quot;">​</a></h2><p><img src="`+e+`" alt="img.png"></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;ag-grid-vue    style=&quot;width: 100%; height: 400px;&quot;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    class=&quot;ag-theme-alpine&quot;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    :columnDefs=&quot;columnDefs2&quot;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    @grid-ready=&quot;onGridReady2&quot;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    :defaultColDef=&quot;defaultColDef2&quot;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    :autoGroupColumnDef=&quot;autoGroupColumnDef2&quot;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    :rowSelection=&quot;rowSelection2&quot;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    :groupSelectsChildren=&quot;true&quot;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    :suppressRowClickSelection=&quot;true&quot;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    :suppressAggFuncInHeader=&quot;true&quot;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    :rowData=&quot;rowData&quot;&gt;&lt;/ag-grid-vue&gt;  </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> columnDefs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">field</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">athlete</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">headerCheckboxSelection</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">checkboxSelection</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">showDisabledCheckboxes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">field</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sport</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">field</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">year</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">maxWidth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">120</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> gridApi </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> columnApi</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> defaultColDef </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">flex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">minWidth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> rowSelection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isRowSelectable </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> rowData </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 树形结构①，columnDefs配置 rowGroup:true</span></span>
<span class="line"><span style="color:#A6ACCD;">data: function () {  </span></span>
<span class="line"><span style="color:#A6ACCD;">  return {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    columnDefs2: [  </span></span>
<span class="line"><span style="color:#A6ACCD;">      { field: &#39;country&#39;, rowGroup: true, hide: true },  </span></span>
<span class="line"><span style="color:#A6ACCD;">      { field: &#39;sport&#39;, rowGroup: true, hide: true },  </span></span>
<span class="line"><span style="color:#A6ACCD;">      { field: &#39;gold&#39;, aggFunc: &#39;sum&#39; },  </span></span>
<span class="line"><span style="color:#A6ACCD;">      { field: &#39;silver&#39;, aggFunc: &#39;sum&#39; },  </span></span>
<span class="line"><span style="color:#A6ACCD;">      { field: &#39;bronze&#39;, aggFunc: &#39;sum&#39; },  </span></span>
<span class="line"><span style="color:#A6ACCD;">      {  </span></span>
<span class="line"><span style="color:#A6ACCD;">        field: &#39;age&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">        minWidth: 120,  </span></span>
<span class="line"><span style="color:#A6ACCD;">        checkboxSelection: checkboxSelection,  </span></span>
<span class="line"><span style="color:#A6ACCD;">        aggFunc: &#39;sum&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      },  </span></span>
<span class="line"><span style="color:#A6ACCD;">      { field: &#39;year&#39;, maxWidth: 120 },  </span></span>
<span class="line"><span style="color:#A6ACCD;">      { field: &#39;date&#39;, minWidth: 150 },  </span></span>
<span class="line"><span style="color:#A6ACCD;">    ],  </span></span>
<span class="line"><span style="color:#A6ACCD;">    gridApi2: null,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    columnApi2: null,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    defaultColDef2: {  </span></span>
<span class="line"><span style="color:#A6ACCD;">      flex: 1,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      minWidth: 100,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    },  </span></span>
<span class="line"><span style="color:#A6ACCD;">    autoGroupColumnDef2: null,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    rowSelection2: null,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    rowData2: null,  </span></span>
<span class="line"><span style="color:#A6ACCD;">  };  </span></span>
<span class="line"><span style="color:#A6ACCD;">},  </span></span>
<span class="line"><span style="color:#A6ACCD;">created() {  </span></span>
<span class="line"><span style="color:#A6ACCD;">  this.autoGroupColumnDef2 = {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    headerName: &#39;Athlete&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    field: &#39;athlete&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    minWidth: 250,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    cellRenderer: &#39;agGroupCellRenderer&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    cellRendererParams: {  </span></span>
<span class="line"><span style="color:#A6ACCD;">      checkbox,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    },  </span></span>
<span class="line"><span style="color:#A6ACCD;">  };  </span></span>
<span class="line"><span style="color:#A6ACCD;">  this.rowSelection2 = &#39;multiple&#39;;  </span></span>
<span class="line"><span style="color:#A6ACCD;">},  </span></span>
<span class="line"><span style="color:#A6ACCD;">methods: {  </span></span>
<span class="line"><span style="color:#A6ACCD;">  onGridReady2(params) {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    this.gridApi = params.api;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    this.gridColumnApi = params.columnApi;  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    const updateData = (data) =&gt; params.api.setRowData(data);  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    fetch(&#39;https://www.ag-grid.com/example-assets/olympic-winners.json&#39;)  </span></span>
<span class="line"><span style="color:#A6ACCD;">      .then((resp) =&gt; resp.json())  </span></span>
<span class="line"><span style="color:#A6ACCD;">      .then((data) =&gt; updateData(data));  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  },  </span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 为checkboxSelection、checkbox绑定全局函数，区分group为true的节点</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// window.checkboxSelection = function checkboxSelection(params) {  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   return params.node.group === true;  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// };  </span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">checkboxSelection</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">params</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">group</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">};</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">checkbox</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">checkbox</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">params</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">group</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><h2 id="filtering" tabindex="-1">Filtering <a class="header-anchor" href="#filtering" aria-label="Permalink to &quot;Filtering&quot;">​</a></h2><p><img src="`+t+`" alt="img.png"></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;example-wrapper&quot;&gt;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div style=&quot;margin-bottom: 5px;&quot;&gt;  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input type=&quot;text&quot; id=&quot;filter-text-box&quot; placeholder=&quot;Filter...&quot; v-on:input=&quot;onFilterTextBoxChanged()&quot;&gt;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ag-grid-vue</span><span style="color:#A6ACCD;">      </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">500px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ag-theme-alpine</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">columnDefs</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">columnDefs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">grid-ready</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">onGridReady</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">defaultColDef</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">defaultColDef</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">autoGroupColumnDef</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">autoGroupColumnDef</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">rowData</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">rowData</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">treeData</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">animateRows</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">groupDefaultExpanded</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">groupDefaultExpanded</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">getDataPath</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">getDataPath</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">ag-grid-vue</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 树形结构② 设置 :treeData=“true”并且getDataPath 设置合并路径</span></span>
<span class="line"><span style="color:#A6ACCD;">data: function () {  </span></span>
<span class="line"><span style="color:#A6ACCD;">  return {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    columnDefs: [{ field: &#39;jobTitle&#39; }, { field: &#39;employmentType&#39; }],  </span></span>
<span class="line"><span style="color:#A6ACCD;">    gridApi: null,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    columnApi: null,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    defaultColDef: {  </span></span>
<span class="line"><span style="color:#A6ACCD;">      flex: 1,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    },  </span></span>
<span class="line"><span style="color:#A6ACCD;">    autoGroupColumnDef: null,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    rowData: null,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    groupDefaultExpanded: null,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    getDataPath: null,  </span></span>
<span class="line"><span style="color:#A6ACCD;">  };  </span></span>
<span class="line"><span style="color:#A6ACCD;">},  </span></span>
<span class="line"><span style="color:#A6ACCD;">created() {  </span></span>
<span class="line"><span style="color:#A6ACCD;">  this.autoGroupColumnDef = {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    headerName: &#39;Organisation Hierarchy&#39;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    minWidth: 300,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    cellRendererParams: {  </span></span>
<span class="line"><span style="color:#A6ACCD;">      suppressCount: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">      checkbox: true,  </span></span>
<span class="line"><span style="color:#A6ACCD;">    },  </span></span>
<span class="line"><span style="color:#A6ACCD;">  };  </span></span>
<span class="line"><span style="color:#A6ACCD;">  this.rowData = getData();  </span></span>
<span class="line"><span style="color:#A6ACCD;">  this.groupDefaultExpanded = -1;  </span></span>
<span class="line"><span style="color:#A6ACCD;">  this.getDataPath = (data) =&gt; {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    return data.orgHierarchy;  </span></span>
<span class="line"><span style="color:#A6ACCD;">  };  </span></span>
<span class="line"><span style="color:#A6ACCD;">},  </span></span>
<span class="line"><span style="color:#A6ACCD;">methods: {  </span></span>
<span class="line"><span style="color:#A6ACCD;">  onFilterTextBoxChanged() {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    this.gridApi.setQuickFilter(  </span></span>
<span class="line"><span style="color:#A6ACCD;">      document.getElementById(&#39;filter-text-box&#39;).value  </span></span>
<span class="line"><span style="color:#A6ACCD;">    );  </span></span>
<span class="line"><span style="color:#A6ACCD;">  },  </span></span>
<span class="line"><span style="color:#A6ACCD;">  onGridReady(params) {  </span></span>
<span class="line"><span style="color:#A6ACCD;">    this.gridApi = params.api;  </span></span>
<span class="line"><span style="color:#A6ACCD;">    this.gridColumnApi = params.columnApi;  </span></span>
<span class="line"><span style="color:#A6ACCD;">  },  </span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// rowData 数据</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getData</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">rowData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      orgHierarchy</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Erica Rogers</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      jobTitle</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">CEO</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      employmentType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Permanent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      orgHierarchy</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Erica Rogers</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Malcolm Barrett</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      jobTitle</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Exec. Vice President</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      employmentType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Permanent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      orgHierarchy</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Erica Rogers</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Malcolm Barrett</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Esther Baker</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      jobTitle</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Director of Operations</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      employmentType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Permanent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      orgHierarchy</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Erica Rogers</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Malcolm Barrett</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Esther Baker</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Brittany Hanson</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      jobTitle</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Fleet Coordinator</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      employmentType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Permanent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      orgHierarchy</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Erica Rogers</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Malcolm Barrett</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Esther Baker</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Brittany Hanson</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Leah Flowers</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      jobTitle</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Parts Technician</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      employmentType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Contract</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      orgHierarchy</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Erica Rogers</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Malcolm Barrett</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Esther Baker</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Brittany Hanson</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tammy Sutton</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      jobTitle</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Service Technician</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      employmentType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Contract</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      orgHierarchy</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Erica Rogers</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Malcolm Barrett</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Esther Baker</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Derek Paul</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      jobTitle</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Inventory Control</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      employmentType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Permanent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      orgHierarchy</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Erica Rogers</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Malcolm Barrett</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Francis Strickland</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      jobTitle</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VP Sales</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      employmentType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Permanent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      orgHierarchy</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Erica Rogers</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Malcolm Barrett</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Francis Strickland</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Morris Hanson</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      jobTitle</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Sales Manager</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      employmentType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Permanent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      orgHierarchy</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Erica Rogers</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Malcolm Barrett</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Francis Strickland</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Todd Tyler</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      jobTitle</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Sales Executive</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      employmentType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Contract</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      orgHierarchy</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Erica Rogers</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Malcolm Barrett</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Francis Strickland</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Bennie Wise</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      jobTitle</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Sales Executive</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      employmentType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Contract</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      orgHierarchy</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Erica Rogers</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Malcolm Barrett</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Francis Strickland</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Joel Cooper</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      jobTitle</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Sales Executive</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      employmentType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Permanent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  ]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">rowData</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h3><h4 id="groupselectschildren-树形子级勾选" tabindex="-1">groupSelectsChildren 树形子级勾选 <a class="header-anchor" href="#groupselectschildren-树形子级勾选" aria-label="Permalink to &quot;groupSelectsChildren 树形子级勾选&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">:groupSelectsChildren=&quot;true&quot;</span></span></code></pre></div>`,42),D=[r];function y(F,C,A,i,d,u){return n(),a("div",null,D)}const h=s(c,[["render",y]]);export{m as __pageData,h as default};
