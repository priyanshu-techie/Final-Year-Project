import { FaRegStar } from "react-icons/fa"

const messages = [
    {id:174, from: 'John', subject: 'Operation filch this is the last message is of the game.', content: 'Meeting at 10am this is my message andd i am sending this to test my emial app.' , time: '10:00am', read: false},
    {id:175, from: 'Jane', subject: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, minima?', content: 'Lunch Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore asperiores odit illo vitae porro exercitationem est, nulla officiis nam quis?at 12pm', time: '11:00am', read: true},
    {id:176, from: 'John', subject: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, minima?', content: 'MeetLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore asperiores odit illo vitae porro exercitationem est, nulla officiis nam quis?ing at 10am', time: '10:00am', read: false},
    {id:177, from: 'Jane', subject: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, minima?', content: 'Lunch Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore asperiores odit illo vitae porro exercitationem est, nulla officiis nam quis?at 12pm', time: '11:00am', read: true},
    {id:178, from: 'John', subject: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, minima?', content: 'MeetLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore asperiores odit illo vitae porro exercitationem est, nulla officiis nam quis?ing at 10am', time: '10:00am', read: false},
    {id:179, from: 'Jane', subject: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, minima?', content: 'Lunch Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore asperiores odit illo vitae porro exercitationem est, nulla officiis nam quis?at 12pm', time: '11:00am', read: true},
    {id:180, from: 'John', subject: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, minima?', content: 'MeetLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore asperiores odit illo vitae porro exercitationem est, nulla officiis nam quis?ing at 10am', time: '10:00am', read: false},
    {id:181, from: 'Jane', subject: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, minima?', content: 'Lunch Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore asperiores odit illo vitae porro exercitationem est, nulla officiis nam quis?at 12pm', time: '11:00am', read: true},
]

export default function Inbox(){
    return <div>
        {
            messages.map((message, ind)=>{
                return <div key={message.id.toString()+ind.toString()} className="flex p-2">
                    <div className="flex gap-2 w-20 me-10">
                        <FaRegStar/>
                        <div className="font-bold">{message.from}</div>
                    </div>

                    <div className="flex whitespace-nowrap w-2/3 border-2 border-black overflow-hidden text-ellipsis" >
                        <div className="overflow-hidden text-ellipsis">
                            <span className="font-bold">{message.subject}</span> - {message.content}
                        </div>                        
                    </div>

                    <div className="ms-4">
                        {message.time}
                    </div>
                </div>  
            })
        }

    </div>
}