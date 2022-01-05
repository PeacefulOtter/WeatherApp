

export const getRequest = ( path: string, location: string, callback: (data: any) => void ) => {
    const CREDENTIALS = {
        method:'POST',
        body: JSON.stringify({location: location}),
        headers: new Headers()
    }
    fetch(path, CREDENTIALS)
        .then(res => res.json())
        .then(data => callback(data));
}