export default function handler(req, res) {
  const allowedTransformTypes = ['lower', 'upper'];
  const { type, word } = req.query;

  if (!word) return res.status(400).json({ error: "World should not be empty" });
  if (!allowedTransformTypes.includes(type)) return res.status(400).json({ error: "Not allowed type" });

  const transformed = type === 'lower' ? word.toLowerCase() : word.toUpperCase();
  return res.status(200).json({ result: transformed });

}