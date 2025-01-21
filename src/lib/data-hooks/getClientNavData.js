import { useEffect, useState } from "react";
import axios from "axios";

const getClientNavData = (isAr) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const variables = {
        site: isAr ? "arabic" : "default",
      };

      const graphqlQuery = `
        query MainNav($site: String!) {
          nav: nav(handle: "main_navigation") {
            title
            handle
            tree(site: $site) {
              page {
                title
                entry_id
                url
              }
            }
          }
        }
      `;

      const url = "https://backend.saudibanks.com.sa/graphql";

      try {
        const response = await axios.post(url, {
          query: graphqlQuery,
          variables,
        });

        setData(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isAr]);

  return { data, loading, error };
};

export default getClientNavData;
