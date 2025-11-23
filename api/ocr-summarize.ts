import type { VercelRequest, VercelResponse } from '@vercel/node';
import pdfParse from "pdf-parse";
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

    return res.status(200).json({ ok: true, text: extractedText });
  } catch (err: any) {
    return res.status(500).json({
      ok: false,
      error: err.message || String(err),
    });
  }
}
