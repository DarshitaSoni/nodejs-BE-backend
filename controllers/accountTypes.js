const AccountTypeModal = require('../models/accountTypes');
const { getAllAccountTypes } = require('../services/accountTypes');

module.exports = {
    getAccountTypes: async (req,res) => {
        try {
            const accountTypeResponse = await getAllAccountTypes()
            if (accountTypeResponse && accountTypeResponse.length > 0) {
                accountTypeResponse.forEach(accountTypeRes => {
                    accountTypeRes['slug'] = accountTypeRes['_id'];
                    accountTypeRes['id'] = accountTypeRes['_id'];
                });
            }
            return res.status(200).json({data: accountTypeResponse});
        } catch (err) {
            return res.status(500).json({message: 'error', error: err});
        }
    }
}