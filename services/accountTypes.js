const AccountTypeModal = require('../models/accountTypes');

const getAllAccountTypes = async () => {
    try {
        const data = await AccountTypeModal.find({})
        return data;
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getAllAccountTypes
}