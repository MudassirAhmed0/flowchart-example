import getPagesData from "./getPagesData";

const getFormattedNavigationData = async (data, isAr) => {
  const {
    pages: { data: pagesData },
  } = await getPagesData(isAr);

  let newData = [];
  data.forEach((navItem) => {
    pagesData.forEach((page) => {
      if (navItem.page.entry_id == page.id) {
        const newItem = {
          slug: page.slug,
          label: page.title,
        };
        newData.push(newItem);
      }
    });
  });

  return newData;
};

export default getFormattedNavigationData;
