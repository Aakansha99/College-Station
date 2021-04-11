import React, { useContext, useEffect ,useState} from "react";
import QuerryContext from "../../Query/QuerryContext";
import QUERY from '../../Query/QUERRY';

const AskByPeers = () => {
  const querryContext = useContext(QuerryContext);
  console.log(querryContext);
 // 
  const { AskByPeer, user, querry,Answerquerry } = querryContext;

  useEffect(() => {
    AskByPeer();
  }, []);
  
  return querry.length == 0 ? (
    <h1>No Queries to Answer</h1>
  ) : (
    <>
      {/* <div style="margin-left: 400px;" class="row container-fluid text-center">
        <h3 class="title" style="text-align: center;">
          Answer Peer's Queries
        </h3>
      </div> */}
      <div>
        {querry.map((q) => (
        <div key={q._id} item xs={12} sm={6} md={6}>
          <QUERY q={q} />
        </div>
        
        ))}
      </div>
    </>
  );
};

export default AskByPeers;
