import EventCategoryPage from "@/components/events/catEvent";

const EventPerCityPage = ({ data,pageName }) => {
  return (
    <EventCategoryPage data={data} pageName={pageName}/>
  );
};
export default EventPerCityPage;

export async function getStaticPaths() {
  const { events_categories } = await import("data/data.json");

  const allPaths = events_categories.map((temp) => {
    return {
      params: {
        cat: temp.id.toString(),
      },
    };
  });
  //console.log(allPaths);
  return {
    //all the paths that can be pre-rendered
    paths: allPaths,
    //{ fallback: false } means other routes should 404
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // get the possible city-name (id)
  const id = context?.params.cat;
  const { allEvents } = await import("data/data.json");

  //filtering all the event data with specific city name
  const data = allEvents.filter((temp) => temp.city === id);
  //console.log(data);
  return {
    props: { data,pageName:id },
  };
}
