const fetcher = async (url, method = 'GET', data = null, isFormData = false) => {
  const options = {
    method,
  };

  if (data) {
    if (isFormData) {
      options.body = data;
    } else {
      options.headers = {
        'Content-Type': 'application/json',
      };
      options.body = JSON.stringify(data);
    }
  }

  const res = await fetch(url, options);

  if (!res.ok) {
    const errorText = await res.json();
    throw Object.assign(new Error(errorText.message), { status: res.status });
  }

  return res.json();
};

export default fetcher;
