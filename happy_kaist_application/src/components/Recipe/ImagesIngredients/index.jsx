import React from 'react';
import ImageIng from '../ImageIng';
import BuyButton from '../BuyButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class ImagesIngredients extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        //const { ingredients } = this.props;
        //const { inCount } = this.props;
       
        return(
            <div>
            <br></br>
            <Container>
                <Row>
                
                <p style={{textAlign: 'left', color: "rgba(0,0,255,0.8)", fontWeight:'700'}}>*each quantity accounts for one portion</p>
                </Row>
                {this.props.imgIngredients.map(group=>{
                    return(
                    <div>
                    <Row>
                        {group.map(value=>{
                            console.log(value);
                            return <Col md="1" lg="3"><ImageIng ing = {value.ing} qty = {value.qty}/></Col>;
                            })
                        }
                    </Row>
                    <br></br>
                    </div>
                    )
            })}
                
            </Container>
            
            {/*
            <Image imgIngredients = {this.props.imgIngredients}></Image>
            
            <Container>
                <Row>
                    <Col md="1" lg="3"><p style={{fontWeight:'bold'}} >Bun 2pcs</p></Col>
                    <Col md="1" lg="3"><p style={{fontWeight:'bold'}} >Ham 200gr</p></Col>
                    <Col md="1" lg="3"><p style={{fontWeight:'bold'}} >Lettuce</p></Col>
                    <Col md="1" lg="3"><p style={{fontWeight:'bold'}} >Bacon 200gr</p></Col>
                </Row>

                <Row>
                    <Col md="1" lg="3"><img src={bun} style={{width:'150px', height:'150px' }}></img> </Col>
                    <Col md="1" lg="3"><img src={ham} style={{width:'150px', height:'150px' }}></img> </Col>
                    <Col md="1" lg="3"><img src={lettuce} style={{width:'150px', height:'150px' }}></img> </Col>
                    <Col md="1" lg="3"><img src={bacon} style={{width:'150px', height:'150px' }}></img> </Col>
                </Row>
                
                <Row float='center'>
                    <Col md="1" lg="3"><BuyButton name = {"bun"}/></Col>
                    <Col md="1" lg="3"><BuyButton name = {"ham"}/></Col>
                    <Col md="1" lg="3"><BuyButton name = {"lettuce"}/></Col>
                    <Col md="1" lg="3"><BuyButton name = {"bacon"}/></Col>
                </Row>
                
                <Row>
                    <Col md="1" lg="3"><p style={{fontWeight:'bold'}} >Bacon 200gr</p></Col>
                </Row>
                <Row>
                    <Col md="1" lg="3"><img src={bacon} style={{width:'150px', height:'150px' }}></img> </Col>
                </Row>
                <Row float='center'>
                    <Col md="1" lg="3"><BuyButton inCount={ inCount }/></Col>
                </Row> 

            </Container>
            */}
            <br></br>
            </div>
        )
    }
}

export default ImagesIngredients;