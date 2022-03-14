const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    removeUser,
    addFriend,
    deleteFriend
} = require('../../controllers/usercontroller');

router
.route('/').get(getUsers).post(createUser)

router
.route('/:id').get(getSingleUser).put(updateUser).delete(removeUser)

router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);


module.exports = router;