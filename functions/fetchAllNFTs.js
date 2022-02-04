
exports = async function({ query, headers, inbody}, response) {
    const baseURL = "https://data.mongodb-api.com/app/data-mskrc/endpoint/data/beta/action/find";
    const axios = require('axios');
    let body = {
            "collection":"nft",
            "database":"solana",
            "dataSource":"solman",
            "projection": {"volume_7day":1, "project.img_url":1, "project.display_name":1, "average_price":1, "num_of_token_listed": 1}
            }
            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Request-Headers': '*',
                    'api-key': 'mQ8yYAWLdUEDNo2pUd5a6XG6Kgs60PrdAE1Duruy4bo3zbT1AIsk6Hfdy0w182nP'
                }
              }
    
        return await axios.post(baseURL, body, config);

};
