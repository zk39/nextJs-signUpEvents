import SingleEventsCard from "@/components/events/eventsCard";

const Page = ({ data }) => {
    // console.log(data);
    return (
        <><SingleEventsCard data={data} /><form action="/send-data-here" method="post">
            
        </form></>
    )
};
export default Page;
export async function getStaticPaths() {
    const data = await import("data/data.json");
    const allEvents = data.allEvents;

    const allPaths = allEvents.map((path) => {
        return {
            params: {
                //cat stands for city category
                cat: path.city,
                id: path.id,

            },
        };
      });
    return { paths: allPaths, fallback: false }

}

export async function getStaticProps(context) {
    
    const id = context.params.id;
    const { allEvents } = await import('data/data.json');
    //using find method to get specific data
    const eventData = allEvents.find(ev => 
        id == ev.id 
    )
   
        
    return {
        
        props: {
            data: eventData
            
        },
    }
}