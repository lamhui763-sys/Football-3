export default async function handler(req: any, res: any) {
  try {
    // Dynamically import the Express app from server.ts
    const { default: app } = await import("../server.ts");
    return app(req, res);
  } catch (err: any) {
    console.error("Vercel Serverless Function Init Error:", err);
    return res.status(500).json({
      success: false,
      error: "Vercel Serverless Function Initialization Failed",
      message: err?.message || String(err),
      stack: err?.stack || ""
    });
  }
}
