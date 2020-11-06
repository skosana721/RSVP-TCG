import React, { useState, useEffect } from "react";
import axios from "axios";

import { Card, CardTitle, CardText,  } from "reactstrap";
import FormModal from './FormModal'


function Event () {
  const [info, setInfo] = useState({ events: [] });

  
  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await axios("http://localhost:4100/events");
        setInfo({ ...info, events: result.data });
      } catch (e) {
        console.log(e)
     }
    }
    fetch()
  },[]);

  
 
  const event = info.events.map((item) => (
    <div  key={item.id}>
      <Card
        body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
        <CardTitle sm="5" tag="h5">
          {item.name}
        </CardTitle>
        <CardText>{item.venue}</CardText>
        <CardText>
          <small className="text-muted">{item.date}</small>
        </CardText>
            
            <FormModal/>
      
      </Card>
    </div>
    
  ));
  return (
    <div className="Container">
      <div className="event">
      

        {event}
      
      </div>
  
    </div>
  );
}

export default Event;


