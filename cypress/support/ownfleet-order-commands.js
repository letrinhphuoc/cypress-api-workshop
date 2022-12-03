export const loginAsMerchantUser = (merchantInfo) => {
    cy.request({
        method: "POST",
        url: 'abc',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: merchantInfo,
        failOnStatusCode:false
    })
};

export const addAOwnfleetOrder = (userId,token,payLoad) => {
    cy.request({
        method: "POST",
        url: `/abc/${userId}/demo`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token

        },
        body: payLoad
    })
};

export const loginAsMerchantManager = (managerInfo) => {
    cy.request({
        method: "POST",
        url: "test",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: managerInfo
    })
};

export const acceptOwnfleetOrder = (merchant_id,order_id,manager_token,cooking_time) => {
    cy.request({
        method: "PUT",
        url: `/abc/${merchant_id}/abc/${order_id}/abc`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': manager_token
        },
        body: cooking_time
    })
};

export const confirmMerchantOrder = (merchant_id,order_id,manager_token) => {
    cy.request({
        method: "PUT",
        url: `/abc/${merchant_id}/abc/${order_id}/abc`,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': manager_token
        }
    })
};

export const doneOwnfleetOrder = (merchant_id,order_id,manager_token) => {
    cy.request({
        method: "PUT",
        url: `/abc/${merchant_id}/abc/${order_id}/abc`,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': manager_token
        }
    })
}


