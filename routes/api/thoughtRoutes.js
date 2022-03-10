const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtcontroller');

router
.route('/').get(getThoughts);

router
.route('/:userId').post(createThought);

router
.route('/:thoughtId').get(getSingleThought).put(updateThought);

router
.route('/:userId/:thoughtId').delete(deleteThought);

router
.route('/:thoughtId/reactions').post(addReaction);

router
.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.exports = router;