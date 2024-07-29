export const dataPromise = fetch(
  "https://api.airtable.com/v0/appABaSvqo4hvlcKJ/List data",
  {
    headers: {
      Authorization:
        "Bearer patYJxbij84aqWcSR.7700ce5a0bc54ffa25e3dec94158c2a75b51b0c9b509154866727333d9467315",
    },
  },
)
  .then((r) => r.json())
  .then(({ records }) => {
    return records.map(function (el) {
      let objElemData = el.fields;
      return objElemData;
    });
  });
