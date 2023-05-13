
// Middleware
// const checkRequest = (req, res, next) => {
//   if (req.body && req.body.name && req.body.url && req.body.category && req.body.is_favorite) {
//       return next();
//   } else {
//       res.status(400).json({ error: "Body is missing information or body is not present at all"})
//   }
// };

// const checkId = (req, res, next) => {
//   if (req.params.id) {
//       next();
//   } else {
//       res.status(400).json({ error: "Body is missing information or body is not present at all"});
//   };
// };

// const validateURL = (req, res, next) => {
//   if (
//     req.body.url.substring(0, 7) === "http://" ||
//     req.body.url.substring(0, 8) === "https://"
//   ) {
//     return next();
//   } else {
//     res
//       .status(400)
//       .json({ error: `You forgot to start your url with http:// or https://` });
//   };
// };

// module.exports = {
//   checkRequest,
//   checkId,
//   //validateURL
// }











const checkName = (req, res, next) => {
    if (req.body.name) {
      next()
    } else {
      res.status(400).json({ error: "Name is required" });
    }
  };
  
  
  const checkBoolean = (req, res, next) => {
    const { is_favorite } = req.body;
    if (
      is_favorite == "true" ||
      is_favorite == "false" ||
      is_favorite == undefined
    ) {
      next();
    } else {
      res.status(400).json({ error: "is_favorite must be a boolean value" });
    }
  };
  
  module.exports = { checkBoolean, checkName };