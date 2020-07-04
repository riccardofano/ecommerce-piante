export async function fetchGetJSON(url: string) {
  try {
    const data = await fetch(url).then((res) => {
      console.log(res);
      return res.json();
    });
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetchPostJSON(url: string, data?: {}) {
  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data || {}),
    });
    console.log(response);
    return await response.json();
  } catch (err) {
    throw new Error(err.message);
  }
}
