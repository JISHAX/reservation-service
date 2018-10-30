import React from 'react';
import { Input } from 'semantic-ui-react';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
     
            <div>





                <div>
                  <div>
                      <h3>
                          <span> Make a Reservation </span>
                      </h3>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                          For How many people
                          </div>
                        </div>
                        <div>
                          <div>
                          <div>
                            <div> Party size </div>
                            <div> For 5 people </div>
                          </div>
                          <div>
                            <div>
                              <div> Date </div>
                              <div> Thu, 11/1 </div>
                            </div>
                            <div>
                              <div> Time </div>
                              <div> 3:00 PM </div>
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button>
                          <span> Find a table </span>
                      </button>
                    </div>
                    <div>
                    <div>
                      <div>
                        <div> Symbol </div>
                        <div> Booked 12 times today</div>
                      </div>
                    </div>
                    <div></div>
                    </div>
                  </div>
                  <div className="_39f79d0d">
                  <div className="_538116c7">
                   <button> Save this restaurant </button>
                  </div>
                  </div>
                </div>

                <div>

                </div>
            </div>

        )
    }
};

export default App;