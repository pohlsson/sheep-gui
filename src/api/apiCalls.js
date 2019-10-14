import {fetch} from "fetch";

export const put = (url, data) => (
    fetch(url,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        },
    )
);