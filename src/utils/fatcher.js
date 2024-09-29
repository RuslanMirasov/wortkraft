const fetcher = async (url, method = 'GET', data = null) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const res = await fetch(url, options);

  if (!res.ok) {
    // if (res.status === 401) {
    //   return null;
    // }
    const errorText = await res.json();
    throw Object.assign(new Error(errorText.message), { status: res.status });
  }

  return res.json();
};

export default fetcher;
