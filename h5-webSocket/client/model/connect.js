const port = 9000
const host = '10.31.160.54'
export const serverURL = `ws://${host}:${port}`
export const client = new WebSocket(serverURL)