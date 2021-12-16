import { CLIENT_ID, CLIENT_SECRET } from "./keys"


async function getAccessToken() {
    let response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type" : "application/x-www-form-urlencoded", 
            "Authorization" : "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET)
        },
        body: "grant_type=client_credentials"
    })
    let result = await response.json()
    return result.access_token
}


export async function request(url) {
    let response = await fetch(url, {
        headers: {
            "Authorization": `Bearer ${await getAccessToken()}`,
            "Content-Type": "application/json"
        }
    })
    let result = await response.json()
    return result
}