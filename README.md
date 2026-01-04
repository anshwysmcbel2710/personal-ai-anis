<h1>🏷️ Project Title</h1>
<p><strong>OCR & PDF Text Extraction Microservice</strong></p>

<div class="section">
  <h2>🧾 Executive Summary</h2>
  <p>
    The <strong>Personal AI Factory v1 – OCR & PDF Text Extraction Microservice</strong> is a production-grade,
    serverless backend component designed to extract clean, machine-readable text from textual PDF documents.
    Built using <strong>TypeScript</strong> and deployed as a <strong>Vercel Serverless Function</strong>, this
    microservice exposes a single HTTP API endpoint that fetches a remote PDF file, parses its textual content
    using <code>pdf-parse</code>, and returns structured JSON output.
  </p>
  <p>
    This service is optimized for automation-first architectures, specifically downstream integration with
    <strong>n8n pipelines</strong>. Version 1 explicitly supports <strong>text-based PDFs only</strong> and
    does not perform OCR on scanned documents or images.
  </p>
</div>

<div class="section">
  <h2>📑 Table of Contents</h2>
  <ol>
    <li>🧩 Project Overview</li>
    <li>🎯 Objectives & Goals</li>
    <li>✅ Acceptance Criteria</li>
    <li>💻 Prerequisites</li>
    <li>⚙️ Installation & Setup</li>
    <li>🔗 API Documentation</li>
    <li>🖥️ UI / Frontend</li>
    <li>🔢 Status Codes</li>
    <li>🚀 Features</li>
    <li>🧱 Tech Stack & Architecture</li>
    <li>🛠️ Workflow & Implementation</li>
    <li>🧪 Testing & Validation</li>
    <li>🔍 Validation Summary</li>
    <li>🧰 Verification Testing Tools</li>
    <li>🧯 Troubleshooting & Debugging</li>
    <li>🔒 Security & Secrets</li>
    <li>☁️ Deployment (Vercel)</li>
    <li>⚡ Quick-Start Cheat Sheet</li>
    <li>🧾 Usage Notes</li>
    <li>🧠 Performance & Optimization</li>
    <li>🌟 Enhancements & Features</li>
    <li>🧩 Maintenance & Future Work</li>
    <li>🏆 Key Achievements</li>
    <li>🧮 High-Level Architecture</li>
    <li>🗂️ Folder Structure</li>
    <li>🧭 How to Demonstrate Live</li>
    <li>💡 Summary, Closure & Compliance</li>
  </ol>
</div>

<div class="section">
  <h2>🧩 Project Overview</h2>
  <p>
    This microservice functions as a stateless PDF text extraction API within the Personal AI Factory ecosystem.
  </p>
  <ul>
    <li>Accepts a publicly accessible PDF URL</li>
    <li>Downloads the PDF at runtime</li>
    <li>Parses textual content using <code>pdf-parse</code></li>
    <li>Returns extracted text as structured JSON</li>
    <li>Designed for synchronous HTTP execution</li>
  </ul>
</div>

<div class="section">
  <h2>🎯 Objectives & Goals</h2>
  <ul>
    <li>Provide a reliable text extraction layer for automation workflows</li>
    <li>Eliminate dependency on paid OCR services for textual PDFs</li>
    <li>Maintain fast cold-start and execution times</li>
    <li>Enable seamless integration with n8n HTTP Request nodes</li>
    <li>Serve as a foundational V1 component for future OCR and AI expansion</li>
  </ul>
</div>

<div class="section">
  <h2>✅ Acceptance Criteria</h2>
  <ul>
    <li>HTTP 200 returned for valid textual PDFs</li>
    <li>Structured error responses for invalid input</li>
    <li>No OCR processing in Version 1</li>
    <li>Deployable on Vercel without custom infrastructure</li>
    <li>JSON output compatible with automation tools</li>
  </ul>
</div>

<div class="section">
  <h2>💻 Prerequisites</h2>
  <ul>
    <li>Node.js 18 or higher</li>
    <li>Vercel CLI (for deployment)</li>
    <li>Publicly accessible PDF URLs</li>
    <li>Basic REST API knowledge</li>
  </ul>
</div>

<div class="section">
  <h2>⚙️ Installation & Setup</h2>
  <ol>
    <li>Clone the repository</li>
    <li>Install dependencies</li>
    <li>Verify Node.js version compatibility</li>
    <li>Review TypeScript configuration</li>
    <li>Prepare Vercel deployment</li>
  </ol>
</div>

<div class="section">
  <h2>🔗 API Documentation</h2>
  <p><strong>Endpoint:</strong> <code>/api/ocr-summarize</code></p>
  <p><strong>Method:</strong> GET / POST</p>
  <p><strong>Input:</strong> Public PDF URL (<code>fileURL</code>)</p>
  <p><strong>Output:</strong> JSON with extracted text</p>
</div>

<div class="section">
  <h2>🖥️ UI / Frontend</h2>
  <p>
    This project does not include a frontend or UI layer. It is designed for backend-to-backend
    and automation-based consumption via n8n, Postman, or Curl.
  </p>
</div>

<div class="section">
  <h2>🔢 Status Codes</h2>
  <table>
    <tr><th>Status</th><th>Description</th></tr>
    <tr><td>200</td><td>Successful extraction</td></tr>
    <tr><td>400</td><td>Invalid or missing fileURL</td></tr>
    <tr><td>500</td><td>Internal server error</td></tr>
  </table>
</div>

<div class="section">
  <h2>🚀 Features</h2>
  <ul>
    <li>Textual PDF parsing</li>
    <li>Serverless execution</li>
    <li>Automation-friendly JSON output</li>
    <li>No paid OCR dependencies</li>
  </ul>
</div>

<div class="section">
  <h2>🧱 Tech Stack & Architecture</h2>
  <ul>
    <li>Runtime: Vercel Serverless Functions (Node.js 18)</li>
    <li>Language: TypeScript</li>
    <li>PDF Parsing: pdf-parse</li>
    <li>HTTP Client: node-fetch</li>
    <li>Deployment: Vercel</li>
  </ul>
  <pre>
Client / n8n
     |
     v
Vercel Serverless Function
     |
     v
pdf-parse
     |
     v
JSON Response
  </pre>
</div>

<div class="section">
  <h2>🛠️ Workflow & Implementation</h2>
  <ol>
    <li>Receive HTTP request</li>
    <li>Validate input parameters</li>
    <li>Fetch PDF from URL</li>
    <li>Parse text using pdf-parse</li>
    <li>Return structured JSON response</li>
  </ol>
</div>

<div class="section">
  <h2>🧪 Testing & Validation</h2>
  <table>
    <tr>
      <th>ID</th><th>Area</th><th>Command</th><th>Expected Output</th><th>Explanation</th>
    </tr>
    <tr>
      <td>T-01</td><td>API</td><td>GET with valid PDF</td><td>200 + text</td><td>Valid textual PDF</td>
    </tr>
    <tr>
      <td>T-02</td><td>API</td><td>Missing fileURL</td><td>400 error</td><td>Validation check</td>
    </tr>
  </table>
</div>

<div class="section">
  <h2>🔍 Validation Summary</h2>
  <ul>
    <li>Input validation enforced</li>
    <li>Error handling implemented</li>
    <li>Automation compatibility verified</li>
  </ul>
</div>

<div class="section">
  <h2>🧰 Verification Testing Tools</h2>
  <ul>
    <li>Curl</li>
    <li>Postman</li>
    <li>n8n HTTP Request node</li>
  </ul>
</div>

<div class="section">
  <h2>🧯 Troubleshooting & Debugging</h2>
  <ul>
    <li>Ensure PDF is publicly accessible</li>
    <li>Confirm PDF is text-based</li>
    <li>Check Vercel function logs</li>
  </ul>
</div>

<div class="section">
  <h2>🔒 Security & Secrets</h2>
  <ul>
    <li>No secrets or API keys required</li>
    <li>Stateless execution</li>
    <li>Public-file access only</li>
  </ul>
</div>

<div class="section">
  <h2>☁️ Deployment (Vercel)</h2>
  <ul>
    <li>Node.js 18 runtime</li>
    <li>2048 MB memory</li>
    <li>60-second execution limit</li>
  </ul>
</div>

<div class="section">
  <h2>⚡ Quick-Start Cheat Sheet</h2>
  <ol>
    <li>Deploy to Vercel</li>
    <li>Copy endpoint URL</li>
    <li>Provide public PDF URL</li>
    <li>Receive extracted text</li>
  </ol>
</div>

<div class="section">
  <h2>🧾 Usage Notes</h2>
  <ul>
    <li>Textual PDFs only</li>
    <li>No OCR support in V1</li>
    <li>Designed for preprocessing pipelines</li>
  </ul>
</div>

<div class="section">
  <h2>🧠 Performance & Optimization</h2>
  <ul>
    <li>Lightweight dependencies</li>
    <li>Fast cold-start execution</li>
    <li>Performance dependent on PDF size</li>
  </ul>
</div>

<div class="section">
  <h2>🌟 Enhancements & Features</h2>
  <p>Current version supports textual PDF extraction only.</p>
</div>

<div class="section">
  <h2>🧩 Maintenance & Future Work</h2>
  <ul>
    <li>OCR for scanned PDFs</li>
    <li>AI summarization layer</li>
    <li>Chunking and vector storage</li>
  </ul>
</div>

<div class="section">
  <h2>🏆 Key Achievements</h2>
  <ul>
    <li>Production-ready serverless microservice</li>
    <li>Zero-cost alternative for textual PDF extraction</li>
    <li>Automation-first design</li>
  </ul>
</div>

<div class="section">
  <h2>🧮 High-Level Architecture</h2>
  <p>
    The service acts as an independent extraction node within the Personal AI Factory,
    feeding structured text into downstream automation and AI systems.
  </p>
</div>

<div class="section">
  <h2>🗂️ Folder Structure</h2>
  <pre>
ocr-summarizer-microservice/
├── api/
│   └── ocr-summarize.ts
├── types/
│   └── pdf-parse.d.ts
├── node_modules/
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
  </pre>
</div>

<div class="section">
  <h2>🧭 How to Demonstrate Live</h2>
  <ol>
    <li>Deploy to Vercel</li>
    <li>Send GET request with PDF URL</li>
    <li>Observe extracted text response</li>
  </ol>
</div>

<div class="section">
  <h2>💡 Summary, Closure & Compliance</h2>
  <p>
    This repository delivers a compliant, production-ready, serverless PDF text extraction
    microservice aligned with Personal AI Factory v1 standards.
  </p>
  <p class="small">
    License: MIT<br />
    Author: Ansh Srivastava<br />
    Status: Stable – Production Ready (V1)
  </p>
</div>

</body>
</html>

