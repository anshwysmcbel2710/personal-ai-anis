# Personal AI Factory v1 - OCR Summarizer Microservice

## 📌 Overview
This repository contains a production-grade **serverless microservice** deployed on **Vercel** designed for the **Personal AI Factory v1 pipeline**.  
It provides an HTTP API endpoint to **extract clean text from textual PDFs** and return parsed content in JSON format for use in **n8n automations**.

### ✨ Key Capabilities
| Feature | Description |
|--------|-------------|
| Textual PDF parsing | Extracts raw text from machine-readable PDF files |
| Serverless deployment | Auto-scaled via Vercel Functions |
| Lightweight & fast | No OCR engine required for V1 |
| REST API | Single GET/POST endpoint returning structured JSON |
| Compatible integrations | n8n, Zapier, Make, Sheets, Vector DB, AI Summarizers |
| Zero dependency on external paid OCR | Completely local parsing via `pdf-parse` |

---

## 📂 Architecture
```
Google Drive → n8n RAW lane → Download File
↓
/api/ocr-summarize (Vercel)
↓
return clean extracted text
↓
n8n CLEAN lane → Google Sheets / DB / AI
```

---

## 🚀 API Endpoint Usage
Once deployed to Vercel, the endpoint will look like:
```
GET https://<your-vercel-project>.vercel.app/api/ocr-summarize?fileURL=<ENCODED-PDF-URL>
```

### Example Response
```json
{
  "ok": true,
  "text": "Extracted text content from PDF..."
}
```

---

## 🛠 Tech Stack
| Component | Technology |
|-----------|------------|
| Runtime | Vercel Serverless Functions (NodeJS 18+) |
| Language | TypeScript |
| PDF Parsing | pdf-parse |
| HTTP Client | node-fetch |
| Deployment | Vercel CI/CD |
| Trigger | n8n HTTP Request Node |

---

## 📦 Project Structure
```
personal-ai-factory-v1-ocr-summarizer/
│── api/
│   └── ocr-summarize.ts
│── types/
│   └── pdf-parse.d.ts
│── package.json
│── tsconfig.json
│── vercel.json
│── README.md
└── .gitignore
```

---

## 🧠 Serverless Function Code (TypeScript)
```ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import pdfParse from 'pdf-parse';
import fetch from 'node-fetch';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const fileURL =
      (req.query.fileURL as string) ||
      (req.body && (req.body as any).fileURL);

    if (!fileURL) {
      return res.status(400).json({
        ok: false,
        error: "Missing fileURL parameter",
      });
    }

    const response = await fetch(fileURL);

    if (!response.ok) {
      return res.status(400).json({
        ok: false,
        error: "Unable to fetch file from provided URL",
      });
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    const data = await pdfParse(buffer);

    const extractedText = data?.text?.trim() ?? "";

    return res.status(200).json({
      ok: true,
      text: extractedText,
    });
  } catch (err: any) {
    return res.status(500).json({
      ok: false,
      error: err.message || String(err),
    });
  }
}
```

---

## ⚙ vercel.json
```json
{
  "version": 2,
  "functions": {
    "api/ocr-summarize.ts": {
      "runtime": "nodejs18.x",
      "memory": 2048,
      "maxDuration": 60
    }
  }
}
```

---

## 📥 n8n Integration Example
### Add HTTP Request node settings:
```
Method: GET
URL: https://<your-vercel-project>.vercel.app/api/ocr-summarize?fileURL={{$json["downloadUrl"]}}
Response Format: JSON
Save output to: clean_text
```

---

## 🧪 Testing With Curl / Postman
```bash
curl "https://<your-vercel-project>.vercel.app/api/ocr-summarize?fileURL=https://example.com/sample.pdf"
```

---

## 📄 License
MIT — Free to use and modify

---

## 📣 Author
**Ansh Srivastava**  
AI & Software Engineer — Building Personal AI - ANIS

---

## 📍 Roadmap
| Version | Update |
|---------|--------|
| V1 | Textual PDF parsing |
| V2 | OCR for scanned PDFs & images (Tesseract.js / Google Vision) |
| V3 | AI Summarization + Chunking + Vector DB storage |
| V4 | Voice + Realtime Agent Integration |
