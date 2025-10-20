export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    message: "Lira Glow Admin API is running smoothly ✨",
    timestamp: new Date().toISOString()
  });
}
