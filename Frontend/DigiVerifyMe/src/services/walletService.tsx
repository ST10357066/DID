

// GET /wallet/
// HTTP 200 OK
// Allow: GET, OPTIONS
// Content-Type: application/json
// Vary: Accept

// {
//     "message": "Welcome to Wallet!",
//     "available_urls": {
//         "home": "http://127.0.0.1:8001/wallet/",
//         "credential-list": "http://127.0.0.1:8001/wallet/wallet/credentials/",
//         "credential-detail": "http://127.0.0.1:8001/wallet/wallet/credentials/1/",
//         "revoke-credential": "http://127.0.0.1:8001/wallet/wallet/credentials/1/revoke/"
//     }
// }