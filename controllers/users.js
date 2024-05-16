const { getListOfEmailDomains } = require('../services/users');

module.exports = {
    listOfEmailDomains: async (req,res) => {
        try {
            const listOfDomainsResp = await getListOfEmailDomains();
            return res.status(200).json({data: listOfDomainsResp});
        } catch (err) {
            return res.status(500).json({message: 'error', error: err});
        }
    }
}