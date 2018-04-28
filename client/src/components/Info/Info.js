import React, { Component } from 'react'
import { Row, Container, Col, Image} from '../Grid'
import './Info.css'

class Info extends Component {
    state={

    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                {this.props.data ? this.props.data.map(function(data, i){
                    return(
                        <div key={i}>
                            <Image
                                props={
                                    {
                                        fluid: data.fluid,
                                        src: data.src,
                                        alt: data.placeholder,
                                        extra: data.extra
                                    }
                                }
                            />
                            <h5>
                                {data.title}
                            </h5>
                        </div>
                    )
                }):""
             }

            </div>
        )
    }
}

export default Info