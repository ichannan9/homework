export function validateBody(requiredFields) {
  return (req, res, next) => {
    const missing = requiredFields.filter((f) => !req.body[f]);
    if (missing.length) {
      return res
        .status(400)
        .json({ message: `${missing.join(", ")} 필수 입력입니다.` });
    }
    next();
  };
}
