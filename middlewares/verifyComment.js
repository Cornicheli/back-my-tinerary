const { notyourComment, commentNotFound } = require("../config/responses");

const verifyComment = (model) => [
    async (req, res, next) => {
        let comment = await model.findOne({ _id: req.params.id });
        if (comment) {
            if (comment.userId.equals(req.user.id)) {
                return next();
            }
            return notyourComment(req, res);
        }else{
        return commentNotFound(req, res);
    }}
];

module.exports = verifyComment;