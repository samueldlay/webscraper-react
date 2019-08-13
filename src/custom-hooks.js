import { useEffect, useState } from "react";

function useFetch(url, options, bodyMethod) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const inputs = ((url, options, bodyMethod) => {
    const { stringify } = JSON;
    function requestAsArrayEntries(request) {
      if (!request instanceof Request)
        throw Object.assign(new Error(), {
          name: "TypeError",
          message: "Argument must be a Request object"
        });
      request = request.clone();

      function entriesFromObject(obj) {
        const entries = [];
        for (const key in obj)
          if (
            ["boolean", "number", "string"].includes(typeof obj[key]) ||
            obj[key] === null
          )
            entries.push([key, obj[key]]);
        return entries.sort();
      }

      return [
        ...entriesFromObject(request),
        ["headers", [...request.headers].sort()],
        ["signal", entriesFromObject(request.signal)]
        // ['body', await request.text()], // requires async
      ].sort();
    }

    function objectFromNestedEntries(arrayOfEntries) {
      if (!Array.isArray(arrayOfEntries)) return arrayOfEntries;
      const obj = {};
      for (const [key, value] of arrayOfEntries) {
        obj[key] = objectFromNestedEntries(value);
      }
      return obj;
    }

    if (url instanceof Request) {
      url = stringify(objectFromNestedEntries(requestAsArrayEntries(url)));
    }
    return stringify(url) + stringify(options) + stringify(bodyMethod);
  })(url, options, bodyMethod);

  useEffect(() => {
    // console.log(inputs);
    setIsLoading(true);
    setData(null);
    setError(null);
    (async () => {
      try {
        if (!url)
          throw Object.assign(new Error(), {
            name: "FetchError",
            message: "No URL provided"
          });
        const res = await fetch(url, options);
        if (res.ok) {
          if (
            ["arrayBuffer", "blob", "formData", "json", "text"].includes(
              bodyMethod
            )
          )
            setData(await res[bodyMethod]());
          else setData(await res.text());
        } else
          throw Object.assign(new Error(), {
            name: "FetchError",
            message: "Response not OK",
            response: res
          });
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [inputs]); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, error, isLoading };
}

function useStateObject(initialState = {}) {
  const [state, replaceState] = useState(initialState);
  const setState = newState =>
    replaceState(state => ({ ...state, ...newState }));
  return [state, setState];
}

export { useFetch, useStateObject };
